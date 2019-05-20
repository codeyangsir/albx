var connection = require('./connModule')
//获取所有分类数据
exports.getAllList = (callback) =>{
    //select * from categories where id != 1(不要id=1的数据)
    var sql = 'select * from categories where id != 1'
     // 调用query方法进行处理
     //sql==SQL语句，没有函数直接给回调函数
     connection.query(sql,(err,results) =>{
         if(err){//如果有错用callback把错误扔回去
             callback(err)
         }else{//第一个null传空值，因为是错误优先的函数
             callback(null,results)
         }
     })
}

// 根据id实现编辑操作
//(obj,callback)把要编辑第数据给我
exports.updateCategories = (obj,callback) => {
     //update categories set ?
    var sql = "update categories set slug = ?,name = ? where id = ?"
    //connection.query()是异步的，所以不等它返回结果
    connection.query(sql,[obj.slug,obj.name,obj.id],(err,results) => {
        if(err){
            callback(err)
        }else{
            callback(null)
        }
    })
}

//实现编辑新增
exports.addCategories =(obj,callback) =>{
    //不要id号
    var sql ='insert categories values(null,?,?)'
    //参数三个对应：顺序，数量，类型
    connection.query(sql,[obj.slug,obj.name],(err,results) => {
        if(err){
            callback(err)
        }else{
            callback(null)
        }
    })
}

// 实现根据id删除分类数据===================第一种方式实现删除
 exports.delCategoryById =(id,callback) =>{
    var sql = "delete from categories where id = ?"
    //connection.query()是异步的，所以不等它返回结果
    connection.query(sql,[id],(err,results) => {
        if(err){
            callback(err)
        }else{
            callback(null)
        }
    })
}

//根据id批量删除
exports.delCategories = (ids,callback) =>{
    //ids是在categories.js里面获取到的数组
    var sql = `delete from categories where id in (${ids})`
    connection.query(sql,(err,results)=>{
        console.log(ids,sql)
        if(err){
            callback(err)
        }else{
            callback(null)
        }
    })

}