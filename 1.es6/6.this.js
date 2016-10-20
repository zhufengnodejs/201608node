var person = {
    name:'zfpx',
    getName:function(){
       /* setTimeout(function(){
            console.log(this);
        },1000);*/
        //console.log(this);
        var _this = this;
        setTimeout(()=>{
            console.log(_this);
        },1000);
    }
}
person.getName();