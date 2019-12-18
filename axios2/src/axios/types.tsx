import AxiosInterceptorManager from './AxiosInterceptorManager';
export type Methods = 'post'|'POST'|'get'|'GET'|'put'|'PUT'|'delete'|'DELETE'|'options'|'OPTIONS';
export interface AxiosRequestConfig{
    method?:Methods,
    url?:string,
    params?:any,
    headers?:Record<string,any>,
    data?:Record<string,any>,
    timeout?:number,
    transformRequest?:(data:any,headers:any)=> any;
    transformResponse?:(data:any)=>any;
    CancelToken?:any
}
//promise<T>,他定义的是promise成功态之后resolve值的类型
export interface AxiosInstance{
    <T=any>(config:AxiosRequestConfig):Promise<AxiosResponse<T>>;
    interceptors:{
        request: AxiosInterceptorManager<AxiosRequestConfig>;
        response: AxiosInterceptorManager<AxiosResponse>;
    }
    CancelToken:any;
    isCancel:any
}

export interface AxiosResponse<T = any>{
    data:T,
    status:number,
    statusText:string,
    headers?:Record<string,any>
    config:AxiosRequestConfig,
    request?:XMLHttpRequest
}
