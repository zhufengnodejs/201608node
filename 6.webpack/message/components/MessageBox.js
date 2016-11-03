import React from 'react';
import MessageList from './MessageList.js';
import MessageForm from './MessageForm.js';
export default class MessageBox extends React.Component{
  constructor(props){
      //调用父类的构造函数来初始化组建
     super(props);
     this.state = {messages:[{author:'张三',date:'2016年11月3日10:57:06',content:'今天天气不错，雾霾当道'},{author:'李四',date:'2016年11月3日10:57:06',content:'我买了口罩了'}]};
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
                  <MessageForm></MessageForm>
              </div>
          </div>
      )
  }
}