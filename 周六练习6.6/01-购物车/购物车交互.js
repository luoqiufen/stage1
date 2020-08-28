/*
* @Author: Administrator
* @Date:   2020-06-06 10:53:05
* @Last Modified by:   Administrator
* @Last Modified time: 2020-06-06 16:33:10
*/

'use strict';
$(function(){

	// 点击'+',数量加1
	$('input[value="+"]').click(function(){
		var value = $(this).prev().val();
		value++;
		$(this).prev().val(value);

		sumPrice($(this).prev(this));//总价
		sumPriceAll();
	})
	// 点击'-',数量减1
	$('input[value="-"]').click(function(){
		var value = $(this).next().val();
		value--;
		$(this).next().val(value);

		sumPrice($(this).next());//总价
		sumPriceAll();
	})

	// 失去焦点做验证
	$('input[type=text]').blur(function(){
		sumPrice(this);
		sumPriceAll();
	})

	// 点击"全选",选项全部选中/全部取消
	$('.checkAll').click(function(){
		console.log($(this).prop('checked'))
		$('input[type=checkbox]').prop('checked',$(this).prop('checked'));
		sumPriceAll();
	})

	// 选项全部选中,全选选中,反之全选取消
	$('input[name=book]').click(function(){
		var book_len = $('input[name=book]').length;
		var check_len = $('input[name=book]:checked').length;
		if(book_len == check_len){
			$('.checkAll').prop('checked',true);
		}else{
			$('.checkAll').prop('checked',false);
		}
		sumPriceAll();
	})

	// 删除商品
	$('tr td:last-child a').click(function(){
		$(this).parents('tr').remove();
	})

	// 批量删除
	$('table tr:last-child a').click(function(){
		$('input[type=checkbox]:checked').parents('tr').remove();
	})

	// 单个商品总价
	function sumPrice(obj){
		var num = $(obj).val();
		var price = $(obj).parent().prev().find('span').text();
		if(num<=0){
			num = 1;
			$(obj).val(num);
		}
		$(obj).parent().next().children('span').text((price*num).toFixed(2));	
	}

	// 总价
	function sumPriceAll(){
		var sumPriceAll = 0;
		var len = $('input[name=book]:checked').length;
		var span = $('input[name=book]:checked').parents('tr').find('td:nth-child(6) span');
		for(var k=0;k<len;k++){

			var sumPrice = span.eq(k).text();
			sumPriceAll += Number(sumPrice);
		}
		
		$('.sumPriceAll').text('¥'+sumPriceAll.toFixed(2));
		$('.choose').text('已选择'+k+'件商品');
	}
	sumPriceAll();









	

	




})
