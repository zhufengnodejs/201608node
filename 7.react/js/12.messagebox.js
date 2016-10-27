/**
 * 1. 在父组件MessageBox组件里定义一个状态对象，{messages:[]}
 * 2. 把此messages数组传递给MessageList来显示 消息列表
 * 3. 给MessageForm中的按钮绑定点击事件，当点击按钮的时候，得到input框的内容，然后调用父组件的方法来把此内容添加到messages数组中
 * 4. 因为messages内容改变了，会重新渲染MessageList组件中的消息列表
 */
var MessageBox = React.createClass({
  // 放置form list   panel panel-default
    render(){
        return <div className="panel panel-default">
            <MessageForm></MessageForm>
            <MessageList></MessageList>
        </div>
    }
});
var MessageForm = React.createClass({
  //放置表单 input form-control button btn btn-primary panel-heading
    render(){
        return (
            <div className="panel-heading">
                <input type="text" className="form-control"/>
                <button className="btn btn-primary">发言</button>
            </div>
        )
    }
});
var MessageList = React.createClass({
  //列表  list-group list-group-item panel-body
    render(){
        return (
            <div className="panel-body">
                <ul className="list-group">
                    <li className="list-group-item"></li>
                </ul>
            </div>
        )
    }
});

ReactDOM.render(<MessageBox/>,document.getElementById('app'));