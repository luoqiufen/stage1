$(function(){
	// alert('ready go!');
	var num = 1;//当前图片的编号
	var count = $(".banner_box .imgs img").length;//图片的数目
	var width = $(".banner_box .imgs img").width();//图片的宽度
	var timer = null;//计时器

	document.title = num;
	points(0);
	startMove();


	//右按钮 点击往前移一张图 如果是最后一张:切到第一张图
	$(".right_btn").click(function(){
		if(!$(".banner_box .imgs").is(":animated")){
		if(num == count){
			$(".banner_box .imgs").animate({"margin-left":"0"});
			num = 1;
		}else{
			$(".banner_box .imgs").animate({"margin-left":"-="+width});
			num++;
		}
		document.title = num;
		points(num-1);

		}

	})
	// 左按钮 点击往后移一张图 如果是第一张，切到最后一张图
	$(".left_btn").click(function(){
		if(!$(".banner_box .imgs").is(":animated")){
		if(num == 1){
			$(".banner_box .imgs").animate({"margin-left":"-"+width*(count-1)},'slow');
			num = 4;
		}else{
			$(".banner_box .imgs").animate({"margin-left":"+="+width},'slow');
			num--;
		}
		document.title = num;
		points(num-1);
		}

	})
	//鼠标经过原点显示相应的图
	$(".banner_box .points span").mouseover(function(event) {
		/* Act on the event *///同右箭头效果
		if(!$(".banner_box .imgs").is(":animated")){

		var index = $(this).index();
		// alert("图"+num+"点"+index);
		num = index+1;
		$(".banner_box .imgs").animate({"margin-left":"-"+width*index},'slow')
		// if(num == count){
		// 	$(".banner_box .imgs").animate({"margin-left":"0"});
		// 	num = 1;
		// }else{
		// 	$(".banner_box .imgs").animate({"margin-left":"-"+width*index});
		// 	num++;
		// }
		document.title = num;
		points(index);
		}
	
	});

	//自动轮播
	function startMove(){
		clearTimeout(timer);
		if(!$(".banner_box .imgs").is(":animated")){
		if(num == count){
			$(".banner_box .imgs").animate({"margin-left":"0"},'slow');
			num = 1;
		}else{
			$(".banner_box .imgs").animate({"margin-left":"-="+width},'slow');
			num++;
		}
		document.title = num;
		points(num-1);
		}
		timer = setInterval(startMove,3000);
	}
	//进入盒子停止轮播 移出继续轮播
	$(".banner_box").mouseover(function(){
		clearTimeout(timer);

	}).mouseout(function(event) {
		/* Act on the event */
		timer = setInterval(startMove,3000);
	});
	
	

	//原点效果
	function points(index){
		//alert(index);
		$(".banner_box .points span").eq(index).addClass('current').siblings().removeClass('current')
	}
	







})