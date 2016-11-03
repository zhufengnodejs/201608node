//自动产出html文件，在html文件可以自动插入生成的脚本
var HtmlWebpackPlugin = require('html-webpack-plugin');
//当webpack打包完成后自动打开浏览器窗口并访问指定的url
var OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');
// npm install html-webpack-plugin open-browser-webpack-plugin --save
module.exports = {
    entry:'./message/index.js',
    output:{
        path:'./build',
        filename:'bundle.js'
    },
    //指定静态文件根目录
    devServer:{//在本地服务器上启动一个服务，监听 8080端口。并以build目录作为静态文件根目录
      inline:true,//当源代码改变后自动重新打包，然后刷新浏览器
      contentBase:'./build'//静态文件根目录
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:'babel'
            }
            ,{
                test:/\.css$/,
                loader:'style!css'
            },{
                test:/\.(svg|eot|ttf|woff|woff2)/,
                loader:'url?limit=2048'
            }
        ]
    },
    plugins:[
        //通过此插件可以根据模板自动HTML文件，并且自动插入产出后的文件
        new HtmlWebpackPlugin({
            title: '珠峰留言版',
            template: './message/index.html'
        }),
        //自动打开浏览器窗口
        new OpenBrowserWebpackPlugin({url:'http://localhost:8080'})
    ]
}