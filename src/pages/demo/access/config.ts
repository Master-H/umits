/* eslint-disable import/prefer-default-export */
//
export const code = `

    // 省略代码。。。
    import { useAccess, Access } from 'umi';
    import AccessComponent from '@/components/access';
    // 省略代码。。。


    return (
        <div>
            <Access accessible={access.canReadFoo} fallback={AccessComponent()}>
                <h1>权限控制</h1>
            </Access>
        </div>
    );
`;
