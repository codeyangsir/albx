// 这个文件是添加对uesrs表的所有操作
var mysql = require('mysql')
var connection = mysql.createConnection({
    host:'127.0.0.1',//这有坑
    user:'root',
    password:'root',
    database:'baixiu'
})


module.exports = connection
