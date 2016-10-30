var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/201608node');
//定义集合的模型骨架 定义集合中的文档字段的名称和类型
var userSchema = new mongoose.Schema({
    name:String,
    age:Number
},{collection:'user'});
//定义可以操作数据库的User模型
var User = mongoose.model('User',userSchema);
//准备测试数据进行高级查询
/*var users = [];
for(var i=1;i<=10;i++){
  users.push({name:'zfpx'+i,age:i});
}
User.create(users,function(err,docs){
    console.log(docs);
});*/
/**
 * 1. 只返回需要的字段
 * 1 表示只要这些字段，除此之外其它 字段都不要
 * 0 表示排除这些字段，除此之外都要
 * 0 和 1 不能共存 BadValue Projection cannot have a mix of inclusion and exclusion.
 */
/*User.find({},{name:1},function(err,docs){
    if(err){
        console.log(err);
    }else{
        console.log(docs)
    }
});*/
/**
 * 登录 用户名+密码
 * zfpx4 4
 */
/*User.findOne({name:'zfpx4',age:6},function(err,doc){
    if(err){
        console.log(err);
    }else{
        if(doc)
        console.log('有这个人');
        else
            console.log('无这个人');
    }
});*/
/**
 *
 */
/*var _id = '581575f7f2dd7811d02e2058';
User.findById(_id,function(err,doc){
    console.log(doc);
});*/
/**
 * 分页查询
 *
 */
var pageNum = 2;
var pageSize = 3;
//User.find = function(query,filter,options,callback){
//    var fn = arguments[arguments.length-1];
//}
// skip 跳过指定的条数
// limit 限定返回的条数
/*
User.find({},{},{skip:3,limit:3,sort:{age:-1}},function(err,docs){
  console.log(docs);
});*/
User.find().skip(pageSize*(pageNum-1)).limit(pageSize).sort({age:1}).exec(function(err,docs){
    console.log(docs);
});