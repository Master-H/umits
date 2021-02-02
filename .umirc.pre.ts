import { defineConfig } from 'umi';
import path from 'path';
import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';
const PUBLICPATH = 'http://prestatic.udache.com/pre-norns/';
export default defineConfig({
    publicPath: PUBLICPATH,
    nodeModulesTransform: {
        type: 'none',
    },
    devtool: false,
    dynamicImport: {
        loading: '@/components/loading',
    },
    define: {
        'process.env': 'pre',
    },
    manifest: {
        basePath: '/dist/',
        fileName: 'manifest.json',
        publicPath: '/',
    },
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
        config.plugin('AntdDayjsWebpackPlugin').use(new AntdDayjsWebpackPlugin()); // dayjs替换moment，减小包体积
    },
});
