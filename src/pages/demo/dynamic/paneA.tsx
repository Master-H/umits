import React from 'react';
import WithCancelRequestHoc from '@/components/withCancelRequestHoc';

interface IProps {}
const PaneA: React.FunctionComponent<IProps> = () => {
    return (
        <div>
            <h1>将chrome network网速切换为3G</h1>
            <h1>然后切换到TabB</h1>
        </div>
    );
};

export default WithCancelRequestHoc(PaneA);
