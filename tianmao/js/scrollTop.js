//获取scrollTop
	function scrollobj(){
		let body=document.body;
		let html=document.documentElement;
		body.scrollTop=1;
		html.scrollTop=1;
		let obj;
		if(body.scrollTop==0){
			obj=html;
		}else{
			obj=body;
		}
		return obj
	}