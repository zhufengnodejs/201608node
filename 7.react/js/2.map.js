var names = ['里皮','里皮','里皮'];
/**
 * 1参数
 *   有且只能有一个顶级DOM元素
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