const express = require('express');//模块访问：缓存
const Router = express.Router();//express自带的中间件，路由设置 Router==app
Router.use(express.urlencoded({}));//为了获取req.body里面的数据
//测试 不能同时测试  只能一个一个测试
// Router.use((req, res, next) => {
//     res.send('已经进入总路由了');
// });



//把这个路由配置放在所有路由的前面，方便调用next操作
//解决跨域问题
Router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,PATCH,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if (req.method == "OPTIONS") {//特殊请求：发送了请求头的数据
        res.sendStatus(200);/*让options请求快速返回*/
    } else {
        next();
    }
})

//引入子路由模块
const gonglveRouter = require('./gonglve');
const userRouter = require('./user');
const fristRouter = require('./frist');
const shangpinRouter = require('./shangpin');
//调用子路由
Router.use('/gonglve', gonglveRouter);//finds.js模块导出了一个中间件
Router.use('/user', userRouter);//user.js模块导出了一个中间件
Router.use('/frist', fristRouter);//frist.js模块导出了一个中间件
Router.use('/shangpin', shangpinRouter);//shangpin.js模块导出了一个中间件
//暴露模块
module.exports = Router;