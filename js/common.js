// parallax
$(document).ready(function () {
	var scene1 = document.getElementById('scene1');
	var parallaxInstance1 = new Parallax(scene1);

	var scene2 = document.getElementById('scene2');
	var parallaxInstance2 = new Parallax(scene2);

	var scene3 = document.getElementById('scene3');
	var parallaxInstance3 = new Parallax(scene3);
});
// parallax end

// mask phone
$('[name="phone"]').mask('+7 (999) 999-99-99');
// mask phone end

// search
$('.btn-search__header').on('click', function (e) {
	e.preventDefault();
	$(this).toggleClass('click');
	setTimeout(sefocus, 1000);
	$('.form-search__header input').focus();
	$('.form-search__header').fadeToggle();
});

function sefocus() {
	$('.form-search__header input').focus();
}

$(document).mouseup(function (e) { // событие клика по веб-документу
	var div = $(".form-search__header"); // тут указываем ID элемента
	var btn = $('.btn-search__header');
	if (!div.is(e.target) && !btn.is(e.target) && btn.has(e.target).length === 0 && div.has(e.target).length === 0) { // и не по его дочерним элементам
		div.fadeOut(); // скрываем его
		btn.removeClass('click');
	}
});
// search end

$('.video-reviews-slider').slick({
	slidesToShow: 1,
	variableWidth: true,
	appendArrows: '.video-reviews-slider__nav',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
	// centerMode: true, 
});


$(document).ready(function () {
	var element = document.getElementById("scroll-section");
	var cnt = 0;

	document.addEventListener('wheel', function (event) {
		event = event || window.event;
		var y = event.deltaY || event.detail || event.wheelDelta, val = 0.1, min = 0, max = 0;

		if (y > 0) {
			cnt = cnt - 1;
			element.style.transform = 'translate(' + cnt + '%)';
		}
		if (y < 0) {
			cnt = cnt + 1;
			element.style.transform = 'translate(' + cnt + '%)';
		}
	});
});
