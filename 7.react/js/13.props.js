/**
 * 属性由父组件传入子组件，子组件内部不能修改 this.props
 * 状态由子组件内部初始化，内部可以修改  this.setState
 * 当状态修改后，会重新渲染页面 render
 */
var Person = React.createClass({
    //定义初始状态
    getInitialState(){
        return {count:1}
    },
    handleClick(){
        this.setState({count:this.state.count + 1});
    },
    render(){
        return <div>
            {this.props.name}
            {this.props.age}
            {this.state.count}
            <button onClick={this.handleClick}>+</button>
        </div>
    }
});
ReactDOM.render(<Person name="珠峰" age="8"/>,document.getElementById('app'));