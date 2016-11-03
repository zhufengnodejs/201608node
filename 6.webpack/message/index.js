require('bootstrap/dist/css/bootstrap.css');
import MessageBox from './components/MessageBox.js';
import React from 'react';
import ReactDOM from 'react-dom';
//此DB模块是用来对消息进行查询 添加 和删除的
//数据存储手段是多样化的，有可能 是localStorage http接口
import local from './local.js';
//db.list;列出所有的消息
//db.add;添加一个消息,返回最新的消息数组
//db.remove;删除一个消息,返回最新的消息数组
ReactDOM.render(<MessageBox model={local}/>,document.getElementById('app'));