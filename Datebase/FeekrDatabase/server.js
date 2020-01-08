//主入口
const express = require('express');
//开启服务器
const app = express();
let allRouter = require('./backend/router/index');//这里可以写index。也可以不写，因为index是默认的。导入模块
//开启静态资源服务器
app.use(express.static('./'))
app.use(allRouter);//引入总的路由，allRouter是一个中间件
//监听端口
app.listen(2020, () => {
    console.log('开启静态服务器2020');
})