/**
 1. react如何 跟jquery集成
 2. 如何在react中调用服务器端接口
 3. 如何使用生命周期函数
 **/
var Suggest = React.createClass({
    getInitialState(){
      return  {words:[]};
    },
    handleChange(event){
       var word = event.target.value;
       //https://www.baidu.com/su?wd=b&cb=fun
        //https://www.baidu.com/su?cb=jQuery_1478056916822&wd=b&_=1478056916824
        //jQuery111109257844484509952_1478056916822({q:"b",p:false,s:["b1","b2","b3","b4","b5"]});
       ajax({
           url:'http://127.0.0.1:9090/su',
           method:'GET',
           data:{wd:word},//转成查询字符串并拼在URL的后面
           dataType:'jsonp', //指定响应的类型
           jsonp:'cb',//指定向服务器端传入的回调函数名的参数名
           context:this,//指定 success中的this对象 指向当前组件的实例
           success:function(data){
               console.log(data);
               data = JSON.parse(data);
               this.setState({words:data.s});
           },error:function(result){
               console.log(result);
           }
       })
          /* done指定成功的回调
          .done(function(data){
               console.log(data);
           }).fail().always();*/
        /* ajax 返回一个promise 可以then指定成功和失败的回调函数
        .then(function(data){
           console.log(data);
         });*/

    },
    render(){
        //返回有且只能一个顶级元素
        return (
            <div className="panel panel-success">
                <div className="panel-heading">
                    <input onChange={this.handleChange} type="text" className="form-control"/>
                </div>
                <div className="panel-body">
                    <ul className="list-group">
                        {
                           React.Children.map(this.state.words,function(word,index){
                                  return <li className="list-group-item" key={index}>{word}</li>
                           })
                        }
                    </ul>
                </div>
            </div>
        )
    }
});
ReactDOM.render(<Suggest></Suggest>,document.getElementById('app'));
/*var options =
   {url:'https://www.baidu.com/su',
    method:'GET',
    data:{wd:word},//转成查询字符串并拼在URL的后面
    dataType:'jsonp', //指定响应的类型
    jsonp:'cb',//指定向服务器端传入的回调函数名的参数名
    context:this,//指定 success中的this对象 指向当前组件的实例
    success:function(){}
}*/
function ajax({url,method='GET',data,dataType,jsonp,context,success}){
   // ?cb=jQuery_1478056916822&wd=b&_=1478056916824
   var callbackName = `jQuery_${Date.now()}`;
   url = addSearch(url,`${jsonp}=${callbackName}`);
    //-> https://www.baidu.com/su?cb=jQuery_1478056916822
   url = addSearch(url,toStr(data));
   url = addSearch(url,`_=${Date.now()}`);
   var script = document.createElement('script');
   script.src = url;
   document.body.appendChild(script);
    //因为数据响应回来的时候要调用callbackname,所以需要给 window这样的属性
   window[callbackName] = function(data){
       //让成功的回调this对象指 context 对象
       success.call(context,JSON.parse(data));
       //删除window上的临时方法
       delete window[callbackName];
       //从父节点移除此子节点
       script.parentNode.removeChild(script);
   }
}
//{name:'zfpx',age:9} -> name=zfpx&age=9
function toStr(data){
    var parts = [];
    for(var attr in data){
        parts.push(`${attr}=${data[attr]}`);
    }
    return parts.join('&');
}
function addSearch(url,query){
    return url + (/\?/.test(url)?'&':'?') +query;
}
//ajax(options);