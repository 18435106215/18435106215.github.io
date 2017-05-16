


window.onload=function() {
    //banner轮播
    let ban=document.querySelector('.banner');
    let lis=document.querySelectorAll('.tutu > li');
    let lione=document.querySelectorAll('.left-one');
    let cir=document.querySelectorAll('.cir > div');
    let n=lis.length-1;
    let left=ban.querySelector('.left');
    let right=ban.querySelector('.right')
    let flag=true;
    let dd
    function move(fx='right') {
        if(fx=='right'){
            n++
            if(n>=lis.length){
                n=0
            }
        }
        if(fx=='left'){
            n--
            if(n<0){
                n=lis.length-1
            }
        }

        for(let i=0;i<lis.length;i++){
            lis[i].classList.remove('first')
            cir[i].classList.remove('circle')
        }
        lis[n].classList.add('first')
        cir[n].classList.add('circle')
    }
    let t=setInterval(move,2000)
    ban.onmousemove=function () {
        clearInterval(t)
    }
    ban.onmouseout=function () {
        t=setInterval(move,2000)
    }
    cir.forEach(function (value, index) {
        value.onmousemove=function () {
            dd=setTimeout(function () {
                for(let i=0;i<lis.length;i++){
                    lis[i].classList.remove('first')
                    cir[i].classList.remove('circle')
                }
                lis[index].classList.add('first')
                cir[index].classList.add('circle')
                n=index
            },200)
        }
        value.onmouseout=function () {
            clearTimeout(dd);
        }
    })
    for(let i=0;i<lis.length;i++){
        lis[i].addEventListener('transitionend',function () {
            flag=true;
        })
    }
    right.onclick=function () {
        if(flag){
            flag=false
            move()
        }
    }
    left.onclick=function () {
        if(flag){
            flag=false
            move('left')
        }
    }

    //购物车
    let shop=document.querySelector('#shop');
    let lishop=shop.parentNode;
    let shops=document.querySelector('#shop + div')
    let tshop
    lishop.onmousemove=function () {
        shop.style.borderTop='1px solid #B6B4B6'
        shop.style.background='#fff';
        shop.style.color='#ff6709';
        shops.style.height='98px';
    }
    lishop.onmouseout=function () {
        tshop=setTimeout(function () {
            shop.style.borderTop='0'
            shop.style.background='#424242';
            shop.style.color='#B0B0B0';
            shops.style.height='0';
        },200)
    }




    //banner左边
    let leftone=document.querySelector('.left-one');
    let lfli=leftone.querySelectorAll('.left-one > li')
    let ones=document.querySelectorAll('.left-ones')
    lfli.forEach(function (value,index) {
        value.onmouseover=function () {
            for(let i=0;i<lfli.length;i++){
                ones[i].style.display='none'
            }
            ones[index].style.display='block';
        }
        value.onmouseout=function () {
            for(let i=0;i<lfli.length;i++){
                ones[i].style.display='none'
            }
        }
    })


    //banner上边
    let nav=document.querySelector('nav > ul');
    console.log(nav);
    let t4=document.querySelector('#t4');
    console.log(t4);
    let tta=document.querySelectorAll('.top-twos > a');
    console.log(tta);
    let ttb=document.querySelectorAll('.top-two');
    console.log(ttb);

    nav.onmouseover=function (e) {
        let obj=e.target;
        t4.style.height='230px';
        t4.style.borderTop='1px solid #e4e4e4';
        if(obj.className=='aaa'&&obj.children.length==0){
            tta.forEach((a,index)=>{
                a.onmouseover=function () {
                    for(let i=0;i<tta.length;i++){
                        ttb[i].classList.remove('ttb');
                    }
                    ttb[index].classList.add('ttb');
                }
            })
        }
    }
    nav.onmouseout=function () {
        t4.style.height='0';
        t4.style.borderTop='0';
    }



    //选项卡
    let mulu=document.querySelectorAll('.xxkaaa')
    let th3=document.querySelectorAll('.third')
    for(let i=0;i<mulu.length;i++){
        let kaa=mulu[i].querySelectorAll('a')
        let zuo=th3[i].querySelectorAll('.zuo')
        let you=th3[i].querySelectorAll('.you')
        kaa.forEach(function (value, index) {
            value.onmouseover=function () {
                for(let i=0;i<kaa.length;i++){
                    kaa[i].classList.remove('value')
                    zuo[i].classList.remove('zuo-first')
                    you[i].classList.remove('you-first')
                }
                value.classList.add('value');
                zuo[index].classList.add('zuo-first');
                you[index].classList.add('you-first')
            }
        })
    }

    //为你推荐
    let ree=document.querySelector('#goo .ree')
    let lee=document.querySelector('#goo .lee')
    let wei=document.querySelector('.fourth')
    let weis=wei.querySelectorAll('.love')
    let now=0,next;
    let flag1=true;
    lee.style.color='#e4e4e4'
    function weini(fx='right') {
        if(fx=='right'){
            next=now+1;
            weis[next].style.left='1240px'
            animate(weis[now],{left:-1240},500)
            animate(weis[next],{left:0},500,function () {
                flag1=true;
            })
            now=next;
            if(now+1>=weis.length){
                ree.style.color='#e4e4e4'
            }
        }
        if(fx=='left'){
            next=now-1;
            weis[next].style.left='-1240px'
            animate(weis[now],{left:1240},500)
            animate(weis[next],{left:0},500,function () {
                flag1=true;
            })
            now=next;
            if(now-1<0){
                lee.style.color='#e4e4e4'
            }
        }

    }
    ree.onclick=function () {
        if(flag1){
            flag1=false;
            lee.style.color='#000'
            if(now+1>=weis.length){
                flag1=true;
                return
            }
            weini()
        }

    }

    lee.onclick=function () {
        if(flag1){
            flag1=false;
            ree.style.color='#000'
            if(now-1<0){
                flag1=true;
                return
            }
            weini('left')
        }
    }
    let kg=1;
    let tttt=setInterval(function () {
        if(kg==1){
            ree.onclick()
            if(now+1==weis.length){
                kg=0
            }
        }else if(kg==0){
            lee.onclick()
            if(now-1<0){
                kg=1
            }
        }
    },3000)
    let goo=document.querySelector('#goo')
    goo.onmousemove=function () {
        clearInterval(tttt);
    }
    goo.onmouseout=function () {
        tttt=setInterval(function () {
            if(kg==1){
                ree.onclick()
                if(now+1==weis.length){
                    kg=0
                }
            }else if(kg==0){
                lee.onclick()
                if(now-1<0){
                    kg=1
                }
            }
        },3000)
    }


    //小米明星单
    let re=document.querySelector('.re')
    let le=document.querySelector('.le')
    let la=document.querySelector('.left-a')
    let lb=document.querySelector('.left-b')
    let go=document.querySelector('.second-floor > div')
    let flag2=true
    let flag3=true
    le.style.color='#e4e4e4'
    function fun() {
        if(flag2){
            re.style.color='#e4e4e4'
            le.style.color='#0000F0'
            lb.style.left='1240px';
            animate(la,{left:-1240},500)
            animate(lb,{left:0},500,function () {
                flag2=false;
                flag3=true
            })
        }else{
            le.style.color='#e4e4e4'
            re.style.color='#0000F0'
            la.style.left='-1240px'
            animate(lb,{left:1240},500)
            animate(la,{left:0},500,function () {
                flag2=true
                flag3=true
            })
        }
    }
    let tt=setInterval(fun,3000)
    go.onmousemove=function () {
        clearInterval(tt)
    }
    go.onmouseout=function () {
        tt=setInterval(fun,3000)
    }
    re.onclick=function () {
        if(flag3){
            flag3=false
            if(flag2){
                fun();
            }else{
                flag3=true
                return
            }
        }
    }
    le.onclick=function () {
        if(flag3){
            flag3=false
            if(flag2){
                flag3=true
                return
            }else{
                fun();
            }
        }
    }



    // 内容处 小轮播
    let aixis1=document.querySelectorAll('.tm1 > .aixi')
    let aixis2=document.querySelectorAll('.tm2 > .aixi')
    let aixis3=document.querySelectorAll('.tm3 > .aixi')
    let aixis4=document.querySelectorAll('.tm4 > .aixi')
    let lcon1=document.querySelector('.tm1 > .lcon')
    let lcon2=document.querySelector('.tm2 > .lcon')
    let lcon3=document.querySelector('.tm3 > .lcon')
    let lcon4=document.querySelector('.tm4 > .lcon')
    let rcon1=document.querySelector('.tm1 > .rcon')
    let rcon2=document.querySelector('.tm2 > .rcon')
    let rcon3=document.querySelector('.tm3 > .rcon')
    let rcon4=document.querySelector('.tm4 > .rcon')
    let circons1=document.querySelectorAll('.tm1 > .circon > div')
    let circons2=document.querySelectorAll('.tm2 > .circon > div')
    let circons3=document.querySelectorAll('.tm3 > .circon > div')
    let circons4=document.querySelectorAll('.tm4 > .circon > div')
    let nowcon=0;
    let nextcon;
    let fxcon
    function con(fxcon,aixis,circons) {
        if(fxcon=='right'){
            nextcon=nowcon+1;
            if(nextcon>=aixis.length){
                return
            }
            aixis[nextcon].style.left='296px'
            animate(aixis[nowcon],{left:-296},500)
            animate(aixis[nextcon],{left:0},500)
        }else if(fxcon=='left'){
            nextcon=nowcon-1;
            if(nextcon<0){
                return
            }
            aixis[nextcon].style.left='-296px'
            animate(aixis[nowcon],{left:296},500)
            animate(aixis[nextcon],{left:0},500)
        }
        for(let i=0;i<circons.length;i++){
            circons[i].classList.remove('concir')
        }
        circons[nextcon].classList.add('concir')
        nowcon=nextcon;
    }
    function circon(circons, aixis) {
        circons.forEach(function (val, index) {
            val.onclick=function () {
                for(let i=0;i<circons.length;i++){
                    circons[i].classList.remove('concir')
                }
                val.classList.add('concir')
                if(nowcon>index){
                    aixis[index].style.left='-296px'
                    animate(aixis[nowcon],{left:296},500)
                    animate(aixis[index],{left:0},500)
                }else if(nowcon<index){
                    aixis[index].style.left='296px'
                    animate(aixis[nowcon],{left:-296},500)
                    animate(aixis[index],{left:0},500)
                }
                nowcon=index;
            }
        })
    }
    circon(circons1,aixis1)
    circon(circons2,aixis2)
    circon(circons3,aixis3)
    circon(circons4,aixis4)
    rcon1.onclick=function () {
        con('right',aixis1,circons1)
    };
    rcon2.onclick=function () {
        con('right',aixis2,circons2)
    };
    rcon3.onclick=function () {
        con('right',aixis3,circons3)
    };
    rcon4.onclick=function () {
        con('right',aixis4,circons4)
    };
    lcon1.onclick=function () {
        con('left',aixis1,circons1)
    };
    lcon2.onclick=function () {
        con('left',aixis2,circons2)
    };
    lcon3.onclick=function () {
        con('left',aixis3,circons3)
    };
    lcon4.onclick=function () {
        con('left',aixis4,circons4)
    };

    
    
    
    
    
    
}