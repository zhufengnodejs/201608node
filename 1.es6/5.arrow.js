var double = v =>v * 2;
//左侧是参数  右侧是返回值
//当参数有且只有一个时候
var double = function (v) {
    return v * 2;
}
console.log(double(2));
//当有0个或多个参数的时候要用小括号包裹起来
var add = (a, b)=>a + b;
var add = function (a, b) {
    return a + b;
}
console.log(add(2, 4));
//当函数不是只包含一个返回值的时候，就需要用大括号包裹
var add = (a, b)=> {
    console.log(a, b, a + b);
    return a + b;
}
console.log(add(2, 4));
/*var name= 'zfpx';
var age = 8;
var person = {
    name,
    age
}*/
//console.log(person);
//定义一个箭头函数,参数是name和age,
// 返回一个对象,此对象有两个属性，分别是name和age
var getPerson = (name,age) => ({name,age});
console.log(getPerson('zfpx',8));
/*var i=0;
var j=9;
var s = (++j);
console.log(i,s);*/


var arr = [6,3,1,5,8];
arr = arr.sort((a,b)=>a-b).map(item=>item*2);
console.log(arr);
