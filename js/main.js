$(document).ready(function(){
	$(window).load(function(){

		$('.main .text .btn a').on('click',function(){

			ID = $(this).attr('href');
			$("html, body").stop().animate({ scrollTop: $(ID).offset().top-90 }, 700, function(){
				window.location.hash = ID;
			});

			return false;
		});

		$('.main .illustration').fadeIn(function(){

			$('.main .text').delay(300).animate({
				"opacity":1,
				"right":"0px"
			});		

			setInterval(function(){

				$('.main .illustration .girls img.i').each(function(index){

					var number1 = -20 + Math.floor(Math.random() * 20);
					var number2 = -10 + Math.floor(Math.random() * 10);

					$(this).delay(index*200).fadeIn(100);

					$(this).animate({
						"marginLeft":number2,
						"marginRight":number2,
						"marginTop":number1,
						"marginBottom":number1,
					}, 1500, 'linear');

				});

			}, 1500);

			function ipadlight(){
				$('.main .illustration .girls img.light').fadeTo(600, 1);
				$('.main .illustration .girls img.light').fadeTo(600, 0.7, ipadlight);
			}

			ipadlight();

			$('.partners ul li').each(function(index){
				$(this).delay(index*100).fadeIn();
			});

			$('.description h3:eq(0), .description p:eq(0), .description .central').animate({
				"opacity":1,
				"left":"0px",
				"right":"0px",
				"top":"0px",
				"bottom":"0px",				
			});

		});

		// scroll to id

		$('body').on('click', 'header nav ul li a.scroller, .menu-mobile ul li a', function(){

			link = $(this).attr("href");

			$('html,body').animate({
				scrollTop: $(link).offset().top-90},
			'slow');

		});

		// menu mobile

		$('body').on('click', '.menu-mobile ul li a', function(){
			$('.menu-mobile ul').slideUp();
		});

		$('body').on('click', '.menu-mobile .exibir-ocultar', function(){
			$(this).next().slideToggle();
		});	

		menu = $('header nav').html();
		$('.menu-mobile .exibir-ocultar').after(menu);

		$(document).on('click', '.menu-mobile > ul li.subitens a', function(){
			$(this).next().slideToggle();

			return false;
		});

		function scrolldown(){
			$('.main .bg .scrolldown').fadeIn(600);
			$('.main .bg .scrolldown').fadeOut(600, scrolldown);
		}

		scrolldown();

		$(window).scroll(function(){

			windowHeight  = $(window).height();
			halfWindowHeight  = $(window).height()/1.1;
			scrollTop     = $(window).scrollTop();

			if(scrollTop > 10){
				$('header').fadeIn(100);
			} else {
				$('header').fadeOut(100);
			}

			$('.description *').each(function(index){

				elementOffset = $(this).offset().top
				distance      = (elementOffset - scrollTop);

				if(distance < halfWindowHeight){
					$(this).delay(index*100).animate({
						"opacity":1,
						"left":"0px",
						"right":"0px",
						"top":"0px",
						"bottom":"0px",
					});
				}
			});	

			$('.instructors *').each(function(index){

				elementOffset = $(this).offset().top
				distance      = (elementOffset - scrollTop);

				if(distance < halfWindowHeight){
					$(this).delay(index*100).animate({
						"opacity":1,
						"left":"0px",
						"right":"0px",
						"top":"0px",
						"bottom":"0px",
					});
				}
			});	

		});

	});
});