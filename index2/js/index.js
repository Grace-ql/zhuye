  $(".lunbo").lunbo();
	$(function(){
		console.log($(document).jquery);
	})


$(function(){
	$("#fullpage").fullpage({
		paddingTop:'50px',
		fixedElements:'.nav,.jiantou',
	});
	$('.jiantou').on('click',function(){
		$.fn.fullpage.moveSectionDown();
	})
})