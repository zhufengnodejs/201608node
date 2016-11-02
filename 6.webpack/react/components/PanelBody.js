import React from 'react';
export default class PanelBody extends React.Component{
    render(){
        return (
            <div className="panel-body">
                {this.props.content}
            </div>
        )
    }
}