class Document{
    //构造函数定义私有属性
    constructor(){
      this.cookies = [];
    }

    get cookie(){
        return this.cookies.join('; ');
    }

    set cookie(cookie){
        var key = cookie.split('=')[0];
        /**
         * 1. map进行映射成新数组
         * 2. filter先过滤，再追加
         * 3. key的提取可以用正则也可以用split分割
         */
        this.cookies = this.cookies.filter(function(item){
              //如果传入的key和当前迭代到的item的key相同，则过滤掉，否则留下
               if(key == item.split('=')[0]){
                    return false;
               }
               return true;
        });
        this.cookies.push(cookie);
        /**
         * 1. 先获取一个跟传入的key相同的原来原素的的索引
         * 2. 如果等于-1，表示没有找到，则直接push
         * 3. 如果找到，则删除原来的元素后追加
         */
    }
}
var document = new Document();
//为cookie属性赋值 会寻找类中的set cookie方法，如果找到则调用
document.cookie = "name=zfpx";
document.cookie = "age=8";
document.cookie = "name=zfpx2";
//为cookie属性取值 会寻找get cookie方法，如果找到则调用get cookie
console.log(document.cookie);

var arr = [1,3,3];
var index = arr.findIndex(function(item){
        if(item == 3){
            return true;
        }else{
            return false;
        }
})
console.log(index);
