import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://mock.presstime.cn/mock/67f33492aa477834147779e7/WYW'
});
export default instance;