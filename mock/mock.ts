// eslint-disable-next-line import/no-extraneous-dependencies
import { delay } from 'roadhog-api-doc';

const userDetail = (req: any, res: any) => {
    res.send({
        errno: 1,
        errorMessage: '返回数据不对',
        data: {
            userInfo: {
                name: 'hxy',
                age: 2,
            },
        },
    });
};
const userInfo = (req: any, res: any) => {
    res.send({
        errno: 10,
        errorMessage: '返回数据不对a',
        data: {
            userInfo: {
                name: 'hxy',
                age: 2,
            },
        },
    });
};
const userUpdate = (req: any, res: any) => {
    res.send({
        errno: 1,
        errorMessage: '出错',
        data: {
            userInfo: {
                name: 'hxy',
                age: 2,
            },
        },
    });
};
const test1 = (req: any, res: any) => {
    setTimeout(() => {
        res.send({
            errno: 0,
            errorMessage: '出错',
            data: {
                userInfo: {
                    name: 'hxy',
                    age: 2,
                },
            },
        });
    }, 1000000);
};
const test2 = (req: any, res: any) => {
    setTimeout(() => {
        res.send({
            errno: 0,
            errorMessage: '出错',
            data: {
                userInfo: {
                    name: 'hxy',
                    age: 2,
                },
            },
        });
    }, 1000000);
};
const proxy = {
    'GET /user/detail': userDetail,
    'GET /user/info': userInfo,
    'GET /test/1': test1,
    'GET /test/2': test2,
    'POST /user/update': userUpdate,
};

export default delay(proxy, 5000);
