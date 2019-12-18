import Axios from './axios';
import { AxiosInstance } from './types'
import { isCancel,CancelToken } from './cancel';
//创建一个axios实例，axios实际上就是一个函数
 function createInstance():AxiosInstance{
    let context:Axios<any> = new Axios();
    //让Axios原型上的request方法的this绑定到Axios实例上
    let instance = Axios.prototype.request.bind(context);
    //把Axios的原型方法和Axios实例拷贝到request方法上
    instance = Object.assign(instance,Axios.prototype,context);
    return instance as AxiosInstance;
}

let axios = createInstance();
axios.CancelToken = CancelToken;
axios.isCancel = isCancel
export default axios;
export * from './types'