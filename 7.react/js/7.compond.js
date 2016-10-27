//组件名的首字母要大写
//单向数据流 数据也就是属性至上而下传递
//
var Nav = React.createClass({
  render(){
      return (
          <nav>
              <MyUl totalPage={this.props.totalPage}></MyUl>
          </nav>
      )
  }
});

var MyUl = React.createClass({
    show(){
        var lis  = [];
        for(var i=1;i<=this.props.totalPage;i++){
            lis.push(<MyLi><a href="#">{i}</a></MyLi>);
        }
        return lis;
    },
    render(){
        return (
            <ul className="pagination">
                <MyLi><a href="#">&laquo;</a></MyLi>
                {
                    this.show()
                }
                <MyLi><a href="#">&raquo;</a></MyLi>
            </ul>
        )
    }
})

var MyLi = React.createClass({
   render(){
       return (
           <li>{this.props.children}</li>
       )
   }
})

ReactDOM.render(<Nav totalPage={10}></Nav>,document.getElementById('app'));
/**
 *
 *
 <nav>
     <ul class="pagination">
     <li><a href="#">&laquo;</a></li>
     <li><a href="#">1</a></li>
     <li><a href="#">2</a></li>
     <li><a href="#">3</a></li>
     <li><a href="#">4</a></li>
     <li><a href="#">5</a></li>
     <li><a href="#">&raquo;</a></li>
     </ul>
 </nav>
 **/