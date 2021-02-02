/*
 * @Author: huangxingyuan
 * @Date: 2021-01-17 21:33:41
 * @LastEditors: huangxingyuan
 * @LastEditTime: 2021-01-18 18:45:48
 * @Description: 文件功能描述
 */
import { defineConfig } from 'umi';
import path from 'path';
import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';
const buildConfig = {
    dev: {
        externals: {
            react: 'React',
            'react-dom': 'ReactDOM',
        },
        scripts: [
            '//gw.alipayobjects.com/os/lib/react/16.13.1/umd/react.development.js',
            '//gw.alipayobjects.com/os/lib/react-dom/16.13.1/umd/react-dom.development.js',
        ],
    },
    test: {
        externals: {},
        scripts: [],
        publicPath: 'http://10.179.24.174:8090/norns/dist/',
    },
    pre: {
        externals: {},
        scripts: [],
    },
    pro: {
        externals: {},
        scripts: [],
    },
};
const { BUILD_ENV = 'dev' } = process.env; // package.json脚本配置的配置

type BuildConfig = keyof typeof buildConfig;

export default defineConfig({
    externals: buildConfig[BUILD_ENV as BuildConfig].externals, // 因为打包是umirc.pro会和umirc做深合并
    scripts: buildConfig[BUILD_ENV as BuildConfig].scripts,
    define: {
        'process.env.NODE_ENV_NORNS': 'dev',
    },
    nodeModulesTransform: {
        type: 'none', // none本地编译提速，线上建议设置为al可以规避一些兼容性问题
    },
    // ignoreMomentLocale:true, // ignoreMomentLocale:true, // 不需要，因为已经用了dayjs
    devtool: false, // 禁用 sourcemap,增量编译提速
    dynamicImport: {
        loading: '@/components/loading',
    },
    publicPath: buildConfig[BUILD_ENV as BuildConfig] && buildConfig[BUILD_ENV as BuildConfig].publicPath, // 编译打包静态资源路径
    history: {
        type: 'hash',
    },
    alias: {
        '@': path.resolve(__dirname, 'src'),
    },
    chainWebpack(memo) {
        memo.plugin('AntdDayjsWebpackPlugin').use(new AntdDayjsWebpackPlugin());
    },
});
