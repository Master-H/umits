/* eslint-disable import/prefer-default-export */
//
export const code = `

    // 省略代码。。。
    const AsyncTabPaneB = dynamic(() => import('./paneB'));
    // 省略代码。。。


    <Tabs defaultActiveKey="A">
        <TabPane tab="TabA" key="A">
            <PaneA />
        </TabPane>
        <TabPane tab="TabB" key="B">
            <AsyncTabPaneB />
        </TabPane>
    </Tabs>
`;
