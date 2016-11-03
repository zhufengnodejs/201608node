import React from 'react';
import MessageList from './MessageList.js';
import MessageForm from './MessageForm.js';
export default class MessageBox extends React.Component{
  constructor(props){
      //调用父类的构造函数来初始化组建
     super(props);
     this.state = {messages:[]};
  }
    //做渲染前数据准备工作
  componentWillMount(){
     this.setState({messages:this.props.model.list()});
  }

  addMessage(msgObj){
     var messages = this.props.model.add(msgObj);
     this.setState({messages});
  }

  render(){
      return (
          <div className="panel panel-default">
              <div className="panel-heading text-center">
                  <h3>珠峰留言版</h3>
              </div>
              <div className="panel-body">
                  <MessageList messages={this.state.messages}></MessageList>
              </div>
              <div className="panel-footer">
                  <MessageForm addMessage={this.addMessage.bind(this)}></MessageForm>
              </div>
          </div>
      )
  }
}