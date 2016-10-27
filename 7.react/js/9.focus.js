/**
 * 1. input框的值和p标签双向数据绑定
 *   1.
 * 2. 点击button的时候，input框得到焦点
 */
var Focus = React.createClass({
    //定义初始状态
    getInitialState(){
      return {val:''}
    },
    handleChange(event){
        this.setState({val:event.target.value});
    },
    handleClick(event){
        var input = this.refs.myInput;
        console.log(input);
        input.focus();
        input.value = '请输入';
    },
    render(){
           return (
               <div>
                   <input ref="myInput" type="text" onChange={this.handleChange} value={this.state.val}/>
                   <p>{this.state.val}</p>
                   <button onClick={this.handleClick}>得到焦点</button>
               </div>
           )
    }
});
ReactDOM.render(<Focus></Focus>,document.getElementById('app'));
/*
<input type="text" ng-model="name"/>
{{name}}*/
