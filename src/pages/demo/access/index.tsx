import React from 'react';
import { useAccess, Access } from 'umi';
import AccessComponent from '@/components/access';
import CodeMirror from '@/components/codeMirror';
import { code } from './config';

const Authority = () => {
    const access = useAccess();
    return (
        <div style={{ height: '100vh' }}>
            <Access accessible={access.canReadFoo} fallback={AccessComponent()}>
                <h1>权限控制</h1>
            </Access>
            <CodeMirror code={code} />
        </div>
    );
};
export default Authority;
