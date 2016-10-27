/**
 * 属性用来指那些由父组件初始化传入，并且组件内部不能修改的属性
 * this=当前组件的实例
 * this.props指组件实例的属性对象
 */
var Person = React.createClass({
    //获取默认的属性对象
    getDefaultProps(){
      return {name:'三毛'}
    },
    //属性类型 规定了使用此组件的时候必须传递的属性名和属性类型，以及是否必填
    propTypes:{
        name:React.PropTypes.string.isRequired,
        gender:React.PropTypes.string.isRequired
    },
    render(){
        return (
            <div>
                姓名:{this.props.name}
                性别:{this.props.gender}
            </div>
        )
    }
});
ReactDOM.render(<Person name="四毛" gender="女"></Person>,document.getElementById('app'));