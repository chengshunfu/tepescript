import axios, { AxiosResponse, AxiosRequestConfig } from './axios';
let baseUrl = 'http://localhost:9090';

//返回给服务器的对象
interface User {
    name: string,
    password: string
}
let user: User = {
    name: 'baiyan',
    password: '123456'
}
axios<User>({
    method: 'post',
    url: baseUrl + '/post',
    headers: {
        'Content-Type': 'application/json'
    },
    data: user
}).then((res: AxiosResponse<User>) => {
    console.log(res);
    return res.data;
}).then((error: any) => {
    console.log(error);
})