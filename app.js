//引入express
var express = require('express')
//引入路由模块
var router = require('./router')
// 引入ejs
var ejs = require('ejs')
//引入bodyParser 中间件
var bodyParser = require('body-parser')
//引入express-session（状态保持）
var session = require('express-session')
//创建app服务器
var app  = express()

app.listen(3006,() =>{
    console.log('http://127.0.0.1:3006')
})

//托管静态资源
app.use('/assets',express.static('assets'))
app.use('/uploads',express.static('uploads'))
// 配置模块引擎为ejs
app.set('view engine','ejs')
// 下面这个配置的作用是配置ejs的模板文件夹，以后ejs会自动的去指定的目录下寻找页面文件
app.set('views',__dirname + '/views')
//配置使用session(options)
app.use(session({
    secret:'mywords',//这个值可以随便写，但一定要记住
    //重新保存：强制会话保存即使是未修改的。默认为true但是得写上
    resave:false,
    //强制“未初始化”的会话保存到存储。 
    saveUninitialized:false,
}))
//添加body-parser中间件来处理参数
app.use(bodyParser.urlencoded({extended:false}))
// 使用use中间件在当前应用上挂载路由配置


//添加所有请求的路由中间件函数
//app.use里面写一个回调函数，有三个参数
app.use((req,res,next)=>{
    //判断是否登录
    //前台页面不用登录
     //如果有req.session.isLogin这个值同时req.session.isLogin == 'true'
    //或者req.url.indexOf('./admin') ==-1请求第页面不是后台页面
    if(req.session.isLogin && req.session.isLogin == 'true' || 
    req.url.indexOf('/admin') == -1 || req.url == '/admin/login'){
        next()//不写这个就不会进行下一步，一直是空白页面
    }else{
        res.redirect('/admin/login')
    }
})
app.use(router)
