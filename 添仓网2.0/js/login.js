/**
 * Created by Administrator on 2017/10/26.
 */
//前台登录验证
$(function () {
    var account=$('input[type=text]');
    var password=$('input[type=password]');
    var submit=$('input[type=submit]');
    // console.log(submit)

    account.add(password).blur(function () {
        if(account.val()){
            submit.removeClass('active')
        }else {
            submit.addClass('active')
        }
    })

})