import React from 'react';
import MessageList from './MessageList.js';
import MessageForm from './MessageForm.js';
/**
 * 1.添加删除按钮
 * 2.绑定点击事件，当点击按钮的时候调用model.remove方法，把ID传过来进行删除
 * 3.删除成功后修改MessageBox的状态对象的messages属性
 */
export default class MessageBox extends React.Component {
    constructor(props) {
        //调用父类的构造函数来初始化组建
        super(props);
        this.state = {messages: []};
    }

    //做渲染前数据准备工作
    componentWillMount() {
        this.props.model.list((messages) =>{
            this.setState({messages});
        });

    }

    addMessage(msgObj) {
        this.props.model.add(msgObj,(messages)=>{
            this.setState({messages});
        });
    }
    remove(id){
        this.props.model.remove(id,(messages)=>{
            this.setState({messages});
        });
    }
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading text-center">
                    <h3>珠峰留言版</h3>
                </div>
                <div className="panel-body">
                    <MessageList click={this.remove.bind(this)} messages={this.state.messages}></MessageList>
                </div>
                <div className="panel-footer">
                    <MessageForm addMessage={this.addMessage.bind(this)}></MessageForm>
                </div>
            </div>
        )
    }
}