/*let a = "b";
if (true) {
    let a = "a"; // 期望a是某一个值
    console.log(a);
}
console.log(a);*/

// 0 0 1 1 0 1
for(let i=0;i<2;i++){
    console.log(i);
    for(let i=0;i<2;i++){
        console.log(i);
    }
}
//在一个代码块内,不能用let 声明一次以上的相同名称的变量
//Identifier 'i' has already been declared

//let 不会进行预解释，也不会进行变量提升
let i = 100;
if(true){
    //i is not defined
    console.log(i);
    let i = 1;
    //let i = 2;
}

