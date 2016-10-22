/*
var path = require('path');
// windows \
// linux /
console.log('a'+'\\'+'b'+'\\'+'c');
console.log(path.join('a','b','c'));
// 八*/
var data = {title:'用户列表'};
var str = 'i love <%=title%> !';
str = str.replace(/<%=(\w+)%>/,function(input,group1){
    return data[group1];
});
console.log(str);
