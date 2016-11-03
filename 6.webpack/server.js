var express = require('express');
var bodyParser = require('body-parser');
var Message = require('./db');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//获取所有的消息
app.get('/messages',function(req,res){
  Message.find({},function(err,messages){
        res.send(messages);
  });
});
//增加一条消息
app.post('/messages',function(req,res){
  var message = req.body;
  Message.create(message,function(err,message){
      Message.find({},function(err,messages){
          res.send(messages);
      });
  });
});
//删除一条消息 路径参数
app.delete('/messages/:id',function(req,res){
    Message.remove({_id:req.params.id},function(err,result){
        Message.find({},function(err,messages){
            res.send(messages);
        });
    })
});

app.listen(3000);