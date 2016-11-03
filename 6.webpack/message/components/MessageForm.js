import React from 'react';
export default class MessageForm extends React.Component{
    handleClick(event){
        var author = this.refs.author.value;//得到作者姓名
        var content = this.refs.content.value;//得到发言内容
        this.props.addMessage({author,content,date:new Date()});
    }

    render(){
        return (
            <div>
                <form  className="form-horizontal">
                     <div className="form-group row">
                         <label className="control-label col-xs-1" htmlFor="name">姓名</label>
                         <div className="col-xs-11">
                             <input ref="author" className="form-control" type="text"/>
                         </div>
                     </div>
                    <div className="form-group row">
                        <label className="control-label col-xs-1" htmlFor="content">内容</label>
                        <div className="col-xs-11">
                            <textarea ref="content" className="form-control" name="content" id="content" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                       <div className="col-xs-offset-1">
                           <button type="button" onClick={this.handleClick.bind(this)}  className="btn btn-primary">留言</button>
                       </div>
                    </div>
                </form>
            </div>
        )
    }
}