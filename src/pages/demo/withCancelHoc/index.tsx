import React, { useState } from 'react';

import { Tabs } from 'antd';
import CodeMirror from '@/components/codeMirror';
import PaneA from './paneA';
import PaneB from './paneB';
import { code } from './config';

const { TabPane } = Tabs;

export default function WithCancelHoc() {
    const [tabKey, setTabKey] = useState('A');
    return (
        <div>
            <Tabs defaultActiveKey="A" onChange={setTabKey}>
                <TabPane tab="TabA" key="A">
                    {tabKey === 'A' && <PaneA />}
                </TabPane>
                <TabPane tab="TabB" key="B">
                    <PaneB />
                </TabPane>
            </Tabs>
            <div>
                <CodeMirror code={code} text="组件卸载，自动取消为pending中的请求" />
            </div>
        </div>
    );
}
