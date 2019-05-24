var itcast ={
    getRouterName(urlStr){
        var index = urlStr.indexOf('?')
        var routername
        if(index == -1){
            //substring() 方法用于提取字符串中介于两个指定下标之间的字符。
            //加一是获取到斜杠后面的,不包括斜杠
            //lastIndexOf() 方法可返回一个指定的字符串值最后出现的位置
            routername = urlStr.substring(urlStr.lastIndexOf('/')+1)
        }else{
            routername = urlStr.substring(urlStr.lastIndexOf('/')+1,index)
        }
        return routername
    },
        // 获取页面中通过url传递的参数，返回一个参数对象
        // ?id=1&name=jack 》》 {id:1,name:"jack"}
        getParameter(str){
            var obj = {}
            str = str.substring(1)  // id=1&name=jack
            //第一次分割
            //split() 方法用于把一个字符串分割成字符串数组。
            var arr = str.split('&')     // ['id=1','name=jack']
            //遍历数组再次分割
            for(var i=0;i<arr.length;i++){
                //arr[0]:id=1
                var temp = arr[0].split('=') //["id":1]
                obj[temp[0]]=temp[1] //id=1
            }
            return obj
        }
}