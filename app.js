const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const app = express();
//导入路由
const usersRouter = require('./router/users');
// const productRouter = require('./router/product');

let conf = {
    port: 8088,
    host: 'localhost'
};


//配置静态web服务
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json())
app.use(express.urlencoded({ extended: true })); //将post表单数据解析为json

//使用路由中间件，必须写在web服务下，要不然拿不到post数据
app.use(cookieParser()); //读取和设置cookie中间件
app.use('/users', usersRouter);
// app.use('/product', productRouter);

app.use(function(req, res, next) {
    //定义了一个中间件
    next(createError(404)); // 创建一个404错误
});

app.use(function(err, req, res, next) {
    // console.log(err.status);
    res.status(err.status || 500);
    res.location('/public/html/404.html');
});

//服务启动
app.listen(conf.port, conf.host, () => {
    console.log(`server is running on http://${conf.host}:${conf.port}`);

})