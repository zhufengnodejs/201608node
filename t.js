/*
var express = require('express');
var app = express();
app.set('name','zfpx');
app.name = 'zfpx';
console.log(app.get('name'));
console.log(app.name);
var path = require('path');
console.log(path.join('a','b'));*/
var name = 'zfpx';
var age = 8;
var tmpl = '${name} is ${age} years old';
function render(tmpl){
    return tmpl.replace(/\$\{(\w+)\}/g, function (t1,t2) {
        return eval(t2);
    })
}
/*var attr = 'name';
console.log(eval(attr));
return 'zfpx is 8 years old';*/
console.log(render(tmpl));
//'zfpx is 8 years old'
