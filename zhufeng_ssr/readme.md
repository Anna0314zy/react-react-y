## 功能点
- 服务端渲染 3000  客户端请求 4000 
  浏览器请求 node服务器  node去请求 4000
- 配置routes 服务端 -客户端都可以使用
- 配置前后端不同的axios根路径
- 服务端请求好的数据（app.lodaData）服务端拿到数据后 再给前端发Html
 store 传给客户端 客户端在此基础上生成store
- 入口文件不一样 后端渲染在root里面渲染过了 客户端不要渲染 客户端不要用render就可以
 服务端渲染html文件给客户端 客户端请求打包后的文件（手写的）
- 受保护的路由 个人中心没有登录重定向到登录页
newWork 服务端需要重定向状态码
如果服务端重定向了 context action replace 判断 改变服务端状态码
- notFound 访问不存在的路由 -- 服务端状态码也要404
- css模块化
要在服务端的时候就把样式都加进去 客户端不要再请求了 要不然会闪烁