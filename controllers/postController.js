var postsModule = require('../dataModules/postModule')
var moment = require('moment')
module.exports = {
    // 获取所有文章数据
    getAllPostList(req,res){
        //看看在ajax里面传第参数能不能拿到
        //console.log(req.url)
        //只要配置body-parse就可以这样取值
        // 以后如果是get方式传递的参数，都可以使用req.query来获取，它得到的是一个对象
        //console.log(req.query)
        // 调用数据模块获取所有文章数据
        postsModule.getAllPostList(req.query,(err,data) => {
            if(err){
                res.json({
                    code:404,
                    msg:'err'
                })
            }else{
                res.json({
                    code:200,
                    data:data
                })
            }
        })
    },

    //实现文章新增 
    addPost(req,res){
        //console.log(req.body)
        var obj = req.body
        obj['views'] = 0
        obj['likes'] = 0
        obj['user_id'] = req.session.currentUser.id
        obj.created = moment(obj.created).format('YYYY-MM-DD HH:mm:ss')//做年月日时分秒的处理
        //console.log(obj)

        //实现新增
        postsModule.addPost(obj,(err) =>{
            if(err){
                res.json({
                    code:201,
                    msg:'新增失败'
                })
            }else{
                res.json({
                        code:200,
                        msg:'新增成功'
                })
            }
        })
    }
}