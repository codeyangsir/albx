$(function(){
    // 我需要在路由满足条件的情况为#menu-posts添加样式和属性
    // 1.获取到当前路由，需要判断是否带参数
    // http://127.0.0.1:3004/admin/post-add?id=1
    // 判断是否有参数，就是看是否有问号
    //indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
    var index = location.href.indexOf('?')
    var routername
    if(index ==-1){
        //location.href是跳转的意思
        //stringObject.substring(start,stop)
        //             substring(3,7)
        //substring() 方法用于提取字符串中介于两个指定下标之间的字符。
        //LastIndexOf取的是“/”最后一次出现的索引，加1后取得是"/"最后一次出现的索引的后一位，就是获取/后面的，不包括/……
        routername = location.href.substring(location.href.lastIndexOf('/')+1)
    }else{
        routername = location.href.substring(location.href.lastIndexOf('/')+1,index)
        //上面这句代码第意思就是获取/到?之间第字符
        //+1是获取到斜杠之后的字符
        //location.href.lastIndexOf('/')+1===/,index===?
    }   
     // 2.获取到当前元素，为元素进行相关设置
     var menu_posts = $('#menu-posts') 
     //判断
     if(routername == 'posts' || routername == 'post-add' || routername == 'categories'){
        //等于就给id=menu-posts里面的class属性添加 in
        //addClass() 方法向被选元素添加一个或多个类。
        menu_posts.addClass('in')
        //等于就给id=menu-posts里面的aria-expanded=true
        //attr() 方法设置或返回被选元素的属性和值。
        menu_posts.attr('aria-expanded',true)
     }
     // 3.设置菜单也需要这样处理
    var menu_settings = $('#menu-settings')
    if(routername == 'nav-menus' || routername == 'slides' || routername == 'settings'){
        menu_settings.addClass('in')
        menu_settings.attr('aria-expanded',true)
    }

    // 为当前li元素添加样式
    $('#'+routername).addClass('active')
})
/* $(function(){
    // 我需要在路由满足条件的情况为#menu-posts添加样式和属性
    // 1.获取到当前路由，需要判断是否带参数
    // http://127.0.0.1:3004/admin/post-add?id=1
    // 判断是否有参数，就是看是否有问号
    //indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
    var index = location.href.indexOf('?')
    var routername
    if(index == -1){
        //location.href是跳转的意思
        //stringObject.substring(start,stop)
        //             substring(3,7)
        //
        routername = location.href.substring(location.href.lastIndexOf('/')+1)
    }else{
        //LastIndexOf取的是“/”最后一次出现的索引，加1后取得是"/"最后一次出现的索引的后一位……
        routername = location.href.substring(location.href.lastIndexOf('/')+1,index)
        //上面这句代码第意思就是获取/到?之间第字符
        //location.href.lastIndexOf('/')+1===/,index===?
    }   
    // 2.获取到当前元素，为元素进行相关设置
    var menu_posts = $('#menu-posts')
    if(routername == 'posts' || routername == 'post-add' || routername == 'categories'){
        menu_posts.addClass('in')
        menu_posts.attr('aria-expanded',true)
    }

    // 3.设置菜单也需要这样处理
    var menu_settings = $('#menu-settings')
    if(routername == 'nav-menus' || routername == 'slides' || routername == 'settings'){
        menu_settings.addClass('in')
        menu_settings.attr('aria-expanded',true)
    }

    // 为当前li元素添加样式
    $('#'+routername).addClass('active')
}) */