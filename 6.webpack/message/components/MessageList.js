import React from 'react';
import Message from './Message.js';
export default class MessageList extends React.Component{
    render(){
        return (
            <ul className="list-group">
                {
                    this.props.messages.map(function(item,index){
                        return <Message key={index} author={item.author} date={item.date}>{item.content}</Message>
                    })
                }
            </ul>
        )
    }
}