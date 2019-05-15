//引入express
var express = require('express')
//引入路由模块
var router = require('./router')
// 引入ejs
var ejs = require('ejs')
//创建app服务器
var app  = express()

app.listen(3006,() =>{
    console.log('http://127.0.0.1:3006')
})

//托管静态资源
app.use('/assets',express.static('assets'))
// 配置模块引擎为ejs
app.set('view engine','ejs')
// 下面这个配置的作用是配置ejs的模板文件夹，以后ejs会自动的去指定的目录下寻找页面文件
app.set('views',__dirname + '/views')
// 使用use中间件在当前应用上挂载路由配置
app.use(router)