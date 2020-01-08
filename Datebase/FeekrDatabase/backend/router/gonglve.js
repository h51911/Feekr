/*
  find页面的所有数据管理
        * 添加商品
        * 查询商品数据
        * 修改
        * 删除
        * 批量删除
*/

const express = require('express');//模块访问：缓存
const Router = express.Router();

//测试 不能同时测试  只能一个一个测试
// Router.use((req, res, next) => {
//     res.send('已经进入finds');
// });


const { mongo } = require('../db')//获取mongodb的增删改查方法
/* 
    mongo.create.(集合名字, 条件(数组));  增 
    mongo.remove.(集合名字, 条件(对象));  删
    mongo.update.(集合名字, 条件(对象));  改
    mongo.find.(集合名字, 查找条件(对象));   查  
*/
const { formatdata } = require('../utils/formatdata');//获取提示信息格式化的方法
/* 
    formatdata();//得到默认值,成功的没有数据返回
    formatdata({ code: 0 });//失败的
    formatdata({ data: [1, 2, 3] });//成功并且有数据返回
*/
//查询所有商品 渲染
Router.get('/', async (req, res) => {

    let result = await mongo.find('citylist', req.query);//调用封装好的find方法，查询数据并返回给前端 [{},{},{}]
    console.log(result.length);
    if (result.length) {
        //成功
        res.send(formatdata({ data: result }));
    } else {
        //失败
        res.send(formatdata({ code: 0 }));
    }

});
//暴露模块
module.exports = Router;