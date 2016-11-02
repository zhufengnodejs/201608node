module.exports = {
    entry:'./react/index.js',
    output:{
        path:'./build',
        filename:'bundle.js'
    },
    module:{
        //如何加载不同类型的文件
        loaders:[
            {
                test:/\.js$/,
                loader:'babel'
            }
        ]
    }

}