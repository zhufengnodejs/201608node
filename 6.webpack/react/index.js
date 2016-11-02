import React from 'react';
import ReactDOM from 'react-dom';
import Panel from './components/Panel.js';
var props = {
    head:'我是头',
    body:'我是身体'
}
//head={props.head} body={props.body}
ReactDOM.render(<Panel {...props}></Panel>,document.getElementById('app'));