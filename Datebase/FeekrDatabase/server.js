//主入口
const express = require('express');
const fs = require('fs')
const path = require('path')
//开启服务器
const app = express();
let allRouter = require('./backend/router/index');//这里可以写index。也可以不写，因为index是默认的。导入模块
//开启静态资源服务器
app.use(express.static('./'))

//启动gzip压缩
const compression = require('compression');
app.use(compression());
// app.use(() => {
//     //任何的请求返回index.html的内容
//     fs.readFile(path.resolve(__dirname, 'index.html'), (err, data) => {
//         res.set('Content-Type', 'text/html;chartset=utf-8')
//         // res.writeHead(200, { 'content-Type': 'text/html;charset=utf-8' });
//         res.send(data)
//     })
// })
app.use(allRouter);//引入总的路由，allRouter是一个中间件
//监听端口
app.listen(2020, () => {
    console.log('开启静态服务器2020');
})