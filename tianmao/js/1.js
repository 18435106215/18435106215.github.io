// 选项卡 
// // btn选项卡按钮 con选项卡内容
// 	function xvanxiangka(btn,con){
// 		for(let i=0;i<btn.length;i++){   //for里let不能改成var
// 			btn[i].onmouseover=function(){
// 			con[i].style.display="block";
// 		}
// 		btn[i].onmouseout=function(){
// 			con[i].style.display="none";
// 		}
// 	}	
// 	}


// // 遮罩
// // btn底下的块，con遮罩的块
// 	function zhe(btn,con){
// 	for(let i=0;i<btn.length;i++){
// 		btn[i].onmouseover=function(){
// 		con[i].style.display="block";
// 			}
// 		btn[i].onmouseout=function(){
// 			con[i].style.display="none";
// 			}
// 		}
// 	}


// // 函数简化
// 	function $(select,obj=document){
// 		if(typeof select=="function"){
// 			window.onload=function(){
// 				select();//回调函数
// 			}
// 		}
// 		if(typeof select=="string"){
// 			return obj.querySelectorAll(select);
// 		}
// 	}
	// $(".box")
	// $(function(){})


//层级轮播
	// pic轮播图填 字符串的选择器 
	// bigbannerBox通屏banner盒子 字符串的选择器
	// lunbodian轮播点 字符串选择器
	// colorArr通屏banner颜色 数组 ["red","blue"]
	// tuBigZ高层级
	// liactivebgColor轮播点获得焦点时背景颜色
	// lunboTime时间间隔
	// tuZ普通层级
	// lisColor轮播点普通颜色
	// type 不传值时默认层级轮播 type==1时，透明度轮播
	function Zlunbo(pic,bigbannerBox,lunbodian,colorArr,tuBigZ,liactivebgColor,lunboTime,tuZ,lisColor,tupiangeshu,type=0){
		if(type==0){
		const tupian=$(pic);
		const banner=$(bigbannerBox)[0];
		const li=$(lunbodian);
		const color=colorArr;
		tupian[0].style.zIndex=tuBigZ;
		li[0].style.background=liactivebgColor;
		banner.style.background=color[0];
		var num=0;
		var t=setInterval(move,lunboTime);
		banner.onmouseover=function(){
			clearInterval(t);
		}
		banner.onmouseout=function(){
			t=setInterval(move,lunboTime);
		}
		
			for(let j=0;j<li.length;j++){
			li[j].onmouseover=function(){
			for(let i=0;i<tupian.length;i++){
				tupian[i].style.zIndex=tuZ;
				li[i].style.background=lisColor;
			}
			tupian[j].style.zIndex=tuBigZ;
			li[j].style.background=liactivebgColor;
			banner.style.background=color[j];
			num=j;
			}
		}
		function move(){
			num++;
			if(num>tupiangeshu){
				num=0;
			}
			for(let i=0;i<tupian.length;i++){
				tupian[i].style.zIndex=tuZ;
				li[i].style.background=lisColor;
			}
			tupian[num].style.zIndex=tuBigZ;
			li[num].style.background=liactivebgColor;
			banner.style.background=color[num];
		}
		}
		


		else{
			// pic轮播图填 字符串的选择器 
		// bigbannerBox通屏banner盒子 字符串的选择器
		// lunbodian轮播点 字符串选择器
		// colorArr通屏banner颜色 数组 ["red","blue"]
		// tuBigZ不透明
		// liactivebgColor轮播点获得焦点时背景颜色
		// lunboTime时间间隔
		// tuZ透明
		// lisColor轮播点普通颜色
		// type 不传值时默认层级轮播 type==1时，透明度轮播
			const tupian=$(pic);
			const banner=$(bigbannerBox)[0];
			const li=$(lunbodian);
			const color=colorArr;
			tupian[0].style.zIndex=tuBigZ;
			li[0].style.background=liactivebgColor;
			banner.style.background=color[0];
			var num=0;
			var t=setInterval(move,lunboTime);
			banner.onmouseover=function(){
				clearInterval(t);
			}
			banner.onmouseout=function(){
				t=setInterval(move,lunboTime);
			}
			for(let j=0;j<li.length;j++){
				li[j].onmouseover=function(){
				for(let i=0;i<tupian.length;i++){
					tupian[i].style.opacity=tuZ;
					li[i].style.background="orange";

				}
				tupian[j].style.opacity=tuBigZ;
				animate(tupian[num],{opacity:0},500);
				li[j].style.background="white";
				banner.style.background=color[j];
				num=j;
				}
			}
			function move(){
				num++;
				if(num>tupiangeshu){
					num=0;
				}
				console.log(num);
				for(let i=0;i<tupian.length;i++){
					tupian[i].style.opacity=tuZ;
					li[i].style.background="orange";
				}
				tupian[num].style.opacity=tuBigZ;
				animate(tupian[num],{opacity:0},500);
				li[num].style.background="white";
				banner.style.background=color[num];

			}
		}
	}


	// 左右轮播
	// lunbotupian 轮播图
	// lunbodakuai 放轮播块的大盒子
	// lunbokuai 放轮播图的轮播快
	// colorArr 放轮播块的大盒子的背景颜色集合
	// lunbodian 轮播点
	// zuojian 左按钮
	// youjian 右按钮
	// lunboTime 轮播时间
	// activeClass 给第一个轮播点加上的类名，定义轮播点选中的颜色
	function zuolunbo(lunbotupian,lunbodakuai,lunbokuai,colorArr,lunbodian,zuojian,youjian,lunboTime,activeClass){
		const tu=document.querySelectorAll(lunbotupian);
		const banner=document.querySelector(lunbodakuai);
		const img=document.querySelector(lunbokuai);
		const color=colorArr;
		const lis=document.querySelectorAll(lunbodian);
		const imgw=parseInt(window.getComputedStyle(img,null).width);
		const zuobtn=document.querySelector(zuojian);
		const youbtn=document.querySelector(youjian);
		for(i=0;i<tu.length;i++){
			tu[i].style.left=imgw+"px";
		}
		tu[0].style.left=0;
		var now=0;
		var next=1;
		var t=setInterval(move,lunboTime);
		function move(type="r"){
			flag=false;
			if(type=="r"){
				animate(tu[now],{left:-imgw},500);
				tu[next].style.left=imgw+"px";
				animate(tu[next],{left:0},500,function(){
					flag=true;
					now=next;
					next++;			
					if(next>tu.length-1){
					next=0;
					}
				})
			}else if(type=="l"){
				animate(tu[now],{left:imgw},500);
				tu[next].style.left=-imgw+"px";
				animate(tu[next],{left:0},500,function(){
					flag=true;
					now=next;
					next--;			
					if(next<0){
					next=tu.length-1;
					}
				})
			}
			
			lis[now].classList.remove(activeClass);
			lis[next].classList.add(activeClass);
		}
		banner.onmouseover=function(){
			clearInterval(t);
		}
		banner.onmouseout=function(){
			t=setInterval(move,lunboTime);
		}
		zuobtn.onclick=function(){
			if(flag){
				move("l");	
			}
		}
		youbtn.onclick=function(){
			if(flag){
				move("r");	
			}
		}
		for(let i=0;i<tu.length;i++){
			lis[i].onmouseover=function(){
				if(flag){
					if(i<now){
						next=i;
						move("l");
					}else if(i>now){
						next=i;
						move("r");
					}
				}
			}
		}
	}



