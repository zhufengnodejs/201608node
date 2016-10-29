/**
 * 1. 当客户端第一次访问服务器的时候，服务器会生成一个唯一的卡号
 * 然后通过cookie发送给客户端，与此同时还要在服务端记录此卡号的所有者和余额
 * 2.当客户端第二次访问，客户端会把卡号通过cookie发送给服务器，
 * 服务器接收到卡号，然后通过卡号查询对应的所有者和余额，然后修改余额再保存回去
 *
 */
var express = require('express');
var uuid = require('uuid');
var app = express();
const CARD_NO = 'connect.sid';
//这是服务器的一个保存session数据的对象
var SESSIONS = {};
// /visit?name=zfpx
app.get('/visit',function(req,res){
  var name = req.query.name;
  //生成一个全世界唯一的卡号
  var cardNo =uuid.v4();
  //在服务器端开辟内存，记录卡号和数据对象的对应关系
  SESSIONS[cardNo] = {name,balance:100};
  //通过cookie把此卡号发给客户端 ，客户端保存到本地
  res.cookie(CARD_NO,cardNo);
  res.send('欢迎你新顾客，送你一张价格100元的理发卡');
});
app.listen(9090);