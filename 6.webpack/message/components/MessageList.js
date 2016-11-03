import React from 'react';
export default class MessageList extends React.Component{
    render(){
        return (
            <ul className="list-group">
               <li className="list-group-item">张三:今天天气不错 <span className="pull-right">2016年11月3日10:04:41</span></li>
                <li className="list-group-item">李四:是的，好大的冰雹! !!!<span className="pull-right">2016年11月3日10:05:01</span></li>
            </ul>
        )
    }
}