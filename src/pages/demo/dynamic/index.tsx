import React from 'react';
import { Tabs } from 'antd';
import { dynamic } from 'umi';
import CodeMirror from '@/components/codeMirror';
import styles from './index.less';
import { code } from './config';
import PaneA from './paneA';

const AsyncTabPaneB = dynamic(() => import('./paneB'));

const { TabPane } = Tabs;

export default function Dynamic() {
    return (
        <div>
            <Tabs defaultActiveKey="A">
                <div className={styles.apple} />
                <TabPane tab="TabA" key="A">
                    <PaneA />
                </TabPane>
                <TabPane tab="TabB" key="B">
                    <AsyncTabPaneB />
                </TabPane>
            </Tabs>
            <div>
                <CodeMirror code={code} text="异步加载代码示例" />
            </div>
        </div>
    );
}
