window.onload=function () {
    //双下标轮播
    let banner=document.querySelector('.banner');   //获取大盒子，返回值dom对象
    let imgs=banner.querySelectorAll('.banner ul li'); //获取所有的图片，返回值dom对象的集合
    let width=parseInt(window.getComputedStyle(banner,null).width); //window.getComputeStyle是用来获取对象的样式。parseInt是用来将123px转换为123整型数值
    let circles=banner.querySelectorAll('div.circle a'); //获取所有的小圆点，返回值为dom对象集合
    let left=banner.querySelector('.left');  //获取左右按钮，返回值dom对象
    let right=banner.querySelector('.right');
    let now=0;   //当前显示图片的下标
    let next=0;  //下一张要显示的图片的下标
    let flag=true;  //设置的开关初始值。给图片一个 加载时间
    let flag2=true;
    // let m;        //设置延时时间函数需要赋值的变量
//        将左右按钮和轮播共同需要的代码封装成为了一个函数，以便调用
    function move(way='right'){
        switch(way){
            case'right':                                //当向左滑动时执行以下操作
                next=now+1;
                if(next>=imgs.length){
                    next=0;
                }
                imgs[next].style.left='100%';
                animate(imgs[now],{left:-width},500,function(){
                    // flag2=true;
                });
                animate(imgs[next],{left:0},500,function(){
                    flag=true;
                });
                break;
            case'left'://当向右滑动时执行以下操作
                next=now-1;
                if(next<0){
                    next=imgs.length-1;
                }
                imgs[next].style.left='-100%';
                animate(imgs[now],{left:width},500,function(){
                    // flag2=true;
                });
                animate(imgs[next],{left:0},500,function(){
                    flag=true;

                });
                break;
        }
        circles[now].classList.remove('circle-one');
        circles[next].classList.add('circle-one');
        now=next;
    }
    let t=setInterval(move,2000);
    banner.onmouseover=function(){
        clearInterval(t);
    };
   banner.onmouseout=function(){
        t=setInterval(move,2000);
    };
    right.onclick=function(){
        if(flag){
            flag=false;
            move('right');
        }
    }
    left.onclick=function(){
        if(flag){
            flag=false;
            move('left');
        }
    }
    circles.forEach(function(value,index){
        value.onclick=function () {
            if (index > now){
                imgs[index].style.left='100%';
                animate(imgs[now], {left: -width}, 500);
                animate(imgs[index], {left: 0}, 500 );
                circles[now].classList.remove('circle-one');
                circles[index].classList.add('circle-one');
                now = index;
            }else if (index < now){
                imgs[index].style.left='-100%';
                animate(imgs[now], {left: width},500);
                animate(imgs[index], {left: 0}, 500);
                circles[now].classList.remove('circle-one');
                circles[index].classList.add('circle-one');
                now = index;
            }
        }

    });


    //节点轮播
    let box=document.querySelector('.rotate');          //获取大盒子
    let activityBox=box.querySelector('.rotate > .aa > ul.activity');
    let lis=document.querySelectorAll('.rotate >.aa > ul.activity > li');
    let widths=parseInt(getComputedStyle(lis[0],null).width);
    let l=box.querySelector('.rotate-left');
    let r=box.querySelector('.rotate-right');
    let sign=true;
    // let sign2=true;
    // let n;
    // let h;
    let active=function () {
        if(sign){
            animate(activityBox,{left:-widths},500,function(){
                let first=activityBox.firstElementChild;
                activityBox.appendChild(first);
                activityBox.style.left=0;
                sign=true;
            });
        }else{
            let last=activityBox.lastElementChild;
            let first=activityBox.firstElementChild;
            activityBox.insertBefore(last,first);
            activityBox.style.left=-widths+'px';
            animate(activityBox,{left:0},500,function () {
                sign=true;
            });
        }
    }

    let m=setInterval(active,2000);

    activityBox.onmouseover=function () {
        clearTimeout(m);
    }
    activityBox.onmouseout=function () {
        m=setInterval(active,2000);
    }
//        给左按钮点击事件
    let kaiguan=true;
    l.onclick=function(){
        sign=false;
        active();
    };
    r.onclick=function () {
        sign=true;
        active();
    }

    //地区（事件委派）
    let area=document.querySelector('#area');
    let down=document.querySelector('.down');
    area.onclick=function () {
        down.style.height=88+'px';
        down.style.display='block';
    }
    //利用捕获型事件流来进行处理，从document开始向内进行触发事件
    document.body.addEventListener('click',function () {
        down.style.height=0;
        down.style.display='none';

    },true)

    //底部公告轮播
        let noticebox=document.querySelector('.notice > div.noticebox');   		 //获取大盒子box，因为只有一个，用的querySelector
        let noticesons=document.querySelectorAll('.notice > div.noticebox > div.noticeson');		//获取所有的轮播图片集合
        let lee=document.querySelector('.notice .notice-four > a.left');			//获取两边的按钮 ，dom对象
        console.log(lee)
        let ree=document.querySelector('.notice .notice-four > a.right');
        console.log(ree)
        let n=0;										//设置图片和圆点加n
        let fla=true;									//设置开关的初始值为真
        // let m;											//这是声明了时间函数的变量
        let lunbo=function(way="right"){
            if(way=="right"){
                n++;
                if(n>=noticesons.length){
                    n=0;
                }
            }
            if(way=="left"){
                n--;
                if(n<0){
                    n=noticesons.length-1;
                }
            }

            for(let i=0;i<noticesons.length;i++){
                noticesons[i].classList.remove('first');		//清除图片和圆点为类名first
            }
            noticesons[n].classList.add('first');
        }
        let tt=setInterval(lunbo,3000);					//调用move函数，将图片进行1.3秒的轮播

        //给鼠标添加移入移出事件
        noticebox.onmouseover=function(){						//给大盒子box添加鼠标放在上面图片不动的效果
            clearInterval(tt);
        }
        noticebox.onmouseout=function(){
            tt=setInterval(lunbo,3000);
        }

        lee.onclick=function(){
                lunbo('left');
        }
        ree.onclick=function() {
                lunbo();
        }


        //navigation
        let as=document.querySelectorAll('.navigation > a');
        as.forEach(function (value) {
            let ul=value.querySelector('ul');
            let triangle=value.querySelector('.triangle');
            let div=value.querySelector('.navigation-two');
            value.onmouseover=function () {
                div.style.background='#f5f5f5';
                div.style.color='#0085D0';
                ul.style.height=40+'px';
                triangle.style.display='block';
            }
            value.onmouseout=function () {
                div.style.background='#E4E4E4';
                div.style.color='#666666';
                ul.style.height=0;
                triangle.style.display='none'
            }
        })

    //导航栏登陆
    let load=document.querySelectorAll('.state > ul.state-son > li.load');
    load.forEach(function (value) {
        let div=value.querySelector('.state > ul.state-son > li.load > div');
        value.onmouseover=function () {
            div.style.height=120+'px';
            value.style.background='#fff';
        }
        value.onmouseout=function () {
            div.style.height=0;
            value.style.background='#F6F6F6';
        }
    })

    let phone=document.querySelectorAll('.state > ul.state-son > li.phone');
    console.log(phone)
    phone.forEach(function (value) {
        let div=value.querySelector('.state > ul.state-son > li.phone > div');
        value.onmouseover=function () {
            div.style.height=158+'px';
            value.style.background='#fff';
        }
        value.onmouseout=function () {
            div.style.height=0;
            value.style.background='#F6F6F6';
        }
    })
};