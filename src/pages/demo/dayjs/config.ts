/* eslint-disable import/prefer-default-export */
//
export const code = `
    【 替换理由 】
    dayjs: 4kb  moment:50kb

    // 用法不变，通过插件已经将antd内置的moment替换成了dayjs
    import { DatePicker, TimePicker, Calendar } from 'antd';

    // 在umirc.ts做如下配置
    import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin'

    export default defineConfig({
        chainWebpack(memo) {
            memo.plugin('AntdDayjsWebpackPlugin').use(new AntdDayjsWebpackPlugin())
        },
    }
   
`;
