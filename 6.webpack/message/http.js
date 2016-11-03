var KEY = 'MESSAGES';
import $ from 'jquery';
export default  {
    //传入一个新的消息对象，先给他添加ID号，然后保存到localStorage
    add(message,callback){
        $.post('http://127.0.0.1:3000/messages',message).then(function(messages){
            callback(messages);
        });
    },//先得到原来的数组对象，移除掉此ID对应的元素，并返回最新的数组

    remove(id,callback){
        $.ajax({
            url:'http://127.0.0.1:3000/messages/'+id,
            method:'DELETE',
            success:function(messages){
                callback(messages);
            }
        })
    },
    //得到消息数组对象
    list(callback){
        //所有的接口都会返回最新的消息数组，所以可以用此数组状态
        $.get('http://127.0.0.1:3000/messages').then(function(messages){
            callback(messages);
        },function(error){
            console.log(error);
            callback(error);
        });
    }
}