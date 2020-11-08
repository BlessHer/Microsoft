const express = require('express');
const conn = require('../dao/conn');
const crypto = require('crypto');


const router = express.Router(); //获得路由对象


//设置路由
//express支持restful api规范
//定义了很多http的动词，例如:get post put delete
// router.route('/')
//     .get((req, res, next) => {
//         res.json({ 'method': 'get' });
//     })
//     .post((req, res, next) => {
//         res.json({ 'method': 'post' });
//     });

//导出路由
router.route('/reg')
    .post((req, res, next) => {
        // console.log(req.body);

        let md5 = crypto.createHash('md5'); //创建一个哈希加密
        let PassResult = md5.update(req.body.password).digest('hex'); //密码加密获得16进制结构
        // console.log(PassResult);

        //创建sql语句
        let sql = `insert into users(user_name, user_password,user_email, user_phone, user_address) 
        values('${req.body.username}','${PassResult}','${req.body.email}','${req.body.phone}','${req.body.address}')`;


        conn.query(sql, (err, result) => {
            if (err) console.log(err);
            if (result.insertId) {
                res.cookie('username', req.body.username);
                res.cookie('isLogined', true);
                res.json({
                    msg: "注册成功",
                    username: req.body.username,
                    error: 0
                });
            }
        });
    });

router.route('/login')
    .post((req, res, next) => {
        // console.log(1);
        console.log(req.cookies);
    })

module.exports = router;