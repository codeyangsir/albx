$(function(){
    $('.btnEdit').css('display','none')
    //获取所有分类数据--初始化封装模板结构刷新
    function init(){
        $.ajax({
            type:'get',
            url:'/getCategories',
            dataType:'json',
            success:function(result){
                //console.log(result)//点击分类目录输出结果
                //调用模块引擎生成动态结构
                //模板结构的id
                var html = template('cateListTemp',{list:result})
                $('tbody').html(html)
            }
        })
}
init()
        // 为编辑按钮绑定事件--使用事件委托
    $('tbody').on('click','.btn-edit',function(){
       var data = $(this).data()
       //为表单中的元素赋值
        $('#name').val(data.name)
        $('#slug').val(data.slug)
        $('#id').val(data.id)
        $('.btnEdit').css("display", "block")
        $('.btnAdd').css("display", "none")
    })

    //实现编辑提交
    $('.btnEdit').on('click',function(){
        var data=$('form').serialize()
        console.log(data)
        $.ajax({
             type: 'post',
            url: '/updateCategories',
            data: data,
            dataType: 'json',
            success:function(result){
                if(result.code ==200){
                    $('.alert-dander span').text(result.msg)
                    $('.alert-danger').fadeIn(1000).delay(2000).fadeOut(1000)
                    //刷新
                    init()
                    // 重置表单元素的数据
                    $('.btnEdit').css("display", "none")
                    $('.btnAdd').css("display", "block")
                    $('#name').val('')
                    $('#slug').val('')
                    $('#id').val('')
                } else {
                    $('.alert-danger span').text(result.msg)
                    $('.alert-danger').fadeIn(1000).delay(2000).fadeOut(1000)

                }
            }
        })
    })

    //实现添加分类数据
    $('.btnAdd').on('click',function(){
        //验证自己实现
        $.ajax({
            type:'post',
            url:'/addCategories',
            //.serialize() 方法创建以标准 URL 编码表示的文本字符串。它的操作对象是代表表单元素集合的 jQuery 对象。
            data:$('form').serialize(),
            dataType:'json',
            success:function(result){
                if (result.code == 200) {
                    $('.alert-danger span').text(result.msg)
                    $('.alert-danger').fadeIn(1000).delay(2000).fadeOut(1000)
                    // 刷新
                    init()
                } else {
                    $('.alert-danger span').text(result.msg)
                    $('.alert-danger').fadeIn(1000).delay(2000).fadeOut(1000)
                }
            }
        })
    })

    // 全选全不选
    $('.chkAll').on('click',function(){
       // 获取当前复选框的checked属性
       // checkbox的checked只能通过prop来获取和设置
       //prop() 和 attr() 可能返回不同的值。本实例演示了当用于返回复选框的 "checked" 状态时的不同。
        var  statu = $(this).prop('checked')
        // 为所有tbody中的复选框设置相同的checked属性
        $('tbody .chkone').prop('checked',statu)
        // 获取所有的tbody中的被选中复选框，判断数量>1,则显示批量删除按钮
        var allChk = $('tbody .chkone:checked')
        if(allChk.lenght >1){
            $('.btn-dels').fadeIn(500)
        }else{
            $('.btn-dels').fadeOut(500)
        }
    })


    // 单击数据对应的复选框
    $('tbody').on('click','.chkone',function(){
        var cnt = $('tbody .chkone').length
        // 获取当前所有被选择的复选框
        var allChk = $('tbody .chkone:checked')
        // 显示或隐藏批量删除按钮
        if(allChk.length > 1){
            $('.btn-dels').fadeIn(500)
        }else{
            $('.btn-dels').fadeOut(500)
        }
        if(allChk.length == cnt){
            $('.chkAll').prop('checked',true)
        }else{
            $('.chkAll').prop('checked',false)
        }
    })

        // 实现批量删除
        $('.btn-dels').on('click', function () {
            // 获取所有被选择的复选框所对应的id
            var allChk = $('tbody .chkone:checked')
            var ids = []
            // 因为id号是存储在一个一个的复选框中的自定义属性中，我们就需要遍历这些被选中的复选框，从中获取里面存储的自定义属性idz
            for (var i = 0; i < allChk.length; i++) {
                ids.push(allChk[i].dataset['id'])
            }
            // 发起请求
            // console.log(ids)
            $.ajax({
                type:'post',
                url:'/delCategories',
                // 后台要求参数是值是id以,分隔的字符串，生成一个对象传递
                data:{ids:ids.join(',')}, // {ids:"1,2,3"}
                dataType:'json',
                success:function(result){
                    console.log(result)
                    if(result.code == 200){
                        if (result.code == 200) {
                            $('.alert-danger span').text(result.msg)
                            $('.alert-danger').fadeIn(1000).delay(2000).fadeOut(1000)
                            // 刷新
                            init()
                        } else {
                            $('.alert-danger span').text(result.msg)
                            $('.alert-danger').fadeIn(1000).delay(2000).fadeOut(1000)
                        }
                    }
                }
            })
        })

    //删除单条分类数据 为删除添加事件委托第方式=========第二种方式实现删除
    $('tbody').on('click', '.btn-del', function () {
        var id = $(this).data('id')
        if (confirm('请问是否真的需要删除？')) {
            $.ajax({
                type: 'get',
                url: '/delCategoryById',
                data: { id },
                dataType: 'json',
                success: function (result) {
                    if (result.code == 200) {
                        $('.alert-danger span').text(result.msg)
                        $('.alert-danger').fadeIn(1000).delay(2000).fadeOut(1000)
                        // 刷新
                        init()
                    } else {
                        $('.alert-danger span').text(result.msg)
                        $('.alert-danger').fadeIn(1000).delay(2000).fadeOut(1000)
                    }
                }
            })
        }
        //console.log(this)
    })

    



})

/*
//===================第一种方式实现删除要把这个方法放在函数外面
function init(){
        $.ajax({
            type:'get',
            url:'/getCategories',
            dataType:'json',
            success:function(result){
                //console.log(result)//点击分类目录输出结果
                //调用模块引擎生成动态结构
                //模板结构的id
                var html = template('cateListTemp',{list:result})
                $('tbody').html(html)
            }
        })
} */
//删除单条分类数据 =====================第一种方式实现删除
/* function delCate(id){
    if(confirm('请问是否需要删除')){
        $.ajax({
            type:'get',
            url:'/delCategoryById',
            data: { id },
            dataType:'json',
            success:function(result){
                if(result.code == 200){
                    $('.alert-danger span').text(result.msg)
                    $('.alert-danger').fadeIn(1000).delay(2000).fadeOut(1000)
                    //刷新
                    init()
                }else{
                    $('.alert-danger span').text(result.msg)
                    $('.alert-danger').fadeIn(1000).delay(2000).fadeOut(1000)
                }
            }
        })
    }
} */