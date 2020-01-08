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
//查询所有商品
Router.get('/', async (req, res) => {

    let result = await mongo.find('shangpin', req.query);//调用封装好的find方法，查询数据并返回给前端 [{},{},{}]
    // console.log(result);
    if (result.length) {
        //成功
        res.send(formatdata({ data: result }));
    } else {
        //失败
        res.send(formatdata({ code: 0 }));
    }

});
//增加商品/finds/add
Router.post('/add', async (req, res) => {
    // console.log(req.body);
    let { goods_id, goods_name, goods_price, goods_kucun } = req.body;
    if (goods_id && goods_name && goods_price && goods_kucun) {
        //不为空才存数据
        let result = await mongo.create('shangpin', [req.body]);//调用封装好的find方法，查询数据并返回给前端
        // console.log(result);
        if (result.insertedCount) {
            //插入成功
            res.send(formatdata());
        } else {
            //插入失败
            res.send(formatdata({ code: 0 }));
        }
    } else {
        //插入失败
        res.send(formatdata({ code: 0 }));
    }

});

//查询单个商品
Router.get('/find', async (req, res) => {
    let result = await mongo.find('shangpin', req.query);//调用封装好的find方法，查询数据并返回给前端
    console.log(req.query);

    if (result.length) {
        //找到，返回数据
        res.send(formatdata({ data: result }));
    } else {
        //没有找到，
        res.send(formatdata({ code: 0 }));
    }
});
//删除单个商品
Router.get('/delete', async (req, res) => {
    // console.log(req.query);
    let result = await mongo.remove('shangpin', req.query);//调用封装好的find方法，查询数据并返回给前端
    // console.log(result.deletedCount);
    if (result.deletedCount) {
        //删除成功
        res.send(formatdata());
    } else {
        //失败
        res.send(formatdata({ code: 0 }));
    }
});

//改动单个商品  通过ID改变其他数据  ID不可更改  一次只能修改一个参数
Router.post('/update', async (req, res) => {
    let { goods_id, goods_name, goods_price, goods_kucun } = req.body;
    // console.log({ 'goods_id': goods_id })
    let result = await mongo.update('shangpin', { goods_id }, { $set: { goods_kucun } });//调用封装好的find方法，查询数据并返回给前端
    // console.log(result);
    if (result.modifiedCount) {
        //改动成功
        res.send(formatdata());
    } else {
        //失败
        res.send(formatdata({ code: 0 }));
    }
});
//暴露模块
module.exports = Router;