var mongoose = require('mongoose');
//连接数据库 mongodb://IP/数据库名 数据库不需要事先创建，直接使用即可
//因为使用时候mongodb如果发现此数据库不存会自动帮你创建
mongoose.connect('mongodb://127.0.0.1/201608db');
// 1. schema定义了一个集合的名称，里面文档记录的字段名称和字段类型
// 如果字段名称或类型不匹配，则存储失败
//不能操作数据库
var personSchema = new mongoose.Schema({
  name:String,//人的姓名
  birthday:Date,//出生日期
  email:String //邮箱
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
User.create(userObj,function(err,doc){
    if(err){
        console.error(err);
    }else{
        console.log(doc);
    }
});

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



