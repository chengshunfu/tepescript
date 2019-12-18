import { AxiosRequestConfig,AxiosResponse } from './types'
import AxiosInterceptorManager,{ Interceptor } from './AxiosInterceptorManager';
import qs from 'qs';
import parseHeaders from 'parse-headers';
let defaults :AxiosRequestConfig = {
    method:'get',
    timeout:0,
    headers:{
        common:{
            name:'request.name',
            accept:'application/json',//告诉服务器返回的是json数据
        }
    },
    transformRequest:(data:any,headers:any)=>{
            headers['common']['content-type'] = 'application/json';
            return JSON.stringify(data)
    },
    transformResponse:(response:any)=>{
        return response.data
    }
}
let getStyleMethod = ['get','head','delete','options'];
getStyleMethod.forEach((method:string)=>{
    defaults.headers![method]={}
})
let postStyleMethod = ['post','patch','put'];
postStyleMethod.forEach((method:string)=>{
    defaults.headers![method]={
        'content-type':'application/json'
    }
})
let allMethods = [...getStyleMethod,...postStyleMethod];

export default class Axios<T>{
    public defaults:AxiosRequestConfig = defaults
    public interceptors = {
        request: new AxiosInterceptorManager<AxiosRequestConfig>(),
        response: new AxiosInterceptorManager<AxiosResponse<T>>()
    }
    //T是服务端响应(res)data的类型
    request(config:AxiosRequestConfig):Promise<AxiosRequestConfig|AxiosResponse<T>>{
        // return this.dispatchRequest<T>(config);
        config.headers=Object.assign(this.defaults.headers,config.headers);
        if(config.transformRequest && config.data){
            config.data = config.transformRequest(config.data,config.headers)
        }
        const chain: Array<any>= [
            {onFulfilled: this.dispatchRequest}
        ]
        this.interceptors.request.interceptors.forEach((interceptors:Interceptor<AxiosRequestConfig>|null)=>{
            interceptors && chain.unshift(interceptors)
        })
        this.interceptors.response.interceptors.forEach((interceptors:Interceptor<AxiosResponse<T>>|null)=>{
            interceptors && chain.push(interceptors)
        })

        let promise:Promise<AxiosRequestConfig> = Promise.resolve(config);
        while(chain.length){
            const {onFulfilled,onRejected} = chain.shift();
            promise = promise.then(onFulfilled,onRejected)
        }
        return promise;
    }
    //定义一个派发请求的方法
    dispatchRequest<T>(config:AxiosRequestConfig):Promise<AxiosResponse<T>>{
        return new Promise<AxiosResponse<T>>((resolve,reject)=>{
            let { method,url,params,headers,data,timeout } = config;
            let request = new XMLHttpRequest();
            if(params){
                //{ name:'baiyan',password:'123456'}=>name=baiyan&password=123456
                params = qs.stringify(params);
                url+=((url!.indexOf('?')!==-1?'&':'?')+params);
            }
            request.open(method!,url!,true);
            request.responseType = 'json';
            request.onreadystatechange = function(){
                if(request.readyState===4 &&request.status !==0){
                    if(request.status>=200 && request.status<300){
                        let response:AxiosResponse<T> = {
                            data:request.response?request.response:request.responseText,
                            status:request.status,
                            statusText:request.statusText,
                            headers:parseHeaders(request.getAllResponseHeaders()),
                            config,
                            request
                        }
                        if(config.transformResponse){
                            response = config.transformResponse(response)
                        }
                        resolve(response);
                    }else{
                        reject('请求失败');
                    }
                }
            }
            if(headers){
                for(let key in headers){
                    if(key ==='common'|| allMethods.includes(key)){
                        if(key === config.method){
                            for(let key2 in headers[key]){
                                request.setRequestHeader(key2,headers[key][key2]);
                            }
                        }
                    }else{
                        request.setRequestHeader(key,headers[key]);
                    }
                }
            }
            let body:string|null = null;
            if(data){
                body = JSON.stringify(data);
            }
            request.onerror = function(){
                reject('网络错误')
            }
            if(timeout){
                request.timeout = timeout
                request.ontimeout = function(){
                    reject(`axios请求${timeout}超时`)
                }
            }
            if(config.CancelToken){
                config.CancelToken.then((message:string)=>{
                    request.abort();
                    reject(message);
                })
            }
            request.send(body)
        })
    }
}