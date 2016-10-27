var Children = React.createClass({
   render(){
       return (
           <ul>
               {
                   React.Children.map(this.props.children,function(item){
                       return <li>{item}</li>
                   })
               }
           </ul>
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