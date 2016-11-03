var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');
// npm install html-webpack-plugin open-browser-webpack-plugin --save
module.exports = {
    entry:'./message/index.js',
    output:{
        path:'./build',
        filename:'bundle.js'
    },
    //指定静态文件根目录
    devServer:{
      inline:true,
      contentBase:'./build'
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:'babel'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: '珠峰留言版',
            template: './message/index.html'
        }),
        new OpenBrowserWebpackPlugin({url:'http://localhost:8080'})
    ]
}