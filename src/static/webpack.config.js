const path = require('path');
const { LoaderTargetPlugin } = require('webpack');

module.exports = {
    // enntry file
    entry: ['./js/header.js', './js/login.js'],
    // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    },
    module: {},
    devtool: 'source-map',
    // https://webpack.js.org/concepts/mode/#mode-development
    mode: 'development'
};