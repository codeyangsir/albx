var express = require('express')
//引入session
var session = require('express-session')
var app = express()
app.listen('3006',() =>{
    console.log('http://127.0.0.1:3006')
})
//配置使用session(options)
app.use(session({
    secret:'mywords',//这个值可以随便写，但一定要记住
    //重新保存：强制会话保存即使是未修改的。默认为true但是得写上
    resave:false,
    //强制“未初始化”的会话保存到存储。 
    saveUninitialized:false,
}))
app.get('/',(req,res)=>{
    console.log(req.session)
    if(req.session.islogin && req.session.islogin == 'true'){
        res.end('welcome back')
    }else{
        req.session.islogin ='true'
        res.end('first')
    }
    
})