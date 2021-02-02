/* eslint-disable import/prefer-default-export */
//
export const code = `

    // 省略代码。。。
    import { cancel } from '@/utils/axios';
    // 省略代码。。。


    const handleClick = () => {
        cancel('cancel message');
    };
    const handleClickRequest = async () => {
        User.getUserInfo({ name: 'test' });
    };
`;
