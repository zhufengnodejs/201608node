var mongoose = require('mongoose');
//使用自己写的promise库 使用es6 promise库
mongoose.Promise = Promise;
//连接数据库 mongodb://IP/数据库名 数据库不需要事先创建，直接使用即可
//因为使用时候mongodb如果发现此数据库不存会自动帮你创建
mongoose.connect('mongodb://127.0.0.1/201608db');
// 1. schema定义了一个集合的名称，里面文档记录的字段名称和字段类型
// 如果字段名称或类型不匹配，则存储失败
//不能操作数据库
var personSchema = new mongoose.Schema({
  name:String,//人的姓名
  birthday:Date,//出生日期
  email:String, //邮箱
  count:Number
},{collection:'person'});//指定集合的名称

//2 model是真正用来操作数据库的。
//1参数是模型的名称 2参数是schema实例
//二个参数表示定义一个模型，一个参数表示获取一个模型
var User = mongoose.model('User',personSchema);
/**
 * 保存的时候会拿字段名称和schema定义一一匹配，如果匹配不上，则忽略此字段
 * 如果类型不匹配，则会尝试类型转换，如果转换不成功，是报错保存失败
 */
var userObj = {name:'张三',birthday:new Date(),email:'888@126.com',home:'北京'};
/*User.create(userObj,function(err,doc){
    if(err){
        console.error(err);
    }else{
        console.log(doc);
    }

});*/

/**
 * 切换到指定的数据库
 * > use 201608db
     switched to db 201608db

   查看当前是哪个数据库
 > db
   201608db
   查看帮助，了解数据库有哪些方法
    db.help();
   查看当前数据库下面的有哪些集合
 >  db.getCollectionNames();
 [ "person", "system.indexes" ]
 > show collections;
    person
   system.indexes

 如何 查看集合中的文档
  db.集合名称.find();
  db.person.find();
 */

//User.find({name:'张三4'},function(err,docs){
//    if(err){
//        console.error(err);
//    }else{
//        console.log(docs.length);
//    }
//});

/*
User.find({name:'张三4'}).then(function(docs){
    console.log(docs);
},function(err){
    console.log(err);
});*/
/**
 * 如果你想用更新对象整体全部覆盖原对象对象的话
 * $set 表示更新哪些字段
 * $inc = increment increase
 * multi 表示如果匹配到多条记录，则全部更新，默认只更新区配到的第一条
 */
/*User.update({name:'张三'},{$set:{name:'张三6'}},{multi:true},function(err,doc){
    console.log(doc);
});*/
/*User.update({name:'张三'},{$inc:{count:5}},{multi:true},function(err,doc){
    console.log(doc);
});*/
//默认情况下，remove会删除掉所有匹配的记录
/*
User.remove({name:'张三'},function(err,result){
    console.log(result.result);
});*/
