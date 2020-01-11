const express = require('express');//模块访问：缓存
const Router = express.Router();

//测试 不能同时测试  只能一个一个测试
// Router.use((req, res, next) => {
//     res.send('已经进入user');
// });

const { mongo } = require('../db')//获取mongodb的增删改查方法
/* 
    mongo.create.(集合名字, 条件(数组));  增 
    mongo.remove.(集合名字, 条件(对象));  删
    mongo.update.(集合名字, 条件(对象));  改
    mongo.find.(集合名字, 查找条件(对象));   查  
*/
const { formatdata } = require('../utils/formatdata');//获取提示信息格式化的方法
const { verify } = require('../utils/token');//进行token验证的方法
const { create } = require('../utils/token');//进行token生成的方法
/* 
    formatdata();//得到默认值,成功的没有数据返回
    formatdata({ code: 0 });//失败的
    formatdata({ data: [1, 2, 3] });//成功并且有数据返回
*/
//注册 /users/reg
Router.post('/reg', async (req, res) => {
    console.log(req.body);
    let { name, password } = req.body;
    if (name) {
        //不为空才存数据
        let result = await mongo.create('FeekrUser', [req.body]);//调用封装好的find方法，查询数据并返回给前端
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

//验证用户名是否存在
Router.get('/check', async (req, res) => {
    let result = await mongo.find('FeekrUser', req.query);//调用封装好的find方法，查询数据并返回给前端
    // console.log(result);
    if (result.length) {
        //找到，不给注册
        res.send(formatdata({ code: 0 }));
    } else {
        //没有找到，可以注册
        res.send(formatdata());
    }
});

//登陆 users/login
Router.get('/login', async (req, res) => {
    // let { name, password, keep } = req.body;//post用body请求数据
    let { name, password, keep } = req.query;//get用query请求数据
    // console.log(name, password, keep);
    let result = await mongo.find('FeekrUser', { name, password });//调用封装好的find方法，查询数据并返回给前端 [{},{},{}]
    // console.log(result.length)
    if (result.length) {
        //成功
        //判断是否要生成token：前端想保留7天免登陆的时候
        let token = '';
        if (keep) {
            //生成token
            token = create(name);
            // console.log(token);
        }
        res.send(formatdata({ authorization: token }));//把token生成后发给前端
        // res.send('登陆成功');
    } else {
        //失败
        res.send(formatdata({ code: 0 }));
    }
});

//token验证
Router.post('/verify', (req, res) => {
    let { token } = req.body;
    let result = verify(token);
    // console.log(result);//校验是否通行
    if (result) {//可以直接登陆
        res.send(formatdata());
    } else {
        res.send(formatdata({ code: 0 }))
    }

});
//查询所有用户
Router.get('/', async (req, res) => {
    let result = await mongo.find('FeekrUser', req.query);//调用封装好的find方法，查询数据并返回给前端 [{},{},{}]
    if (result.length) {
        //成功
        res.send(formatdata({ data: result }));
    } else {
        //失败
        res.send(formatdata({ code: 0 }));
    }

});
//删除单个用户
Router.get('/delete', async (req, res) => {
    let result = await mongo.remove('FeekrUser', req.query);//调用封装好的find方法，查询数据并返回给前端
    // console.log(result.deletedCount);
    if (result.deletedCount) {
        //删除成功
        res.send(formatdata());
    } else {
        //失败
        res.send(formatdata({ code: 0 }));
    }
});

//改密码  
Router.post('/update', async (req, res) => {
    let { name, password } = req.body;
    // console.log({ 'goods_id': goods_id })
    let result = await mongo.update('FeekrUser', { name }, { $set: { password } });//调用封装好的find方法，查询数据并返回给前端
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