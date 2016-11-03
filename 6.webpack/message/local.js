var KEY = 'MESSAGES';
export default  {
    //传入一个新的消息对象，先给他添加ID号，然后保存到localStorage
    add(message,callback){
        message._id = Date.now();
        this.list(function(messages){
            messages.push(message);
            localStorage.setItem(KEY,JSON.stringify(messages));
            callback(messages);
        });

    },
    //先得到原来的数组对象，移除掉此ID对应的元素，并返回最新的数组
    remove(_id,callback){
        this.list(function(messages){
            messages = messages.filter(function(item){//过滤数组过滤掉ID等于传入的ID相同的元素。保留其它的元素组成新的数组
                return item._id != _id;
            });
            //把过滤后的新数组保存在localStorage里去
            localStorage.setItem(KEY,JSON.stringify(messages));
            callback(messages);
        });//先获取老的消息数组

    },
    //得到消息数组对象
    list(callback){
        var str = localStorage.getItem(KEY);
        callback(str?JSON.parse(str):[]);
    }
}