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