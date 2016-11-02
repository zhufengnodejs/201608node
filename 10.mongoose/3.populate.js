var mongoose = require('mongoose');
//每一个集合的对象ID类型主键
var ObjectId = mongoose.Schema.Types.ObjectId;
mongoose.connect('mongodb://127.0.0.1/201608node');
//定义集合的模型骨架 定义集合中的文档字段的名称和类型
var userSchema = new mongoose.Schema({
    name:String,
    age:Number
},{collection:'user'});
//定义可以操作数据库的User模型
var User = mongoose.model('User',userSchema);
// _id ObjectId
var articleSchema = new mongoose.Schema({
    title:{type:String},
    content:String,
    //定义user的类型和引用的模型的名称
    user:{type:ObjectId,ref:'User'} //外键
},{collection:'article'});
 mongoose.model('Article',articleSchema);
mongoose.model('Article')
//先保存用户，然后保存一篇文章
//User.create({name:'zfpx',age:9})
//.then(function(doc){
//  return Article.create({title:'标题',content:'正文',user:doc._id})
//}).then(function(doc){
//    console.log(doc);
//});
// 5815a2e830c0a510500a8557
/*
Article.findById('5815a2e830c0a510500a8557').then(function(doc){
    console.log(doc);
    User.findById(doc.user).then(function(doc){
        console.log(doc);
    });
});*/
//把user属性从字符串变成对象
Article.findById('5815a2e830c0a510500a8557').populate('user').exec(function(err,doc){
    console.log(doc);
    console.log(doc.user.name);
})