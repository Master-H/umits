import React, { useEffect } from 'react';
import { cancel } from '@/utils/axios';

export interface WithCancelProps {
    cancelToken: any;
}

const withCancelHoc = <P extends object>(WrappedComponent: React.ComponentType<P>, pageName?: any) => (props: P) => {
    useEffect(() => {
        return () => {
            cancel(pageName || '上个页面请求已经取消');
        };
    }, []);
    const newProps = {
        ...props,
    };
    return (
        <div>
            <WrappedComponent {...newProps} />
        </div>
    );
};

export default withCancelHoc;
