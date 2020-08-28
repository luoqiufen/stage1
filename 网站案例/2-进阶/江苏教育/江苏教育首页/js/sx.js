/*
* @Author: Administrator
* @Date:   2017-03-29 09:43:14
* @Last Modified by:   CD
* @Last Modified time: 2017-04-03 12:12:03
*/

$(function(){
	$(".nav a").click(function(event) {
		$(".nav a").removeClass('current');
		$(this).addClass('current')
	});

/*----------------------------------------------*/
	function run(){
		$('#Notice ul').animate({top:-20},2000,function(){
			$("#Notice ul").css({top:0});
			$("#Notice li:first").insertAfter($("#Notice li:last"));})}
		sde = setInterval(run,1500);
/*----------------------------------------------*/
	var count = $("#img_box .imgs img").length;
	var num = 1;
	var width = $("#img_box .imgs img").width();
	$(".btns .next").click(function(event) {
		if(num ==$("#img_box .imgs img").length){
			$("#img_box .imgs").animate({"margin-left":0});
			num = 1;
		}else{
			$("#img_box .imgs").animate({"margin-left":"-="+width});
			num++;
	}	
		D_points(num-1);	
	});
	function D_points(index){
		$(".points span").eq(index).addClass('po1').siblings('span').removeClass('po1');
	}
	$(".btns .prev").click(function(event) {
	if(!$("#img_box .imgs").is(':animated')) {
		if(num == 1){
			$("#img_box .imgs").animate({"margin-left":"-"+width*(count-1)}); 
			 num = count;
		}else{
			$("#img_box .imgs").animate({"margin-left":"+="+width});
				num--;
		}
		D_points(num-1);
		}	
	});

	$(".points span").mouseover(function(event) {
		/* Act on the event */
		var index = $(this).index()
		if(!$("#img_box .imgs").is(':animated')) {
			$("#img_box .imgs").animate({"margin-left":"-"+width*index});
			num = index+1;
			D_points(index);
		}
	});

	if(!$("#img_box .imgs").is(':animated')) {
		var timer = setInterval("$('.btns .next').click()",2000);
		$("#img_box .Dimgs").mouseover(function(event) {
		/* Act on the event */
			clearInterval(timer);
		}).mouseout(function(event) {
		/* Act on the event */
			timer = setInterval("$('.btns .next').click()",2000);
		});
	 }
/*--------------------------------------------------------------------*/
	$(".txt_df ul").hide();
	$(".txt_df ul").eq(0).show();
	$(".txt_df h3").click(function(event) {
		/* Act on the event */
		$(".txt_df h3").removeClass('h_d1');
		$(this).addClass('h_d1');
		$(".txt_df ul").hide();
		$(".txt_df ul").eq($(this).index()).show();
	});

	$(".txt_da ul").hide();
	$(".txt_da ul").eq(0).show();
	$(".txt_da h3").click(function(event) {
		/* Act on the event */
		$(".txt_da h3").removeClass('h_d1');
		$(this).addClass('h_d1');
		$(".txt_da ul").hide();
		$(".txt_da ul").eq($(this).index()).show();
	});
/*-----------------------------------------------------------*/
		function getData(){
			var date_obj = new Date();
	        var year = date_obj.getFullYear();
	        var month = date_obj.getMonth()+1;
	        var day = date_obj.getDate();
	        var txt = year+"年"+month+"月"+day+"日";
	       	var time = document.getElementById("data");			
	       	time.innerHTML = txt;
	      }
	      getData();


/*-----------------------------------------------------------*/
	$('.text_li ul').hide();
	$(".text_li ul").eq(0).show();
	$(" .dot span").mouseover(function(event) {
		/* Act on the event */
		$(".dot span").removeClass('dot_1')
		$(this).addClass('dot_1')
		$('.text_li ul').hide();
		$(".text_li ul").eq($(this).index()).show();

	});
/*---------------------------------------------------------*/
		var sele = document.getElementById('sele');	
		var selbg = document.getElementsByClassName("selbg");
		selbg.onclick = function(){
			selbg.onclick()
		}

	})



