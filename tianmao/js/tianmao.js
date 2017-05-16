$(function(){
	Zlunbo(".bannertu img",".beijing",".lunbodian",["#e8e8e8","#f4d9c4","#e8e8e8","#e8e8e8","#e8e8e8","#910fff"],2,"#fff",1500,1,"#666",5,0)
	const xiakuai=$(".shangbiao");
	const shangkuai=$(".zhezhao");
	zhezhao(xiakuai,shangkuai);
	const btn1=$(".taobao");
	const con1=$(".xiaxuankuang1");
	xuanxiangka(btn1,con1);
	const btn2=$(".shoucang");
	const con2=$(".xiaxuankuang2");
	xuanxiangka(btn2,con2);
	const btn3=$(".shouji");
	const con3=$(".xiaxuankuang3");
	xuanxiangka(btn3,con3);
	const btn4=$(".shangjia");
	const con4=$(".xiaxuankuang4");
	xuanxiangka(btn4,con4);
	const btn5=$(".daohang");
	const con5=$(".xiaxuankuang5");
	xuanxiangka(btn5,con5);




	//楼层跳转
	const floor=$("section");
	const btn=$(".louceng");
	const btBox=$(".loucengbox")[0];
	const db=$(".loucenga")[0];
	const color=["#EA5F8D","#0AA6E8","#64C333","#F15453","#19C8A9","#F7A945","#000","#F7A945"];
	const nav=$(".yincang")[0];
	let sobj=document.body;
	const CH=document.documentElement.clientHeight;
	let flagx=true;
	let flags=false;
	
	for(let i=0;i<floor.length;i++){
		btn[i].onclick=function(){
			animate(sobj,{scrollTop:floor[i].offsetTop},500);
		}
		
	}
	db.onclick=function(){
		animate(sobj,{scrollTop:0},500);
	}
	window.onscroll=function(){
		if(sobj.scrollTop>=662){
			if(flagx){
				flagx=false;
				flags=true;
				animate(nav,{top:0},500,function(){
					flagx=true;
				})
			}
			
		}else{
			if(flags){
				flags=false;
				flagx=true;
				animate(nav,{top:-50},500,function(){
					flags=true;
					})
				}
			
		}
			if(sobj.scrollTop+0.5*CH>=floor[0].offsetTop){
				btBox.style.display="block";
			}else{
				btBox.style.display="none";
			}

		for(let i=0;i<floor.length;i++){
			if(sobj.scrollTop+0.5*CH>=floor[i].offsetTop){
				for(let j=0;j<floor.length;j++){
					btn[j].style.background="#666";
				}
				btn[i].style.background=color[i];
			}
		}
	}
	for(let k=0;k<floor.length;k++){
		btn[k].onmouseover=function(){
			for(let i=0;i<floor.length;i++){
				if(sobj.scrollTop+0.5*CH>=floor[i].offsetTop){
					for(let j=0;j<floor.length;j++){
						btn[j].style.background="#666";
					}
					btn[i].style.background=color[i];
				}
			}
			btn[k].style.background=color[k];
		}
		btn[k].onmouseout=function(){
			btn[k].style.background="#666";
			for(let i=0;i<floor.length;i++){
				if(sobj.scrollTop+0.5*CH>=floor[i].offsetTop){
					for(let j=0;j<floor.length;j++){
						btn[j].style.background="#666";	
					}
					
					btn[i].style.background=color[i];
				}
			}	
		}
	}
	//返回顶部
	var dingbu=$('.dingbu')[0];
	dingbu.onclick=function(){
		var obj=document.documentElement.scrollTop==0?document.body:document.documentElement;
		animate(obj,{scrollTop:0},800)
	}

	//右固定栏
	var  item=$('.gudinga');
	var  che=$('.tequan');
	let yflag=true;
	for(var i=0;i<item.length;i++){
		item[i].index=i;
		item[i].onmouseover=function(){
			if(yflag){
				yflag=false;
                var num = this.index;
                che[num].style.display = "block";
                animate(che[num],{left:-80},function () {
                    yflag=true;
                });
			}

		}
		item[i].onmouseout=function(){
			var num = this.index;
			animate(che[num],{left:-120},function(){
				this.style.display = "none";
				yflag=true;
			})
			
		}
	}
	// 返回顶部
	var fanhuidingbu=$('.fandingbu')[0];
	fanhuidingbu.onclick=function(){
		var obj=document.documentElement.scrollTop==0?document.body:document.documentElement;
		animate(obj,{scrollTop:0},800)
	}



	//小图轮播
	let xiao=$('.smlunbo');
	let big=$('.lglunbo');
	let bigbox=$('.bigbox')[0];
	let box=$('.dijilunbo');
	let xiaoright=$('.xiaoright')[0];
	let xiaoleft=$('.xiaoleft')[0];
	// console.log(bigbox.firstElementChild);
	big[0].style.zIndex=200;


	for(let i=0;i<xiao.length;i++){
		xiao[i].onmouseover=function () {
			for (let j=0;j<big.length;j++){
				big[j].style.display="none";
			}
				big[i].style.display="block";
        }
	}

    xiaoright.onclick=function () {
        let first=bigbox.firstElementChild;
        let last=bigbox.lastElementChild;
        console.log(last)
        animate(first,{left:-490},500,function () {
			bigbox.appendChild(first);
			first.style.left="490px"
        });
        animate(last,{left:0},500)
		xiaoright.style.display="none";
		xiaoleft.style.display="block";


    }

    xiaoleft.onclick=function () {
        let first=bigbox.firstElementChild;
        let last=bigbox.lastElementChild;
        bigbox.insertBefore(last,first);
        last.style.left="-490px";
        animate(first,{left:490},500);
        animate(last,{left:0},500)
        xiaoleft.style.display="none";
        xiaoright.style.display="block";
    };


    //点击旋转部分
	let dianjibtn=$('.dijihuantu')[0];
	let dianjixiaoimg=$('.shangbiao');
	let xflag=true;
	// console.log(dianjibtn);
	dianjibtn.onclick=function () {
		if(xflag){
			xflag=false;
            for (let i=0;i<dianjixiaoimg.length;i++){
                dianjixiaoimg[i].style.transform="rotateY(0deg)"
                dianjixiaoimg[i].style.transform="rotateY(360deg)"
            }
		}else {
			xflag=true;
            for (let i=0;i<dianjixiaoimg.length;i++){
                dianjixiaoimg[i].style.transform="rotateY(360deg)"
                dianjixiaoimg[i].style.transform="rotateY(0deg)"
            }
		}

    }

    //字体轮播
	let zitibox=$('.koubeijingxuan');
	let zitibigbox=$('.zitibox');
	let zt;
	console.log(zitibigbox);
	
    zt=setInterval(tmove,2000);
    // function tmove() {
		// let one=zitibigbox[0].firstElementChild;
		// let two=zitibigbox[0].lastElementChild;
		// animate(one,{bottom:30},500,function () {
    //         zitibigbox[0].appendChild(one);
		// 	one.style.bottom="-30px"
    //     });
		// animate(two,{bottom:0},500)
    //
    // }

    function tmove() {
    	for(let i=0;i<zitibigbox.length;i++){
            let one=zitibigbox[i].firstElementChild;
            let two=zitibigbox[i].lastElementChild;
            animate(one,{bottom:30},500,function () {
                zitibigbox[i].appendChild(one);
                one.style.bottom="-30px"
            });
            animate(two,{bottom:0},500)
		}


    }



});


