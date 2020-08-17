// testimonials slider
let swiper2 = new Swiper('.testimonials-wrapper', {
    slidesPerView: 1,
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