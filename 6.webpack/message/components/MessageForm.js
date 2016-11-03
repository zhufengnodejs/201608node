import React from 'react';
export default class MessageForm extends React.Component{
    render(){
        return (
            <div>
                <form className="form-horizontal" action="">
                     <div className="form-group row">
                         <label className="control-label col-xs-1" htmlFor="name">姓名</label>
                         <div className="col-xs-11">
                             <input className="form-control" type="text"/>
                         </div>
                     </div>
                    <div className="form-group row">
                        <label className="control-label col-xs-1" htmlFor="content">内容</label>
                        <div className="col-xs-11">
                            <textarea className="form-control" name="content" id="content" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                       <div className="col-xs-offset-1">
                           <button className="btn btn-primary">留言</button>
                       </div>
                    </div>
                </form>
            </div>
        )
    }
}