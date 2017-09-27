window.onload=function(){
var myswiper=new Swiper(".swiper-container",{
            direction: 'vertical',
             onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
                swiperAnimateCache(swiper); //隐藏动画元素 
                swiperAnimate(swiper); //初始化完成开始动画
              }, 
              onSlideChangeEnd: function(swiper){ 
                swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
              // console.log(swiper.activeIndex);
              if(swiper.activeIndex==3){
              	$(".line").css("animation","linechange 5s both");
              	}else{
              	$(".line").css("animation","0");
              	
              }
              },
               
            });
            


};
$(function(){
	var control=true;
	$(".music").click(function() {
		if(control){
			$(".music").css("animation","0");
			control=false;
			$("#audiobtn")[0].pause();
		}
		else{
			$(".music").css("animation","music 1s linear infinite");
			control=true;
			$("#audiobtn")[0].play();
		}
		
	});



});