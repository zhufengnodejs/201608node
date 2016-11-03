function say(word){
    console.log(this.name,word);
}
var newSay = say.bind({name:'zfpx'});
newSay();
var newSay2 = newSay.bind({name:'zfpx2'},'hello');
newSay2();