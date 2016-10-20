/*class Person{
    //构造函数 当创建一个类的实例的时候执行的第一个方法
    constructor(name){
        //在构造函数里可以初始化私有属性
        this.name = name;
        this.say = function(){}
    }
    //定义公有方法，所有的实例共享这个方法
    getName(){
        console.log(this.name);
    }
}*/
//构造函数+原型
function Person(name){
    this.name = name;
    this.say = function(){}
}
Person.prototype.getName = function(){
    console.log(this.name);
}


var zhangsan = new Person('张三');
var lisi = new Person('李四');
/*
console.log(zhangsan.say === lisi.say);
console.log(zhangsan.getName === lisi.getName);*/
//希望在原来的输出基础加增加hello前缀
Person.prototype.getName = function(){
    console.log('hello ',this.name);
}
//console.log(zhangsan.getName === lisi.getName);
zhangsan.getName();//hello 张三
lisi.getName();//hello 李四
