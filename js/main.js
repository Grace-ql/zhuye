(function($) {

	// "use strict";
   $('.home').on('click',function(){
	   var id =  $(this).attr('class');
	   	id = id.split('-');
	   	$('a.active').removeClass('active');
	   	$(this).addClass('active');
	   	$("#menu-container .content").slideUp('slow');
	   	$("#menu-container #menu-"+id[1]).slideDown('slow');
	   	$("#menu-container .homepage").slideUp('slow');
	   	return false;
	})
	$("a.home").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .homepage").slideDown('slow');
		$(".logo-top-margin").animate({marginLeft:'45%'}, "slow");
		$(".logo-top-margin").animate({marginTop:'120px'}, "slow");
		return false;
	});
	$('.about').on('click',function () {
		$('#menu-1').css('display','none');
		$("#menu-container .content").slideUp('liner');
		$("#menu-container .about-section").slideDown('liner');
		$(".logo-top-margin").animate({marginTop:'0'}, "slow");
		$(".logo-top-margin").animate({marginLeft:'0'}, "slow");
		return false;
	})
	$('.project').on('click',function () {
		$('#menu-1').css('display','none');
		$("#menu-container .content").slideUp('liner');
		$("#menu-container .gallery-section").slideDown('liner');
		$(".logo-top-margin").animate({marginTop:'0'}, "slow");
		$(".logo-top-margin").animate({marginLeft:'0'}, "slow");
		return false;
	})
	$('.contact').on('click',function () {
		$('#menu-1').css('display','none');
		$("#menu-container .content").fadeOut();
		$("#menu-container .contact-section").slideDown('slow');
		$(".logo-top-margin").animate({marginTop:'0'}, "slow");
		$(".logo-top-margin").animate({marginLeft:'0'}, "slow");
		return false;
	})
  	$(".main-menu a").click(function(){
		var id =  $(this).attr('class');
		id = id.split('-');
		$('a.active').removeClass('active');
		$(this).addClass('active');
		$("#menu-container .content").slideUp('slow');
		$("#menu-container #menu-"+id[1]).slideDown('slow');
		$("#menu-container .homepage").slideUp('slow');
		return false;
	});


	$(".main-menu a.homebutton").click(function(){
		$(this).toggleClass('color-red')
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .homepage").slideDown('slow');
		$(".logo-top-margin").animate({marginLeft:'45%'}, "slow");
		$(".logo-top-margin").animate({marginTop:'120px'}, "slow");
		return false;
	});

	$(".main-menu a.aboutbutton").click(function(){
		$(this).toggleClass('color-red')
		$("#menu-container .content").slideUp('liner');
		$("#menu-container .about-section").slideDown('liner');
		$(".logo-top-margin").animate({marginTop:'0'}, "slow");
		$(".logo-top-margin").animate({marginLeft:'0'}, "slow");
		return false;
	});

	$(".main-menu a.projectbutton").click(function(){
		$(this).toggleClass('color-red')
		$("#menu-container .content").slideUp('liner');
		$("#menu-container .gallery-section").slideDown('liner');
		$(".logo-top-margin").animate({marginTop:'0'}, "slow");
		$(".logo-top-margin").animate({marginLeft:'0'}, "slow");
		return false;
	});

	$(".main-menu a.contactbutton").click(function(){
		$(this).toggleClass('color-red')
		$("#menu-container .content").fadeOut();
		$("#menu-container .contact-section").slideDown('slow');
		$(".logo-top-margin").animate({marginTop:'0'}, "slow");
		$(".logo-top-margin").animate({marginLeft:'0'}, "slow");
		return false;
	});

	$('.toggle-menu').click(function(){
        $('.show-menu').stop(true,true).slideToggle();
        return false;
    });

    $('.show-menu a').click(function() {
    	$('.show-menu').fadeOut('slow');
    });

    $('.project-pages a').on('click',function(){
    	$('.box-content .row2').css('display','none');
    })
	// $(document).ready(function() {
	// 	$(".wheel").owlCarousel({
	// 		items : 1,
	// 		lazyLoad : true,
	// 		autoPlay : true,
	// 		navigation : false,
	// 		navigationText : false,
	// 		pagination : true,
	// 	});
	// });
    $('.project-item').on('mouseenter',function(){
		$('.project-hover h4').removeClass('spanleave').addClass('span');
	})
	$('.project-item').on('mouseleave',function(){
		$('.project-hover h4').removeClass('span').addClass('spanleave');
	})
	$('.site-footer p').on('mouseenter',function(){
		$('.site-footer .p-hover').css('opacity',1);
		$('.site-footer .p-hover').addClass('left-you');
	})
	$('.site-footer p').on('mouseleave',function(){
		$('.site-footer .p-hover').css('opacity',0);
		$('.site-footer .p-hover').removeClass('left-you');
	})
})(jQuery);