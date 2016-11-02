module.exports = {
    entry:'./message/index.js',
    output:{
        path:'./build',
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:'babel'
            }
        ]
    }
}