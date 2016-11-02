var Counter = React.createClass({
    getDefaultProps(){
      console.log('1.getDefaultProps 获取默认属性');
      return {name:'计数器'}
    },
    //获取初始状态
    getInitialState(){
        console.log('2.getInitialState 获取初始状态');
        return {count:this.props.init};
    },
    //在组件渲染前做一些准备工作
    componentWillMount(){
        console.log('3.componentWillMount 此组件将要被渲染到目标组件内部');
    },
    //处理点击事件
    handleClick(){
        // this 指代的是当前组件的实例
        this.setState({count:this.state.count+1});
    },
    //组件是否应该被更新 传入新的组件对象和状态对象
    /**
     * 1. 状态只能由自己初始化，自己来改变
     * 2. 属性对象由父级初始化，不能由自己来改变，只能由父级来改变
     */
    shouldComponentUpdate(newProps,newState){
        console.log('5. shouldComponentUpdate 组件是否应该被更新');
        if(newState.count<=10){
            return true;
        }else{
            return false;
        }
    },
    componentWillUpdate(){
        console.log('6. componentWillUpdate 组件将要被更新');
    },
    //渲染此组件的方法
    render(){
        console.log('4.render 挂载 渲染组件');
        return (
            <div>
                <div>{this.state.count}</div>
                <button onClick={this.handleClick} >+</button>
            </div>
        )
    },
    componentDidUpdate(){
        console.log('7. componentDidUpdate 组件已经更新完成');
    }
});
ReactDOM.render(<Counter init={1}/>,document.getElementById('app'));