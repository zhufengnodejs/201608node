/*
var prop1 = {name:'四毛',gender:'女'};
var prop2 = {name:'三毛'};
Object.assign = function(target,...sources){
    for(var i=0;i<sources.length;i++){
        for(var attr in sources[i]){
            target[attr] = sources[i][attr];
        }
    }
    return target;
}
var props = Object.assign({},prop2,prop1);
console.log(props);*/


class Person{

    handleClick(){

    }
}
var p = new Person();
p.handleClick();

function say(){
    return(
        1
    )
}
console.log(say());