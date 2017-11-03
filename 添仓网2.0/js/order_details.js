/**
 * Created by Administrator on 2017/11/3.
 */
$(function () {
//    付款方式选择
    $('.pay .pay_style .pay_lei div').click(function () {
        $('.pay .pay_style .pay_lei div').removeClass('active');
        $(this).addClass('active');
    })

    $('.tijiao').click(function () {
        alert(1);
    })
})