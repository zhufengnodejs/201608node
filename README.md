# 课程大纲
## 全日制
```
react es6(promise)+babel+gulp+webpack+react
```
## 周末
```
express+cookie+session+mongodb+博客+聊天室
```

## 模块化
1. 封装实现
2. 可以复用
3. 实现作用域的隔离


## restful

查询所有的用户 
```curl -v -H 'accept:text/html' http://localhost:8080/users```
查询指定的用户 
curl -v -H 'accept:text/html' http://localhost:8080/users/1
添加用户 
curl -v -X POST --data "name=zfpx300&age=300" http://localhost:8080/users
修改用户(参数为完整的属性) 
curl -v -X PUT --data "id=1&name=zfpx120&age=120" http://localhost:8080/users/1
修改用户(参数为变更的属性) 
curl -v -X PATCH --data "age=120" http://localhost:8080/users/1
删除用户 
curl -v -X DELETE --data "id=1" http://localhost:8080/users
过滤条件 http://localhost:8080/users?pageNum=1&pageSize=2&keyword=&sortBy=age


## 今天内容
1. react的生命周期
2. react如何跟jquery交互
3. 如何调用远程接口
4. webpack打包react
5. 如何用es6编写react组件

6. 做一个珠峰留言版的案例