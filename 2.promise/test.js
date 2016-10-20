console.log(this);
exports.name = 'zfpx';
var getName = ()=>{console.log(this.name)};
var person = {
    name:'zfpx',
    getName
}
person.getName();