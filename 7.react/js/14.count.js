var Parent = React.createClass({
    getInitialState(){
        return {count:1}
    },
    addOne(){
        this.setState({count:this.state.count + 1});
    },
    render(){
        return (
            <div style={{width:'200px',height:'200px',backgroundColor:'lightgreen'}}>
                {this.state.count}
                <Child addOne = {this.addOne}></Child>
            </div>
        )
    }
});
var Child = React.createClass({
    getInitialState(){
        return {count:1}
    },
    handleClick(){
        this.setState({count:this.state.count + 1});
    },
    handleParentClick(){
        this.props.addOne();
    },
    render(){
        return (
            <div style={{width:'100px',height:'100px',backgroundColor:'lightblue'}}>
                {this.state.count}
                <button onClick={this.handleParentClick} >父+</button>
                <button onClick={this.handleClick}>子+</button>
            </div>
        )
    }
});
ReactDOM.render(<Parent></Parent>,document.getElementById('app'));