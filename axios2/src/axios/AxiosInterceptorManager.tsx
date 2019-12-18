
interface OnFulfilled<V> {
    (value: V): V | Promise<V>;
}
 interface OnRejected {
    (error: any): any
}
export interface Interceptor<V> {
    onFulfilled: OnFulfilled<V>;
    onRejected?: OnRejected
}
// export interface AxiosInterceptorManager<V>{
//     use(onFulfilled?: OnFulfilled<V>, onRejected?: OnRejected):number;
//     eject(id:number):void
// }
export default class interceptorManager<V>{
    public interceptors: Array<Interceptor<V>|null> = []
    //每当调用use的时候会在拦截管理器中添加一个拦截器
    use(onFulfilled: OnFulfilled<V>, onRejected?: OnRejected): number {
        this.interceptors.push({
            onFulfilled,
            onRejected
        })
        return this.interceptors.length - 1;
    }
    eject(id: number) {
        if (this.interceptors[id]) {
            this.interceptors[id] = null
        }
    }
}