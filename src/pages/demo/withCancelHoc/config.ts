/* eslint-disable import/prefer-default-export */
//
export const code = `
    // panA.tsx
    import WithCancelRequestHoc from '@/components/withCancelRequestHoc';
    
    const PaneA: React.FunctionComponent<IProps> = () => { 
        .....
    }
    export default WithCancelRequestHoc(PaneA);

    // 使用
    <Tabs defaultActiveKey="A" onChange={setTabKey}>
        <TabPane tab="TabA" key="A">
            {tabKey === 'A' && <PaneA />}
        </TabPane>
        <TabPane tab="TabB" key="B">
            <PaneB />
        </TabPane>
    </Tabs>
`;
