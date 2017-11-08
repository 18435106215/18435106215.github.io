/**
 * Created by Administrator on 2017/11/7.
 */
$(function () {
    //选项卡
    $('section ul.fenlei li').click(function () {
        $('section ul.fenlei li').removeClass('active');
        $(this).addClass('active')
        $('.goods_tab li').removeClass('active');
        $('.goods_tab li').eq($(this).index()).addClass('active');
    })


})