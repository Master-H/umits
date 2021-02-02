import { axiosGet, axiosPost } from '@/utils/axios';

interface GetLoginInfo {
    name: string;
}
interface UpdateLoginInfo {
    name?: string;
    age?: number;
}
const Login = {
    // 获取用户信息
    getLoginInfo(params: GetLoginInfo) {
        return axiosGet('/login', params);
    },
    // 更新用户信息
    updateLoginInfo(params: UpdateLoginInfo) {
        return axiosPost('/login', params);
    },
};
export default Login;
