/**
 * 每个组件有自己的状态
 * 状态是组件内部初始化，而且只能由内部来改变
 */
var Person = React.createClass({
    //定义初始状态
    getInitialState(){
      return {mood:'开心'};
    },
    render(){
        return (
            <div>
                心情:{this.state.mood}
            </div>
        )
    }
});
ReactDOM.render(<Person/>,document.getElementById('app'));