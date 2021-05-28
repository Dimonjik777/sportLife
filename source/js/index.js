$(document).ready(function() {
	if(window.matchMedia("(min-width: 1220px)").matches){
	$('.slider').slick({
		slidesToShow: 3,
		prevArrow: $('.button__left'),
		nextArrow: $('.button__right'),
	});

}

	if(window.matchMedia("(max-width: 1220px)").matches){
	$('.slider').slick({
		slidesToShow: 1,
		prevArrow: $('.button__left'),
		nextArrow: $('.button__right'),
	});

}
});

//Animations of scroll

let animItems = document.querySelectorAll('._anim-item');

if( animItems.length > 0 ) {
	if(window.matchMedia("(min-width: 768px)").matches){
	window.addEventListener('scroll', animOnScroll);
} else{
		for (var i = 0; i < animItems.length; i++) {
			const animItem = animItems[i];
			animItem.classList.add('_active');
		}
}

	function animOnScroll(argument) {
		for (var i = 0; i < animItems.length; i++) {
			const animItem = animItems[i];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if( animItemHeight > window.innerHeight ) {

				animItemPoint = window.innerHeight - window.innerHeight / animStart;

			}

			if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < ( animItemOffset + animItemHeight)) {

				animItem.classList.add('_active');

			} else{
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}

		}
	}
  	
	animOnScroll();

  	//get item coordinates 
	function offset(el) {
		const rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;

		return { top: rect.top + scrollTop, left: rect.left + scrollLeft } 
	}
}

//Scroll site with click buttons

const anchors = document.querySelectorAll('a[href*="#"]');

for ( let anchor of anchors ) {
	anchor.addEventListener('click', function  (event) {
		event.preventDefault();
		const blockID = anchor.getAttribute('href');
		document.querySelector('' + blockID).scrollIntoView( {
			behavior: 'smooth',
			block: 'start'
		});
	})
}

//Burger

$('.burger').click(function() {
		$('.popup').toggleClass('active');
	});

$('.close').click(function() {
		$('.popup').removeClass('active');
	})