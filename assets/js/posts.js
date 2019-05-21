$(function(){
    //将pageNum,pageSize作为全局变量，以便让其他操作文案修改这个属性值
    var pageSize=2
    var pageNum=1

    //发起ajax获取所有文章数据
    function initData(){
        $.ajax({
            type:'get',
            url:'/getAllPostList',
            data:{
                pageNum,
                pageSize
            },
            dataType:'json',
            success:function(result){
                //console.log(result)
                //生成数据列表动态结构
                var html = template('postListTemp',result.data)
                $('tbody').html(html)
                //生成分页结构
                setPagnator(Math.ceil(result.data.total/pageSize))
            }
        })
    }
    initData()
    
    // 生成分页结构并实现分页业务逻辑
    // - bootstrapMajorVersion：重要属性，必须正确的设置，如果错误后期不能生成分页结构。我们现在用的bootstrap是3.3.7，所以对应的分页区域的结构要使用ul
    // - currentPage:当前页码，这个页码后期需要传递给后台进行查询操作
    // - totalPages：总页数，没有总页面如何生成对应的分页结构呢
    // - onPageClicked：点击分页结构中的页码标签的时候所触发的事件
    function setPagnator(total){
        //分页结构的初始化，并提供相关配置
        //这些配置可以到 bootstrap官网上看
        $('.pagination').bootstrapPaginator({
            bootstrapMajorVersion:3,
            currentPage:pageNum,
            totalPages:total,
            onPageClicked:function(event,originalEvent,type,page){
                // page就是当前需要获取数据的页码
                console.log(page)
                // 修改全局的pageNum,以让我重新发起数据请求的时候能够获取到指定页码的数据
                pageNum = page
                // 再次获取数据
                initData()


            }
        })
    }
    
})