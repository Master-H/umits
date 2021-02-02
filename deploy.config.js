/*
 * @Author: huangxingyuan
 * @Date: 2021-01-05 21:57:26
 * @LastEditors: huangxingyuan
 * @LastEditTime: 2021-01-06 21:35:45
 * @Description: 文件功能描述
 */
module.exports = {
    projectName: 'norns', // 项目名称
    privateKey: '/xx/.ssh/id_rsa', // 填写你的id_rsa地址，查看方式： 1、cd ~/.ssh 2、pwd
    passphrase: '',

    test_2: {
        // 环境对象
        name: '测试环境2', // 环境名称
        script: 'npm run build2', // 打包命令
        host: 'xx.xx.xx.xx', // 服务器地址
        port: 22, // 服务器端口号
        username: 'xx', // 服务器登录用户名
        password: 'xx', // 服务器登录密码
        distPath: 'dist', // 本地打包生成目录
        webDir: '/root/xx/xx/dist', // 服务器部署路径（不可为空或'/'）
        isRemoveRemoteFile: true, // 是否删除远程文件（默认true）
    },
};
