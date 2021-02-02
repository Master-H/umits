import React, { useEffect } from 'react';
import WithCancelRequestHoc from '@/components/withCancelRequestHoc';
import { TestService } from '@/service';

interface IProps {}
const PaneA: React.FunctionComponent<IProps> = () => {
    useEffect(() => {
        TestService.getTest1();
        TestService.getTest2();
    }, []);
    return (
        <div>
            <h1>切换到面板TabB，看效果</h1>
        </div>
    );
};

export default WithCancelRequestHoc(PaneA);
