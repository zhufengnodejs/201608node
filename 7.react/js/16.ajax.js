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
        //jQuery111109257844484509952_1478056916822({q:"b",p:false,s:["baidu","bt","btchina","beyond","bbs","bbc","blog","bobo组合","bb霜"]});
       ajax({
           url:'https://www.baidu.com/su',
           method:'GET',
           data:{wd:word},//转成查询字符串并拼在URL的后面
           dataType:'jsonp', //指定响应的类型
           jsonp:'cb',//指定向服务器端传入的回调函数名的参数名
           context:this,//指定 success中的this对象 指向当前组件的实例
           success:function(data){
               this.setState({words:data.s});
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