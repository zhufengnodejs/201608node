var express = require('express');
var bodyParser = require('body-parser');
var Message = require('./db').Message;
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//获取所有的消息
//curl http://127.0.0.1:3000/messages
app.get('/messages',function(req,res){
  Message.find({},function(err,messages){
        res.send(messages);
  });
});
//增加一条消息
// curl -X POST --data 'author=zfpx&date=2016-1-1&content=hello' http://127.0.0.1:3000/messages
app.post('/messages',function(req,res){
  var message = req.body;
  Message.create(message,function(err,message){
      Message.find({},function(err,messages){
          res.send(messages);
      });
  });
});
//删除一条消息 路径参数
// curl -X DELETE  http://127.0.0.1:3000/messages/581ae8e5d282a91a80f85c45
app.delete('/messages/:id',function(req,res){
    Message.remove({_id:req.params.id},function(err,result){
        Message.find({},function(err,messages){
            res.send(messages);
        });
    })
});

app.listen(3000);