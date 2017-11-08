/**
 * Created by Administrator on 2017/11/4.
 */
// $(function () {
//     $('section .fapiao_xiala div').click(function () {
//         $('section .fapiao_xiala ul.fapiao_list').eq(0).slideToggle(200)
//
//
//         // console.log($(this).index())
//     })
// })
$(function () {
    var btn=document.querySelectorAll('.fapiao_xiala');
    var tab=document.querySelectorAll('.fapiao_list');
    var btn_bg=document.querySelectorAll('.btn_bg');
    var flag=true;
    console.log(btn_bg)
        btn.forEach(function (v,i) {
            v.onclick=function () {
                if(flag){
                    flag=false;
                    //顺序必须写对
                    if(!btn_bg[i].classList.contains('active')){
                        flag=true;
                    }
                    if(btn_bg[i].classList.contains('active')){
                        flag=false;
                    }

                    for(let j=0;j<tab.length;j++){
                        tab[j].classList.remove('active');
                        btn_bg[j].classList.remove('active');
                    }

                    tab[i].classList.add('active')
                    btn_bg[i].classList.add('active');
                }else {
                    flag=true;

                    if(!btn_bg[i].classList.contains('active')){
                        flag=false;
                    }
                    tab[i].classList.remove('active')
                }
            }
        })

})