/**
 解构 分解一个对象或数组的结构
 **/
var arr = [1,2,3];
/*var a = arr[0];
var b = arr[1];
var c = arr[2];*/
//赋值完成就会在当前的作用域内得到三个私有变量 a b c,值分别是 1 2 3
/*
var [,,c] = arr;
console.log(c);
*/


var obj = {name:'zfpx',age:8};
/*var name = obj.name;
var age = obj.age;*/
//把对象的name属性取出来赋给name1变量，把对象的age变量取出来赋给age1变量
var {name:name1,age:age1} = obj;
console.log(name1,age1);

/**
 * 解构赋值 1 结构类型 2. 如果变量名和属性名不一样要用:分隔
 * @type {{name: string, address: {province: string, city: string}}}
 */
var person = {name:'zfpx',address:{province:'江苏',city:'南京',hobby:['smoking','drinking','hair']}};

let {name,address:{province,city,hobby:[hobby1,hobby2,hobby3]}} = person;
console.log(name,province,city,hobby1,hobby2,hobby3);
// headers url method data async success error dataType
// 哪些是必须的，而且不能地默认值 url
// 有些是可以不给，但是必须调接口必须需要 method
/**
 * 1.保证必须传入某些属性，不传的话报错
 */
function ajax({url=new Error('url 必须提供'),method='GET',dataType='json'}){
   /* if(!options.url) throw Error('url 必须提供');
    if(!options.method) options.method = 'GET';*/
    console.log(url);
    console.log(method);
    console.log(dataType);
}
ajax({});