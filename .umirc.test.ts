/*
 * @Author: huangxingyuan
 * @Date: 2021-01-17 21:33:41
 * @LastEditors: huangxingyuan
 * @LastEditTime: 2021-01-17 23:43:32
 * @Description: 文件功能描述
 */
import { defineConfig } from 'umi';
import path from 'path';
import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';

const buildConfig = {
    test: {
        publicPath: 'http://10.179.24.174:8090/norns/dist/',
    },
};
const { BUILD_ENV = 'test' } = process.env; // package.json脚本配置的配置

type BuildConfig = keyof typeof buildConfig;
export default defineConfig({
    // externals: {
    //     react: 'React',
    //     'react-dom': 'ReactDOM',
    // },
    devtool: 'cheap-module-source-map', // 禁用 sourcemap,增量编译提速
    define: {
        'process.env.BUILD_ENV': 'test',
    },
    nodeModulesTransform: {
        type: 'none',
    },
    dynamicImport: {
        loading: '@/components/loading',
    },
    // scripts: [
    //     '//gw.alipayobjects.com/os/lib/react/16.13.1/umd/react.development.js',
    //     '//gw.alipayobjects.com/os/lib/react-dom/16.13.1/umd/react-dom.development.js',
    // ],
    publicPath: buildConfig[BUILD_ENV as BuildConfig] && buildConfig[BUILD_ENV as BuildConfig].publicPath, // 编译打包静态资源路径
    history: {
        type: 'hash',
    },
    alias: {
        '@': path.resolve(__dirname, 'src'),
    },

    chainWebpack: function(config, { webpack }) {
        config.merge({
            optimization: {
                minimize: true,
                splitChunks: {
                    chunks: 'all',
                    minSize: 30000, // 单位byte
                    minChunks: 1, // 被引用次数
                    maxAsyncRequests: 5, // 拆分后异步加载chunk的数量次数，大于5异步要排队
                    automaticNameDelimiter: '.', // chunks名字分隔符
                    cacheGroups: {
                        common: {
                            name: 'common', // 基本框架
                            chunks: 'all', // 不区分动态还是同步方式，只要可拆就拆
                            test: /[\\/]node_modules[\\/](react-dom|react|dva|redux)[\\/]/,
                            enforce: true,
                            priority: 10,
                        },
                        vendor: {
                            // 公共chunks
                            name: 'vendors',
                            test: /^.*node_modules[\\/](?!react|react-dom|antd).*$/,
                            chunks: 'all',
                            priority: 9,
                        },
                        'async-commons': {
                            // 其余异步加载包
                            chunks: 'async', //只优化动态加载的代码
                            minChunks: 2,
                            name: 'async-commons',
                            priority: 8,
                        },
                    },
                },
            },
        });
        // dayjs替换moment，减小包体积
        config.plugin('AntdDayjsWebpackPlugin').use(new AntdDayjsWebpackPlugin());
    },
});
