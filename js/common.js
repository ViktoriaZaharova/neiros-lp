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
    centerMode: true,
});

$(document).ready(function () {
    var element = document.getElementById("scroll-section");
    var cnt = 0;

    document.addEventListener('wheel', function (event) {
        event = event || window.event;
        var y = event.deltaY || event.detail || event.wheelDelta, val = 0.3, min = 0, max = 0;

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


// header fixed
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});
// header fixed end

// mobile menu
$('.btn-burger').on('click', function () {
    $('.overlay-menu').fadeIn();
    $('.nav-menu').fadeIn();
});

$('.nav-menu__close, .overlay-menu').on('click', function () {
    $('.nav-menu').fadeOut();
    $('.overlay-menu').fadeOut();
});

$('.nav-menu .dropdown-toggle').on('click', function () {
    $(this).toggleClass('click').next('.dropdown-menu').slideToggle();
});


$(".nav-menu .dropdown-toggle").one("click", false);


$(document).ready(function () { //плавный скролл
    $(".navigation-fixed li a").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        $('.navigation-fixed').addClass('fixed');

        $('.navigation-fixed li a').removeClass('active');
        $(this).addClass('active');

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            headerHeight = $('header').height(),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 500 мс
        $('body,html').animate({scrollTop: top - headerHeight}, 500);

    });
});

$(document).ready(function () {
    var sections = $('.section'),
        nav = $('.navigation-fixed'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    // nav.find('a').on('click', function () {
    //     var $el = $(this)
    //         , id = $el.attr('href');
    //
    //     $('html, body').animate({
    //         scrollTop: $(id).offset().top - nav_height
    //     }, 500);
    //
    //     return false;
    // });
});

$(document).ready(function () {
    var block_show = null;

    function scrollTracking() {
        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var et = $('.main').offset().top;
        var eh = $('.main').outerHeight();

        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
            if (block_show == null || block_show == false) {
                $('.navigation-fixed').addClass('no-fixed');
                $('.navigation-fixed li a').removeClass('active');
            }
            block_show = true;
        } else {
            if (block_show == null || block_show == true) {
                $('.navigation-fixed').removeClass('no-fixed');
            }
            block_show = false;
        }
    }

    $(window).scroll(function () {
        scrollTracking();
    });

    $(document).ready(function () {
        scrollTracking();
    });
});

$(document).ready(function () {
    var block_show = null;

    function scrollTracking() {
        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var et = $('.stages-settings').offset().top;
        var eh = $('.stages-settings').outerHeight();

        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
            if (block_show == null || block_show == false) {
                $.each($('.list-stages-settings > li'), function (i, el) {
                    setTimeout(function () {
                        $(el).addClass("active");
                    }, 500 + (i * 500));
                });
            }
            block_show = true;
        } else {
            if (block_show == null || block_show == true) {
                $('.list-stages-settings > li').removeClass('active');
            }
            block_show = false;
        }
    }

    $(window).scroll(function () {
        scrollTracking();
    });

    $(document).ready(function () {
        scrollTracking();
    });
});

$(document).ready(function () {

	var parallax = $('.parallax-window');

	$(window).scroll(function () {
		var st = $(this).scrollTop();
		parallax.css({ "background-position": 'center calc(5% + ' + (-st * .135) + 'px)' });
	});
});

new WOW().init();
