var express = require('express');
var app = express();
app.get('/',function(req,res){
   res.sendFile('./4.iframe.html',{root:__dirname});
});
app.get('/clock',function(req,res){
    setInterval(function(){
        res.write(`
         <script>window.parent.setTime('${new Date().toLocaleString()}');</script>
    `);
    },5000);
});
app.listen(9090);