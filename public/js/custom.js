$(document).ready(function(){
	 // Menu JS
    $('.sub-menu').before('<div class="child-trigger"><i class="bi bi-plus-lg"></i><i class="bi bi-dash-lg"></i></div>');
    $(".main-menu-box .child-trigger").click(function () {
        $(this).parent().siblings(".dropdown").find(".child-trigger").removeClass("child-open");
        $(this).parent().siblings(".dropdown").find(".sub-menu").slideUp();
        $(this).next(".sub-menu").slideToggle();
        $(this).next(".sub-menu").children(".dropdown").find(".sub-menu").slideUp();
        $(this).next(".sub-menu").children(".dropdown").find(".child-trigger").removeClass("child-open");
        $(this).toggleClass("child-open");
        return false
    });
	
	// Mobile Menu 
    $('.mobile_menu').on('click', function () {
        $('.remove_mobile_menu').removeClass('d-none');
        $('.mobile_menu').addClass('d-none');
        $('.main-menu-box').addClass('show');
        $('header').addClass('grey-bg');
		$('body').addClass('overflow-hidden');
    });

    $('.remove_mobile_menu').on('click', function () {
        $('.remove_mobile_menu').addClass('d-none');
        $('.mobile_menu').removeClass('d-none');
        $('.main-menu-box').removeClass('show');
        $('header').removeClass('grey-bg');
		$('body').removeClass('overflow-hidden');
    });
	
    $('body').on('click', function (e) {
        $('.mobile_menu').each(function () {
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.main-menu-box').has(e.target).length === 0) {
                $('.remove_mobile_menu').addClass('d-none');
                $('.mobile_menu').removeClass('d-none');
                $('.main-menu-box').removeClass('show');
                $('header').removeClass('grey-bg');
				$('body').removeClass('overflow-hidden');
            }
        });
		
		$('.header-right-lnk .nav-item.dropdown > a.nav-link').each(function () {
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.header-right-lnk').has(e.target).length === 0) {
                $(this).parent().removeClass('show');
            }
        });
    });
	

	$('.search_link').on('click',function(){
		$('.search-box').addClass('show');
		$('body').addClass('search-overlay');	
		$('.header-right-lnk .nav-item.dropdown').removeClass('show');
	});
	
	$('.remove-search').on('click',function(){
		$('.search-box').removeClass('show');
		$('body').removeClass('search-overlay')		
	});
	
	// Top User Dropdown JS	
	$('.header-right-lnk .nav-item.dropdown > a.nav-link').on('click',function(){
		$(this).parent().toggleClass('show');
	});
	
	$('.sub-menu .row').masonry({
		itemSelector: '.col-12.col-md-3',
		columnWidth: 0
	});
	
	$(window).on('load',function(){
		$('.sub-menu .row').masonry({
			itemSelector: '.col-12.col-md-3',
			columnWidth: 0
		});
	});
	
	// Top Notification JS
	$('#notification-inner-div').owlCarousel({
        loop: false,
        nav: true,
        dots: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 250,
        autoplayHoverPause: true,
		navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>']
    });
	
	// Home Slider JS
	$('#banner-inner-div').owlCarousel({
        loop: false,
        nav: true,
        dots: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
		navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>']
    });
	
	// Product Slider JS
	$('#product-slider').owlCarousel({
        loop: false,
        nav: true,
        dots: false,
        items: 5,
		margin:24,
		responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
			650:{
                items:2
            },
            1200:{
                items:4
            },
			1400:{
                items:5
            }
        },
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>']
    });
	
	// Video JS
	$('a.video-lnk').on('click', function(){
		$('body').addClass('overlay-bg');
		$('.video-popup-box').removeClass('d-none');
		$('.video-area').addClass('play-video-on');
		$("#pop-video-1")[0].src = $('.pop-video-url-1').val()+"?autoplay=1&rel=0&showinfo=0";
	});
		
	$('a.vclose-clk').on('click', function(){
		$('.video-popup-box').addClass('d-none');
		$('.video-area').removeClass('play-video-on');
		$('.video-area iframe').removeAttr('src');
		$('body').removeClass('overlay-bg');
		$("#pop-video-1").removeAttr('src');
	});
	
	// Product QTY
	$('.btn-number').click(function(e){
		e.preventDefault();
		
		fieldName = $(this).attr('data-field');
		type      = $(this).attr('data-type');
		var input = $("input[name='"+fieldName+"']");
		var currentVal = parseInt(input.val());
		if (!isNaN(currentVal)) {
			if(type == 'minus') {
				
				if(currentVal > input.attr('min')) {
					input.val(currentVal - 1).change();
				} 
				if(parseInt(input.val()) == input.attr('min')) {
					$(this).attr('disabled', true);
				}

			} else if(type == 'plus') {

				if(currentVal < input.attr('max')) {
					input.val(currentVal + 1).change();
				}
				if(parseInt(input.val()) == input.attr('max')) {
					$(this).attr('disabled', true);
				}

			}
		} else {
			input.val(0);
		}
	});
	$('.input-number').focusin(function(){
	   $(this).data('oldValue', $(this).val());
	});
	$('.input-number').change(function() {		
		minValue =  parseInt($(this).attr('min'));
		maxValue =  parseInt($(this).attr('max'));
		valueCurrent = parseInt($(this).val());
		
		name = $(this).attr('name');
		if(valueCurrent >= minValue) {
			$(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
		} else {
			alert('Sorry, the minimum value was reached');
			$(this).val($(this).data('oldValue'));
		}
		if(valueCurrent <= maxValue) {
			$(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
		} else {
			alert('Sorry, the maximum value was reached');
			$(this).val($(this).data('oldValue'));
		}
		
		
	});
	$(".input-number").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
	
	// Product Filter JS
	$('a.filter-btn').on('click',function(){
		$('.pl-left-box, .pl-right-box, .pl-right-inner-box').addClass('expand');
		$('.filter-close').addClass('show');	
	});

	$('.filter-close').on('click',function(){
		$('.pl-left-box, .pl-right-box, .pl-right-inner-box').removeClass('expand');
		$('.filter-close').removeClass('show');
	});	
	
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1) {
			$('header').addClass("sticky");
		} else {
			$('header').removeClass("sticky");
		}
	});

	//Tooltip
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl)
	});
	

});	

