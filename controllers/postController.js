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
    },

    //根据文章id获取指定的文章数据
    getPostById(req,res){
        var id = req.query.id
       // console.log(id)
        postsModule.getPostById(id,(err,data) =>{
            if(err){
                res.json({
                    code:201,
                    msg:'服务器异常'
                })
            }else{
                data.created = moment(data.created).format('YYYY-MM-DDTHH:mm')
                res.json({
                        code:200,
                        msg:'获取成功',
                        data:data
                })
            }
        })
    },

     // 根据id号来实现文章的编辑功能
     editPostById(req,res){
        // console.log(req,res)看看有没有拿到数据
        postsModule.editPostById(req.body,(err) =>{
            if(err){
                res.json({
                    code:201,
                    msg:'编辑失败'
                })
            }else{
                res.json({
                    code:200,
                    msg:'编辑成功'
                })
            }
        })
     }

}