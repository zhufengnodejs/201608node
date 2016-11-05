var str =  '@1 i love 1';
var regex = /@(.+?)\s(.+)/;
//var regex = /@([^\s]+)\s(.+)/;
console.log(regex.test(str));
//console.log(regex.exec(str))
console.log(str.match(regex));