import React from 'react';
import { useLocation } from 'umi';
import Login from './login';
import BaseLayout from './baseLayout';

const Layout: React.FunctionComponent = props => {
    // 你可以把它替换成你自己的登录认证规则（比如判断 token 是否存在）
    const isLogin = window.localStorage.getItem('user') || true;
    const { children } = props;
    const { pathname } = useLocation();

    if (pathname === '/login') {
        return <Login>{props.children}</Login>;
    }

    if (!isLogin && pathname !== '/login') {
        return <Login>{props.children}</Login>;
    }

    return <BaseLayout>{children}</BaseLayout>;
};
export default Layout;
