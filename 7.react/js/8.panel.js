/**
 <div class="panel panel-success">
     <div class="panel-heading">
       头
     </div>
     <div class="panel-body">
       体
     </div>
     <div class="panel-footer">
       尾
     </div>
 </div>
 */
/**
 * 增加一个功能，就是当鼠标移动到组件上面的话，组件出拥有一个 5px dashed red 边框，当鼠标移出组件的时候，此边框消失掉
 */
var Panel = React.createClass({
    render(){
        return (
            <div className={'panel panel-'+this.props.cls}>
                <Head heading={this.props.heading}></Head>
                <Body body={this.props.body}></Body>
                <Footer footer={this.props.footer}></Footer>
            </div>
        )
    }
});
/**
 * 1. 定义初始的边框状态
 * 2. 绑定事件处理函数，当事件发生的时候执行对应的函数
 * 3. 在处理函数里修改边框状态
 * 4. 当状态发生改变的时候重新触发界面的渲染
 *
 * mixin属于高级功能，叫混入
 * 先定义一个对象。然后有过 mixins:[]的形式混入到别的组件时
 *
 */

/**
 * 划过头，体和尾和到焦点
 *
 */
var mix = {
    getInitialState(){
        return {className:''};
    },
    handleMouseOver(){
        this.setState({className:'bd'});
    },
    handleMouseOut(){
        this.setState({className:''});
    }
}
var Head = React.createClass({
    mixins:[mix],
    render(){
        return (
            <div ref="head"  onMouseOut = {this.handleMouseOut} onMouseOver={this.handleMouseOver} className={"panel-heading "+this.state.className } >
                {this.props.heading}
            </div>
        )
    }
});
var Body = React.createClass({
    mixins:[mix],
    render(){
        return (
            <div ref="body"  onMouseOut = {this.handleMouseOut} onMouseOver={this.handleMouseOver} className={"panel-body "+this.state.className }>
                {this.props.body}
            </div>
        )
    }
});
var Footer = React.createClass({
    mixins:[mix],
    render(){
        return (
            <div ref="footer"  onMouseOut = {this.handleMouseOut} onMouseOver={this.handleMouseOver} className={"panel-footer "+this.state.className }>
                {this.props.footer}
            </div>
        )
    }
});
ReactDOM.render(<Panel cls="danger" heading="头部" body="体部" footer="尾部" ></Panel>,document.getElementById('app'));
