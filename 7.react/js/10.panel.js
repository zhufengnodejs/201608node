/**
 *
 */
var Panel = React.createClass({
    getInitialState(){
        return {
            head:'',
            body:'',
            footer:''
        }
    },
    handleMouseOver(name){
        var obj = {head:'bd',
            body:'bd',
            footer:'bd'};
        obj[name] = '';
        this.setState(obj);
    },
    handleMouseOut(name){
        var obj = {};
        obj[name] = 'bd';
        this.setState(obj);
    },
    render(){
        return (
            <div className={'panel panel-'+this.props.cls}>
                <Head handleMouseOver={this.handleMouseOver}  handleMouseOut={this.handleMouseOut} headClass={this.state.head} heading={this.props.heading}></Head>
                <Body bodyClass={this.state.body} handleMouseOver={this.handleMouseOver}  handleMouseOut={this.handleMouseOut} body={this.props.body}></Body>
                <Footer footerClass={this.state.footer} handleMouseOver={this.handleMouseOver}  handleMouseOut={this.handleMouseOut} footer={this.props.footer}></Footer>
            </div>
        )
    }
});

var mix = {
    getInitialState(){
        return {className:''};
    },
    handleMouseOver(name){
        this.props.handleMouseOver(name);
    },
    handleMouseOut(name){
        this.props.handleMouseOut(name);
    }
}
var Head = React.createClass({
    mixins:[mix],
    render(){
        return (
            <div  onMouseOut = {this.handleMouseOut.bind(this,'head')} onMouseOver={this.handleMouseOver.bind(this,'head')} className={"panel-heading "+this.props.headClass } >
                {this.props.heading}
            </div>
        )
    }
});
var Body = React.createClass({
    mixins:[mix],
    render(){
        return (
            <div ref="body"    onMouseOut = {this.handleMouseOut.bind(this,'body')} onMouseOver={this.handleMouseOver.bind(this,'body')} className={"panel-body "+this.props.bodyClass }>
                {this.props.body}
            </div>
        )
    }
});
var Footer = React.createClass({
    mixins:[mix],
    render(){
        return (
            <div   onMouseOut = {this.handleMouseOut.bind(this,'footer')} onMouseOver={this.handleMouseOver.bind(this,'footer')} className={"panel-footer "+this.props.footerClass }>
                {this.props.footer}
            </div>
        )
    }
});
ReactDOM.render(<Panel cls="success" heading="头部" body="体部" footer="尾部" ></Panel>,document.getElementById('app'));
