import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
let baseUrl = 'http://localhost:9090';

//返回给服务器的对象
interface User {
    name: string,
    password: string
}
let user: User = {
    name: 'danshi',
    password: '123456'
}
const CancelToken = axios.CancelToken;
const isCancel = axios.isCancel;
const source = CancelToken.source();
console.log(source)
axios({
    method: 'post',
    url: baseUrl + '/post',
    headers: {
    },
    cancelToken:source.token,
    data: user
}).then((res: AxiosResponse<User>) => {
    console.log(res);
    return res.data;
}).catch((error: any) => {
    if(isCancel(error)){
        console.log('需要取消请求',error)
    }else{
        console.log(error); 
    }
})
source.cancel('用户取消请求')