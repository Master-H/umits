import { axiosGet } from '@/utils/axios';

const TestService = {
    // 获取用户信息
    getTest1() {
        return axiosGet('/test/1');
    },
    // 获取用户信息
    getTest2() {
        return axiosGet('/test/2');
    },
};
export default TestService;
