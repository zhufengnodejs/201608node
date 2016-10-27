/**
 * React
 * ReactDOM
 * render有两个参数
 * 1. 渲染的内容  是一个HTML标签
 *  这是一个虚拟DOM，不是真实的DOM，只是一种DOM结构的描述
 *  就像是图纸一样
 * 2. 渲染到的目标容器
 *
 **/
/*function render(str,dom){
  dom.innerHTML = str;
}*/
var name = '珠峰培训';
var style = {color:'red'};

ReactDOM.render(<h1 className="green" style={style}>
    {name}
</h1>,document.getElementById('app'));