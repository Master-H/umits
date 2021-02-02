import { axiosGet, axiosPost } from '@/utils/axios';

interface GetUserInfo {
    name: string;
}
interface UpdateUserInfo {
    name?: string;
    age?: number;
}
const User = {
    // 获取用户信息
    getUserInfo(params: GetUserInfo) {
        return axiosGet('/user/detail', params);
    },
    // 更新用户信息
    updateUserInfo(params: UpdateUserInfo) {
        return axiosPost('/user/update', params);
    },
};
export default User;
