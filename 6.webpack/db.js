var mongoose = require('mongoose');
//连接本地数据库
mongoose.connect('mongodb://localhost/message');

//定义schema 数据库集合的骨架模型
var MessageSchema = new mongoose.Schema({
    author:String,//作者
    date:Date,//日期
    content:String//内容
});
//定义操作数据库的model
exports.Message = mongoose.model('Message',MessageSchema);

