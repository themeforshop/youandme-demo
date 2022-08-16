//var isMobile = /iPhone|iPod|iPad|Phone|Mobile|Android|hpwos/i.test(navigator.userAgent);
//var isPhone = /iPhone|iPod|Phone|Android/i.test(navigator.userAgent);
/* SHARED VARS */
var touch = false;

// handles Animate
function dataAnimate() {
    $('[data-animate]').each(function() {

        var $toAnimateElement = $(this);

        var toAnimateDelay = $(this).attr('data-delay');

        var toAnimateDelayTime = 0;

        if (toAnimateDelay) {
            toAnimateDelayTime = Number(toAnimateDelay);
        } else {
            toAnimateDelayTime = 200;
        }

        if (!$toAnimateElement.hasClass('animated')) {

            $toAnimateElement.addClass('not-animated');

            var elementAnimation = $toAnimateElement.attr('data-animate');

            $toAnimateElement.appear(function() {

                setTimeout(function() {
                    $toAnimateElement.removeClass('not-animated').addClass(elementAnimation + ' animated');
                }, toAnimateDelayTime);

            }, {
                accX: 0,
                accY: -80
            }, 'easeInCubic');

        }

    });
}

function sliderTheme(){
    $('[data-slider-theme]').each(function() {
        $(this).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            focusOnSelect: true,
            responsive: [
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
        }); 
    });
}

function addTopaffix(scr){
	if($(window).innerWidth() >= 1200 ){
		if(scr < 35 ){
			if($('.page-header').hasClass('affix-top')){
				$('.page-header').removeClass('affix affix-top').removeClass('fadeInDown animated');
			}
		}
		else{
			if(!$('.page-header').hasClass('affix-top')){
				$('.page-header').addClass('affix affix-top').addClass('fadeInDown animated').removeClass('fadeInUp-affix');
			}
		}
	}
	else {
		$('.page-header').attr('class','page-header');
	}
}
function addBottomaffix(scr){
	if($(window).innerWidth() >= 1200 ){
		if(scr > 0 && scr < 150 ){
			if(!$('.page-header').hasClass('affix-top')){
				$('.page-header').addClass('affix affix-top').addClass('fadeInDown animated').removeClass('fadeInUp-affix');
			}
		}
		else{
			if($('.page-header').hasClass('affix-top')){
				$('.page-header').removeClass('affix-top').removeClass('fadeInDown animated').addClass('fadeInUp-affix animated');
			}
		}
	}
	else {
		$('.page-header').attr('class','page-header');
	}
}
function animateclick(){
	$(".menu-demo").click(function() {
		$('html, body').animate({
				scrollTop: $(".demoTheme-layout").offset().top 
			}, 1000);
		return false;
		});
		$(".menu-features").click(function() {
		$('html, body').animate({
				scrollTop: $(".featuresTheme-layout").offset().top 
			}, 1000);
		return false;
	});	
}

jQuery(document).ready(function($) {
    /* DETECT PLATFORM */
    $.support.touch = 'ontouchend' in document;

    if ($.support.touch) {
        touch = true;
        $('body').addClass('touch');
    } else {
        $('body').addClass('notouch');
    }

    /* Handle Animate */
	if (($(window).innerWidth() >= 1200) && (touch == false)) {
        dataAnimate();
    } else {
        $('.not-animated').css("opacity", "1");
    }
	animateclick();
	sliderTheme();
});
var checks = 0;
jQuery(document).scroll(function() {
	var scrollTop = jQuery(this).scrollTop();
	if(scrollTop > checks){
		addBottomaffix(scrollTop);
	}
	else if(scrollTop < checks){
		addTopaffix(scrollTop);
	}
	checks = scrollTop;
});
jQuery(document).resize(function() {
	var scrollTop = jQuery(this).scrollTop();
	if(scrollTop > checks){
		addBottomaffix(scrollTop);
	}
	else if(scrollTop < checks){
		addTopaffix(scrollTop);
	}
	checks = scrollTop;
});
