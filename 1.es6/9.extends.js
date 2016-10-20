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
function Person(name){
    this.name = name;
    this.say = function(){}
}
Person.prototype.getName = function(){
    console.log(this.name);
}

//继承 继承私有属性 继承公有方法
/*class Student extends Person{
    constructor(name,age){
        super(name);//在子类构造函数里一定要先调用父类构造函数
        this.age = age;//定义自己特殊的私有属性
    }
    getAge(){
        console.log(this.age);
    }
}*/
function Student(name,age){
    Person.apply(this,arguments);
    this.age = age;
}
Object.create = function(proto){
    var Fn = new Function();
    Fn.prototype = proto;
    return new Fn();
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.getAge = function(){
    console.log(this.age);
}

var stu = new Student('zfpx',8);
stu.getName();
stu.getAge();
/**
 * 使用es5完美模拟一下这种继承
 **/