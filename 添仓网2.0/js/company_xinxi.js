/**
 * Created by Administrator on 2017/11/8.
 */
$(function () {
    //行业
    //遮罩
    $('.hangye').click(function () {
        $('.mask').addClass('active');
        $('.xuanzehangye ul').addClass('active');
    })
    //点击li消失遮罩
    $('.xuanzehangye ul li').click(function () {
        $('.xuanzehangye ul li').removeClass('active');
        $(this).addClass('active')
        let that=this;
        setTimeout(function () {
            $('.mask').removeClass('active')
            $('.xuanzehangye ul').removeClass('active');
            $('.hangye i:nth-child(2)').html($(that).html())

        },300)

    })






//身份

    $('.shenfen').click(function () {
        $('.mask').addClass('active');
        $('.xuanzeshenfen ul').addClass('active');
    })
    //点击li消失遮罩
    $('.xuanzeshenfen ul li').click(function () {
        $('.xuanzeshenfen ul li').removeClass('active');
        $(this).addClass('active')

        let that=this;
        setTimeout(function () {
            $('.mask').removeClass('active')
            $('.xuanzeshenfen ul').removeClass('active');
            $('.shenfen i:nth-child(2)').html($(that).html())
            // console.log($(that).html())
        },300)

    })


    $('.mask').click(function () {
        $('.mask').removeClass('active');
        $('.xuanzehangye ul').removeClass('active');
        $('.xuanzeshenfen ul').removeClass('active');
    })



})