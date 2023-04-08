module.exports = {
    lintOnSave: false,
    devServer: {
        proxy: {
            '/socket.io': {
                target: 'http://localhost:3000',
                changeOrigin: true
            }
        }
        // lintOnSave: false //关闭语法检查
    }
}