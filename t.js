var s = [];
try{
    s = JSON.parse('{"id":1}');
}catch(e){
    s = []
}
console.log(s);