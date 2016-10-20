class Document{
    //构造函数定义私有属性
    constructor(){
      this.cookies = [];
    }

    get cookie(){
        return this.cookies.join('; ');
    }

    set cookie(cookie){
        this.cookies.push(cookie);
    }
}
var document = new Document();
//为cookie属性赋值 会寻找类中的set cookie方法，如果找到则调用
document.cookie = "name=zfpx";
document.cookie = "age=8";
document.cookie = "name=zfpx2";
//为cookie属性取值 会寻找get cookie方法，如果找到则调用get cookie
console.log(document.cookie);