/**
 * 1. 在父组件MessageBox组件里定义一个状态对象，{messages:[]}
 * 2. 把此messages数组传递给MessageList来显示 消息列表
 * 3. 给MessageForm中的按钮绑定点击事件，当点击按钮的时候，得到input框的内容，然后调用父组件的方法来把此内容添加到messages数组中
 * 4. 因为messages内容改变了，会重新渲染MessageList组件中的消息列表
 */
var MessageBox = React.createClass({
    getInitialState(){
        return {messages:[]}
    },
    handleClick(msg){
        this.state.messages.push(msg);
        this.setState({messages:this.state.messages});
    },

  // 放置form list   panel panel-default
    render(){
        return <div className="panel panel-default">
            <MessageForm click={this.handleClick}></MessageForm>
            <MessageList messages={this.state.messages}></MessageList>
        </div>
    }
});
var MessageForm = React.createClass({
    handleClick(){
       var value =  this.refs.myInput.value;
        this.props.click(value);
        this.refs.myInput.value = '';
    },
  //放置表单 input form-control button btn btn-primary panel-heading
    render(){
        return (
            <div className="panel-heading">
                <input ref="myInput" type="text" className="form-control"/>
                <button onClick={this.handleClick} className="btn btn-primary">发言</button>
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
                    {
                        this.props.messages.map(function(item){
                            return  <li className="list-group-item">{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
});

ReactDOM.render(<MessageBox/>,document.getElementById('app'));