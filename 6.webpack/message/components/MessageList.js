import React from 'react';
import Message from './Message.js';
export default class MessageList extends React.Component{
    render(){
        return (
            <ul className="list-group">
                {
                    this.props.messages.map((item,index)=>{
                        return <Message click={this.props.click} key={index} author={item.author} id={item._id} date={item.date}>{item.content}</Message>
                    })
                }
            </ul>
        )
    }
}