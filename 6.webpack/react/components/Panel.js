import React from 'react';
import PanelHead from './PanelHead.js';
import PanelBody from './PanelBody.js';
export default class Panel extends React.Component{
    render(){
      return (
          <div className="panel panel-danger">
              <PanelHead content={this.props.head}></PanelHead>
              <PanelBody content={this.props.body}></PanelBody>
          </div>
      )
    }
}