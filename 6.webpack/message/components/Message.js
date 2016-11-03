import React from 'react';
export default class Message extends React.Component {
    render() {
        return (
            <li className="list-group-item">{this.props.author}:{this.props.children}
                <button onClick={this.props.click.bind(this,this.props.id)} className="btn btn-danger">删除</button> <span className="pull-right">{this.props.date&&this.props.date.toLocaleString()}</span>
            </li>
        )
    }
}