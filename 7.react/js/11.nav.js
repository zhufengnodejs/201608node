//演示如何操作兄弟组件 refs
var Nav = React.createClass({
    handleClick(num){
      //console.log(this.refs);
      for(var attr in this.refs){
          this.refs[attr].refs[attr].className = '';
      }
      this.refs[num].refs[num].className = 'active';
    },
    render(){
        return (
            <nav>
                <ul className="pagination">
                    <Li ref="1" click={this.handleClick} num="1"></Li>
                    <Li ref="2" click={this.handleClick} num="2"></Li>
                    <Li ref="3" click={this.handleClick} num="3"></Li>
                </ul>
            </nav>
        )}
});
var Li = React.createClass({
    render(){
        return (
             <li ref={this.props.num} onClick={this.props.click.bind(this,this.props.num)}><a href="#">{this.props.num}</a></li>
        )
    }
});
ReactDOM.render(<Nav/>,document.getElementById('app'));