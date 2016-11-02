//从react模块中引入React对象
import React from 'react';
//声明一个组件的子类并继承React.Component父类
export default class PanelHead extends React.Component{
  render(){
      return (
          <div className="panel-heading">
              {this.props.content}
          </div>
      )
  }
}

