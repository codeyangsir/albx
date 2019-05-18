
$(function(){
    $('.btn-primary').on('click',function(){
        //点击收集用户数据
        var email = $('#email').val()//获取邮箱
        var password = $('#password').val()//获取密码
        //发起Ajax请求
        $.ajax({
            //返回路由页看条件传参数
          type:'post',
          url:'/login', 
          //data参数要传什么
          data:{
              email:email,
              password:password
          },
          //以后要告诉登录是成功还是失败
          dataType:'json',
          //返回值result
          success:function(result){
            //不知道是什么可以输出看看
            //console.log(result)
            if(result.code == 201){
              $('.alert-danger').css('display',"block")
              //result.msg返回错误信息（usersController）
              $('.alert-danger span').text(result.msg)
          }else{
              /* location.href='/lpp' */
              location.href='/admin'
          }
          }
        })
    })
})
