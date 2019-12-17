import { AxiosRequestConfig,AxiosResponse } from './types'
import qs from 'qs';
import parseHeaders from 'parse-headers';
export default class Axios{
    //T是服务端响应(res)data的类型
    request<T>(config:AxiosRequestConfig):Promise<AxiosResponse<T>>{
        return this.dispatchRequest<T>(config)
    }
    //定义一个派发请求的方法
    dispatchRequest<T>(config:AxiosRequestConfig):Promise<AxiosResponse<T>>{
        return new Promise<AxiosResponse<T>>((resolve,reject)=>{
            let { method,url,params,headers,data,timeout } = config;
            let request = new XMLHttpRequest();
            if(params){
                //{ name:'baiyan',password:'123456'}=>name=baiyan&password=123456
                params = qs.stringify(params);
                url+=((url.indexOf('?')!==-1?'&':'?')+params);
            }
            request.open(method,url,true);
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
                        resolve(response);
                    }else{
                        reject('请求失败');
                    }
                }
            }
            if(headers){
                for(let key in headers){
                    request.setRequestHeader(key,headers[key]);
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
            request.send(body)
        })
    }
}