import React from 'react';
import { Button } from 'antd';
import { connect, Dispatch } from 'umi';
import { ConnectState } from '@/models/connect';
import { User } from '@/service';
import WithCancelRequestHoc, { WithCancelProps } from '@/components/withCancelRequestHoc';
import { cancel } from '@/utils/axios';
import CodeMirror from '@/components/codeMirror';
import { code } from './config';

type MapStateToProps = ReturnType<typeof mapStateToProps>;
type MapDispatchToProps = ReturnType<typeof mapDispatchToProps>;

interface IProps extends MapStateToProps, MapDispatchToProps, WithCancelProps {}
const Index: React.FunctionComponent<IProps> = () => {
    const handleClick = () => {
        cancel('cancel message');
    };
    const handleClickRequest = async () => {
        User.getUserInfo({ name: 'test' });
    };

    return (
        <div>
            <div>
                <Button onClick={handleClick} type="primary" style={{ marginRight: 20 }}>
                    点击，取消请求
                </Button>
                <Button onClick={handleClickRequest} type="primary">
                    点击，发出请求
                </Button>
                <div>
                    <CodeMirror code={code} />
                </div>
            </div>
        </div>
    );
};
function mapStateToProps({ global }: ConnectState) {
    return {
        userInfo: global.userInfo || {},
    };
}
function mapDispatchToProps(dispatch: Dispatch) {
    return {
        getUserInfo: (payload: any) => {
            dispatch({
                type: 'global/getUserInfo',
                payload,
            });
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(WithCancelRequestHoc(Index));
