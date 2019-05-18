var userModule = require('../dataModules/usersModule')
//登录验证
exports.login = (req,res) =>{
    //1获取用户数据
    //console.log(req.body)
//     userModule.getUserByEmail(req.body.email,(err,data) => {
//         if(err){
//             res.json({
//                 code:201,
//                 msg:'服务器异常'
//             })
//         }else{
//             // 判断有没有返回数据行
//             if(data){ //返回了数据行,说明根据邮箱查询到数据
//                 // 再来判断是否正确
//                 if(data.password == req.body.password){
//                     /* res.json({
//                         code:200,
//                         msg:'登陆成功'
//                     }) */
//                      // 通过session进行状态保持
//                      req.session.isLogin = 'true'
//                      req.session.currentUser = data
//                      res.end(JSON.stringify({
//                          code:200,
//                          mag:'成功登录'
//                      }))
//                 }else{
//                     res.json({
//                         code:201,
//                         msg:'密码错误'
//                     })
//                 }

//             }else{//根据邮箱没有查询出任何的数据
//                 res.json({
//                     code:201,
//                     msg:'邮箱输入错误'
//                 })
//             }
//         }
//     })
// }
userModule.getUserByEmail(req.body.email,(err,data) => {
    if(err){
        res.json({
            code:201,
            msg:'服务器异常'
        })
    }else{
        // 判断有没有返回数据行
        if(data){ //返回了数据行,说明根据邮箱查询到数据
            // 再来判断是否正确
            if(data.password == req.body.password){
                // 写入登陆状态
                // res.writeHead(200,{
                //     // expire
                //     'Set-Cookie':'isLogin=true'
                // })
                // 通过session进行状态保持
                req.session.isLogin = 'true'
                req.session.currentUser = data
                
                res.end(JSON.stringify({
                    code:200,
                    msg:'登陆成功'
                }))
            }else{
                res.json({
                    code:201,
                    msg:'密码错误'
                })
            }

        }else{//根据邮箱没有查询出任何的数据
            res.json({
                code:201,
                msg:'邮箱输入错误'
            })
        }
        //console.log(data)
    }
})
}