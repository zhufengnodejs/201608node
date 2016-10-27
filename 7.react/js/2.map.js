var names = ['里皮','里皮','里皮'];
/**
 * 1参数
 *   有且只能有一个顶级DOM元素
 * 数组的map= React.Children=map 都是用来映射一个老数组，得到一个新数组
 * 从数组中迭代的时候，返回元素必须有一个唯一的不重复和key值
 * 如果想使用bootstrap,引入bootstrap.css文件后即可使用其中的类名
 */
ReactDOM.render(
    <ul className="list-group">
        {
            React.Children.map(names,function(item,index){
              return <li key={index} className="list-group-item">{item}</li>;
           })
        }
    </ul>
    ,document.getElementById('app')
);