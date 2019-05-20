module.exports={
    getParameter(str){
        // var obj = {}
        //     // http://127.0.0.1:3004/delCategoryById?id=3&name=jack
        //     //lastIndexOf() 方法可返回一个指定的字符串值最后出现的位置
        //     //获取到id=3&name=jack
        //     str = str.substring(str.lastIndexOf('?')+1)
        //     //进行差分
        //     //split() 方法用于把一个字符串分割成字符串数组。
        //     var arr = str.split('&')
        //     // 循环遍历再次拆分
        //     for(var i=0;i<arr.lenght;i++){
        //         //要求拆分成这样==arr[i]:'id=3'
        //         var temp = arr[i].split('=')
        //         //obj['id'] = 3   --索引器
        //         obj[temp[0]]=temp[1]
        //     }
        //     return obj

        var obj = {}
        // http://127.0.0.1:3004/delCategoryById?id=3&name=jack
        str = str.substring(str.lastIndexOf('?')+1) //id=3&name=jack
        // 进行拆分
        var arr = str.split('&') // ['id=3','name=jack']
        // 循环遍历再次拆分
        for(var i=0;i<arr.length;i++){
            // arr[i] :'id=3'
            var temp = arr[i].split('=') // ['id','3']
            obj[temp[0]] = temp[1] //obj['id'] = 3   --索引器
        }
        return obj
    }
}

