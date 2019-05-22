var formidable = require('formidable')
//引入核心模块
var path = require('path')
module.exports ={
    //doUpload路由页定义第方法
    doUpload(req,res){
        //1.创建文件上传对象
        var form = new formidable.IncomingForm()
        //2.设置编码格式
        form.encoding = 'utf-8'
        //3.设置文件上传目录
        form.uploadDir=__dirname+'/../uploads'
        //4.是否保留文件扩展名
        form.keepExtensions = true
        //5.调用方法来实现文件上传
        form.parse(req,(err,fileds,files)=>{
            // console.log(files)
            // var filename = path.basename(files.img.path)
            // console.log(filename)
            // res.end('')
            //判断一下文件有没有上传成功
            if(err){
                res.json({
                    code:201,
                    msg:'文件上传失败'
                })
            }else{
                // console.log(files)
                var filename = path.basename(files.img.path)
                // console.log(filename)
                res.json({
                    code:200,
                    msg:'文件上传成功',
                    img:filename
                })//到这里已经获取到文件上传成功第信息了
            }
        })
    }
}
