/**
 * 每个组件有自己的状态
 * 状态是组件内部初始化，而且只能由内部来改变
 */
var Person = React.createClass({
    //定义初始状态
    getInitialState(){
      return {mood:'开心'};
    },
    handleClick(){
        //当调用setState的时候，一方面会改变状态，重新render渲染界面
        this.setState({mood:this.state.mood =='开心'?'难过':'开心'});
    },
    render(){
        return (
            <div>
                {this.props.name}心情:{this.state.mood}
                <button onClick={this.handleClick}>变心</button>
            </div>
        )
    }
});
ReactDOM.render(<Person name="林玲"/>,document.getElementById('app'));