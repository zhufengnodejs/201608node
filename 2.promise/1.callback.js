var fs = require('fs');
fs.readFile('1.txt','utf8',function(err,data){
    // data == 2.txt
    fs.readFile(data,'utf8',function(err,data){
        // data 3.txt
        fs.readFile(data,'utf8',function(err,data){
            //data 3
            console.log(data);
        })
    })
})