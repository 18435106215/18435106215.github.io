/**
 * Created by Administrator on 2017/4/18.
 */

$(function () {
    //轮播图部分
    let bannerBigbox=$('.bannerBigbox')[0];
    let imgs=$('.lunbotu ');
    let lunbodian=$('.lunbodian li');
    let bannerwai=$('.bannerwai');
    let left=$('.left')[0];
    let right=$('.right')[0];
    let flag1=true;
    let n=0;


    lunbodian[0].style.background="#e5004f";
    let t1=setInterval(move,2000);
    function move(type='right') {
        if(type=='right'){
            n++;
            if(n>=imgs.length){
                n=0
            }
        }
        if(type=='left'){
            n--;
            if(n<0){
                n=imgs.length-1
            }
        }
        for(let i=0;i<imgs.length;i++){
            imgs[i].classList.remove('one');
            bannerwai[i].classList.remove('one');

            lunbodian[i].style.background="#211616";
        }
        imgs[n].classList.add('one');
        bannerwai[n].classList.add('one');
        lunbodian[n].style.background="#e5004f";
    }


    for(let i=0;i<lunbodian.length;i++){
        lunbodian[i].onmouseover=function () {
            for(let j=0;j<imgs.length;j++){
                imgs[j].classList.remove('one');
                bannerwai[j].classList.remove('one');
                lunbodian[j].style.background="#211616";
            }
            imgs[i].classList.add('one');
            bannerwai[i].classList.add('one');
            lunbodian[i].style.background="#e5004f";
            n=i;
        }
    }

    imgs.forEach(function (value) {
        value.addEventListener('transitionend',function () {
            flag1=true;
        })
    });

    right.onclick=function () {
        if(flag1){
            flag1=false;
            move('right');
        }

    };
    left.onclick=function () {
        if(flag1){
            flag1=false;
            move('left');
        }

    };


    bannerBigbox.onmouseover=function () {
        clearInterval(t1);
        left.style.display="block";
        right.style.display="block";
    }
    bannerBigbox.onmouseout=function () {
        t1=setInterval(move,2000);
        left.style.display="none";
        right.style.display="none";
    };

    //选项卡部分

    let xxkbtn=$('.xxkbtn');
    let xxk1=$('.xxk1');

    for(let i=0;i<xxkbtn.length;i++){
        xxkbtn[i].onmouseover=function () {
            for (let j=0;j<xxk1.length;j++){
                xxk1[j].style.display='none';
                xxkbtn[j].style.borderColor='#333333';
                xxkbtn[j].style.fontWeight=400;
            }
            xxk1[i].style.display='block';
            xxkbtn[i].style.borderColor='#e5004f';
            xxkbtn[i].style.fontWeight=600;
        }
    }


 //2楼选项卡
    let xxkbtn2=$('.xxkbtn2');
    let xxk2=$('.remenpinpai');

    for(let i=0;i<xxkbtn2.length;i++){
        xxkbtn2[i].onmouseover=function () {
            for (let j=0;j<xxk2.length;j++){
                xxk2[j].style.display='none';
                xxkbtn2[j].style.borderColor='#333333';
                xxkbtn2[j].style.fontWeight=400;
            }
            xxk2[i].style.display='block';
            xxkbtn2[i].style.borderBottomColor='#e5004f';
            xxkbtn2[i].style.fontWeight=600;
        }
    }

    //3楼节点小轮播
    let scroller=$('.scroller');
    let btnright=$('.btnright');
    let btnleft=$('.btnleft');
    console.log(scroller,btnright,btnleft)

    // btnright.onclick=function () {
    //     let first=scroller.firstElementChild;
    //     let last=scroller.lastElementChild;
    //     animate(first,{left:-170},500,function () {
    //         scroller.append(first);
    //         first.style.left='170px';
    //     });
    //     animate(last,{left:0},500)
    // }
    //
    // btnleft.onclick=function () {
    //     let first=scroller.firstElementChild;
    //     let last=scroller.lastElementChild;
    //     scroller.insertBefore(last,first);
    //     last.style.left='-170px';
    //     animate(first,{left:170},500);
    //     animate(last,{left:0},500)
    // }

    for(let i=0;i<btnright.length;i++){
        btnright[i].onclick=function () {
                let first=scroller[i].firstElementChild;
                let last=scroller[i].lastElementChild;
                animate(first,{left:-170},500,function () {
                            scroller[i].append(first);
                            first.style.left='170px';
                        });
                 animate(last,{left:0},500)
        }
    }

    for(let i=0;i<btnright.length;i++){
        btnleft[i].onclick=function () {
                let first=scroller[i].firstElementChild;
                let last=scroller[i].lastElementChild;
                scroller[i].insertBefore(last,first);
                    last.style.left='-170px';
                    animate(first,{left:170},500);
                    animate(last,{left:0},500)
        }
    }







    //3楼小轮播第二个
    let floor3_zhong=$('.floor3_zhong')[0];
    let smlunbo=$('.smlunbo');
    let smleft=$('.smleft')[0];
    let smright=$('.smright')[0];
    let smdian=$('.smdian p');

    smright.onclick=function () {
        animate(smlunbo[0],{left:-390},500)
        animate(smlunbo[1],{left:0},500)
        smdian[0].style.background='#ccc';
        smdian[1].style.background='#e5004f';

    };
    smleft.onclick=function () {
        animate(smlunbo[1],{left:390},500)
        animate(smlunbo[0],{left:0},500);
        smdian[1].style.background='#ccc';
        smdian[0].style.background='#e5004f';

    };

    floor3_zhong.onmouseover=function () {
        smleft.style.display='block';
        smright.style.display='block';
    }
    floor3_zhong.onmouseout=function () {
        smleft.style.display='none';
        smright.style.display='none';
    }



    //楼层跳转
    let lcbtn=$('.lcbtn');
    let lc=$('.lc');
    let chuxian=$('.chuxian');
    let chuxian2=$('.chuxian2')[0];
    let dingbu=$('.dingbu')[0];



    let louchengbox=$('.louchengbox')[0];

    console.log(lcbtn,lc);


    for(let i=0;i<lcbtn.length;i++){
        lcbtn[i].onclick=function () {

            animate(document.body,{scrollTop:lc[i].offsetTop})
        }
    }
    dingbu.onclick=function () {
        animate(document.body,{scrollTop:0})
    };

       //滚动条变化时
    window.onscroll=function () {
        for(let i=0;i<lcbtn.length;i++){
            if(document.body.scrollTop>=lc[i].offsetTop){
                for (let j=0;j<chuxian.length;j++){
                    chuxian[j].style.display='none';
                }
                chuxian[i].style.display='block';
            }
        }

        for(let i=0;i<lcbtn.length;i++){
            lcbtn[i].onmouseover=function () {
                chuxian[i].style.display='block';
            }
            lcbtn[i].onmouseout=function () {
                chuxian[i].style.display='none';
            }
        }
        dingbu.onmouseover=function () {
            chuxian2.style.display='block';
        }
        dingbu.onmouseout=function () {
            chuxian2.style.display='none';
        }


        if(document.body.scrollTop>=750){
            louchengbox.style.display='block';
        }else {
            louchengbox.style.display='none';
        }


    }


    //顶部箭头部分
    // let weixin=$('.hdtop ul li:nth-child(3)')[0];
    // let shangjian=$('.shangjian')[0];
    //
    // console.log(shangjian)
    // weixin.onmouseover=function () {
    //     console.log(1)
    //     shangjian.style.transform='rotateX(180deg)'
    // }










})