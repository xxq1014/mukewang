// 轮播图
var lunBtnLeft = document.querySelector(".lunBtnLeft");
var lunBtnRight = document.querySelector(".lunBtnRight");
var lunbo = document.querySelectorAll(".lunbo li");
var quanquan = document.querySelectorAll(".quanquan li");
var index = 0;
var time = null;
for(var i=0;i<quanquan.length;i++){
	quanquan[i].index=i;
	quanquan[i].onclick=function(){
		for(var i=0;i<quanquan.length;i++){
			quanquan[i].className="";
			lunbo[i].className="";
		}
		index = this.index;
		quanquan[this.index].className="active";
		lunbo[this.index].className="active";
	}
	time = clearInterval(time);
}
lunBtnLeft.onclick=function(){
	shangYiGe();
}
function shangYiGe(){
	index--;
	if(index<0){
		index=quanquan.length-1;
	}
	for(var i=0;i<quanquan.length;i++){
		quanquan[i].className="";
		lunbo[i].className="";
	}
	quanquan[index].className="active";
	lunbo[index].className="active";
}
lunBtnRight.onclick=function(){
	xiaYiGe();
}
function xiaYiGe(){
	index++;
	if(index>1){
		index=0;
	}
	for(var i=0;i<quanquan.length;i++){
		quanquan[i].className="";
		lunbo[i].className="";
	}
	quanquan[index].className="active";
	lunbo[index].className="active";
}
time = setInterval(xiaYiGe,5000);
// 侧边显示隐藏
var yinying = document.querySelectorAll(".yinying");
var yincang = document.querySelectorAll(".yinCangTu");
for(var i=0;i<yinying.length;i++){
	yinying[i].index=i;
	yinying[i].onmouseover=function(){
		for(var i=0;i<yinying.length;i++){
			yincang[i].style.display="none";
		}
		yincang[this.index].style.display="block";
	}
	yinying[i].onmouseout=function(){
		for(var i=0;i<yinying.length;i++){
			yincang[i].style.display="none";
		}
	}
}
// 底部二维码
var erwei = document.querySelector(".erWeiMa");
var tuBiao3 = document.querySelector(".tuBiao3");
tuBiao3.onmouseover=function(){
	erwei.style.display="block";
}
tuBiao3.onmouseout=function(){
	erwei.style.display="none";
}
// 头部二维码
var img = document.querySelector(".muKeWang");
var shouji = document.querySelectorAll(".headerRight1 li");
shouji[0].onmouseover=function(){
	img.style.display="block";
}
shouji[0].onmouseout=function(){
	img.style.display="none";
}






















