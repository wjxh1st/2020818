// 获取包括轮播图的盒子
var BoxLbt = document.querySelector(".Box-lpt");

// 获取轮播图
var BoxLbtLi = document.querySelectorAll(".Box-lpt-img");
console.log(BoxLbtLi)


// 当前图片的位置
var i = 0;
var x = 6;



// 把函数体放进来
setInterval(RightFn,3000);

// 函数,需要调用他
function RightFn(){
	i++;
	// 图片透明度设为0
	for(var o = 0; o < BoxLbtLi.length; o++){
		BoxLbtLi[o].style.opacity = "0"
	}
	// 如果超出图片数量就返回1开始
	if(i > BoxLbtLi.length -1){
		i = 0;
	}
	// 当前的图片透明度为1
	BoxLbtLi[i].style.opacity = "1";
}


// 调用函数
function LeftFn( ){
	x++;
	// 图片透明度设为0
	for(var c = 0; c < BoxLbtLi.length; c++){
		BoxLbtLi[c].style.opacity = "0"
	}
	
	// 如果超出图片数量就返回1开始
	if(x > BoxLbtLi.length -1){
		x = 0;
	}
	
	// 当前的图片透明度为1
	BoxLbtLi[x].style.opacity = "1";
}