import { Effect, Reducer, Subscription } from 'umi';
import { User } from '@/service';
import { UserInfo } from './connect';

export interface GlobalModelState {
    userInfo: UserInfo;
}

export interface GlobalModelType {
    namespace: 'global';
    state: GlobalModelState;
    effects: {
        getUserInfo: Effect;
    };
    reducers: {
        save: Reducer<GlobalModelState>;
        // 启用 immer 之后
        // save: ImmerReducer<GlobalModelState>;
    };
    subscriptions: { setup: Subscription };
}

const GlobalModel: GlobalModelType = {
    namespace: 'global',
    state: {
        userInfo: { name: 'hxy' },
    },
    effects: {
        *getUserInfo({ payload }, { call, put }) {
            const response = yield call(User.getUserInfo, { ...payload, name: 'test' });
            if (response.status === 'ok') {
                yield put({
                    type: 'save',
                    payload: {
                        userInfo: response.data,
                    },
                });
            }
        },
    },
    reducers: {
        save(state, action) {
            return {
                ...state,
                ...action.payload,
            };
        },
        // 启用 immer 之后
        // save(state, action) {
        //   state.name = action.payload;
        // },
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname }) => {
                const reg = /^\/login/g;
                if (reg.test(pathname)) {
                    dispatch({
                        type: 'getUserInfo',
                        payload: {},
                    });
                }
            });
        },
    },
};

export default GlobalModel;
