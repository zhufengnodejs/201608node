var Children = React.createClass({
   render(){
       return (
           <div>
               {this.props.children}
           </div>
       )
   }
});
ReactDOM.render(<Children>
   <span>大毛</span>
   <span>五毛</span>
   <span>一块</span>
</Children>,document.getElementById('app'));

/**
 * <ul>
 *     <li><span>大毛</span></li>
 *     <li><span>五毛</span></li>
 *     <li><span>一块</span></li>
 * </ul>
 **/