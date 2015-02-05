$(document).ready(function(){

	var fixed = false;
	$(document).scroll(function() {
    	if( $(this).scrollTop() > 810 ) {
 	    	if( !fixed ) {
   	    		fixed = true;
       			$('#scrollmenu').css({'display':'block'});
   			};
   		} else {
     		if( fixed ) {
       			fixed = false;
         		$('#scrollmenu').css({display:'none'});
     		};
   		};
	});

	$(document).on('mouseenter', '#icon', function(){
		$(this).animate({'width':'45px'}, 200);
	});
	$(document).on('mouseleave', '#icon', function(){
		$(this).animate({'width':'40px'}, 200);
	})

	$(document).on('click', '#scrollmenu', function(){
		if(!$('.slide-menu').hasClass('slid-out')){
			$('.slide-menu').addClass('slid-out').css({'display':'block'}).animate({'right': '65px'}, 400);
			$('#overlay').fadeIn();
			$('overlay').toggle();
		} else if($('.slide-menu').hasClass('slid-out')){
			$('.slide-menu').animate({'right': '-240px'}, 400).removeClass('slid-out');
			$('#overlay').toggle();
			$('#overlay').fadeOut();
		};
	});

	$(document).on('click', '#overlay', function(){
		$(this).toggle();
		if($('.slide-menu').hasClass('slid-out')){
			$('.slide-menu').animate({'right': '-240px'}, 400);
			$('.slide-menu').removeClass('slid-out');
		};
	});

	$('.slide-menu').on('click', '.close-menu', function(){
		$('.slide-menu').animate({'right': '-240px'}, 400);
		$('.slide-menu').removeClass('slid-out');
		$('#overlay').toggle();
		$('#overlay').fadeOut();
	});

	$(window).bind('scroll', function(){
		if( ($(window).scrollTop() < 800) && ($('.slide-menu').hasClass('slid-out')) ){
			$('#overlay').toggle();
			$('.slide-menu').animate({'right': '-240px'}, 200);
			$('.slide-menu').removeClass('slid-out');
		};
	});


});