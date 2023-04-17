const path = require('path')

module.exports = {
    resolve: {
        extensions: ['.scss'],
        alias: {
            '__main': path.resolve(__dirname, './main/resources'),
            '@main': path.resolve(__dirname, './main/resources'),
            '@': path.resolve(__dirname, './src'),
        }
    }
}
