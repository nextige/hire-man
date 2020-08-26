// testimonials slider
let swiper2 = new Swiper('.testimonials-wrapper', {
    slidesPerView: 1,
    autoHeight: true,
    spaceBetween: 30,
    loop: false,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// sticky header
$(window).scroll(function () {
    var st = $(this).scrollTop();
    if (st > 50) {
        $("header").addClass("sticky");
    } else {
        $("header").removeClass("sticky");
    }
});


// smooth scroll
$(".btn-groups a+a").bind("click", function (e) {
    e.preventDefault();

    var target = $(this).attr("href");

    $("html, body")
        .stop()
        .animate({
                scrollTop: $(target).offset().top - 30,
            },
            600,
            function () {
                location.hash = target + 30;
            }
        );

    return false;
});


// loader
$(window).on('load', function () {
    $(".loader").fadeOut(1500);
});

// wow animation
wow = new WOW({
    boxClass: "wow", // default
    animateClass: "animated", // default
    offset: 0, // default
    mobile: false, // default
    live: true, // default
});
wow.init();

// parallax 
function initParallax() {
    'use strict';
    var parallaxElements = $('.parallax'),
        parallaxQuantity = parallaxElements.length;
    $(window).on('scroll', function () {
        window.requestAnimationFrame(function () {
            parallaxElements.each(function () {
                var $this = $(this),
                    $speed = $this.attr('data-parallax-speed');
                for (var i = 0; i < parallaxQuantity; i++) {
                    var $scrolled = $(window).scrollTop() - $this.offset().top + $this.height();
                    $this.css({
                        'transform': 'translate3d(0,' + $scrolled * $speed + 'px, 0)'
                    });
                }
            });
        });
    });
}
$('.parallax').each(function () {
    'use strict';
    var $this = $(this),
        $src = $this.attr('data-image-src'),
        $wrapperHeight = $this.parents('.parallax-wrapper').find('.parallax-container').outerHeight();
    $this.parents('.full-blocks').addClass('parallax-block');
    $this.css('background-image', 'url(' + $src + ')');
    $this.parents('.parallax-wrapper').outerHeight($wrapperHeight);
});
$(window).resize(function () {
    'use strict';
    $('.parallax-section').each(function () {
        var $newHeight = $('.parallax-container', this).outerHeight();
        $('.parallax-wrapper', this).height($newHeight);
    });
});
(function ($) {
    'use strict';
    if ($('.parallax').length) {
        initParallax();
    }
}($));