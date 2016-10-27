/**
 * 定义一个自定义的组件
 * 定义一个组件之后就可以像使用普通DOM标签一样使用了
 */
var Message = React.createClass({
    //表示自己渲染出来是什么样子
    // 组件的render方法返回一个DOM元素，有且只能有一个顶级元素
    render(){
        return (
           <div style={{float:'left'}}>
                hello world
           </div>
        )
    }
});
ReactDOM.render(<div><Message></Message><Message></Message></div>,document.getElementById('app'));