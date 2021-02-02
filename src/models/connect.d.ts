import { GlobalModelState } from './global';

export { GlobalModelState };

export interface ConnectState {
    global: GlobalModelState;
}

export interface UserInfo {
    name?: string;
    role?: string;
    [key: string]: any;
}
