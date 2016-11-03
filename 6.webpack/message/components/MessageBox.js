import React from 'react';
import MessageList from './MessageList.js';
import MessageForm from './MessageForm.js';
export default class MessageBox extends React.Component{
  constructor(props){
      //调用父类的构造函数来初始化组建
     super(props);
      //通过此方法初始化状态对象
     this.state = {messages:[]};
  }

  render(){
      return (
          <div className="panel panel-default">
              <div className="panel-heading text-center">
                  <h3>珠峰留言版</h3>
              </div>
              <div className="panel-body">
                  <MessageList></MessageList>
              </div>
              <div className="panel-footer">
                  <MessageForm></MessageForm>
              </div>
          </div>
      )
  }
}