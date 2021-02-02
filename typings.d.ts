/* eslint-disable no-unused-vars */
declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module 'roadhog-api-doc';
declare module '@ant-design/icons';
declare module 'antd-dayjs-webpack-plugin';
declare module '*.svg' {
    // eslint-disable-next-line no-unused-vars
    // eslint-disable-next-line no-undef
    export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement;
    const url: string;
    export default url;
}
declare interface Window {
    // 扩展window对象属性
    AuthPoints: number;
}
declare interface PromiseConstructor {
    myAll(promises: Array<Promise<any>>, count?: number): Promise<Array<any>>;
}
