
$(window).scroll(function() {
if ($(this).scrollTop() > 1){
$('header').addClass("sticky");
}
else{
$('header').removeClass("sticky");
}
});

$(function() { var logo = $(".logo__link"); $(window).scroll(function() {
var scroll = $(window).scrollTop();

    if (scroll >= 1) {
      if(!logo.hasClass("sml-logo")) {
        logo.hide();
        logo.removeClass('logo__link').addClass("sml-logo").fadeIn( "slow");
      }
    } else {
      if(!logo.hasClass("logo__link")) {
        logo.hide();
        logo.removeClass("sml-logo").addClass('logo__link').fadeIn( "slow");
      }
    }

});
});


$('.slider__inner').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

			
// 	$('.slider__inner').slick({
// 	  slidesToShow: 5,
// 	  slidesToScroll: 5,
// 	  responsive: [
//     {
//       breakpoint: 1199,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 4,
//         dots: true,
//         arrows: false
//       }
//     },
//     {
//       breakpoint: 991,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         dots: true,
//         arrows: false
//       }
//     },
//     {
//       breakpoint: 767,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         dots: true,
//         arrows: false
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         dots: true,
//         arrows: false
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });
	
	

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}



$(function() {

		(function triggerMobileMenu() {
	let $btn = $('.hamburger');
	let	$overlay = $('.overlay');
	// let $menu = $('.header__nav');

	$btn.on('click', function() {
		$(this).toggleClass('is-active').next().toggleClass('active');
		$overlay.fadeToggle();
		$('html, body').toggleClass('no-scroll');
	});
		})();




	})


