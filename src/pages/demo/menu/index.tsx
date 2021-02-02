import React from 'react';
import { connect, Dispatch } from 'umi';
import { ConnectState } from '@/models/connect';
import WithCancelRequestHoc, { WithCancelProps } from '@/components/withCancelRequestHoc';
import CodeMirror from '@/components/codeMirror';
import { code } from './config';

type MapStateToProps = ReturnType<typeof mapStateToProps>;
type MapDispatchToProps = ReturnType<typeof mapDispatchToProps>;

interface IProps extends MapStateToProps, MapDispatchToProps, WithCancelProps {}
const Index: React.FunctionComponent<IProps> = () => {
    return (
        <div>
            <div>
                <h1> 配置化，生成菜单列表</h1>

                <CodeMirror code={code} text="菜单配置化示例" isShowTitle={false} />
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
        getUserInfo: (payload: Object) => {
            dispatch({
                type: 'global/getUserInfo',
                payload,
            });
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(WithCancelRequestHoc(Index));
