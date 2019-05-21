var postsModule = require('../dataModules/postModule')
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
    }
}