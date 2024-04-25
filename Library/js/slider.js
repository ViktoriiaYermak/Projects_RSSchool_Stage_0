$(document).ready(function() {
    $('.slider').slick({
        arrows:false,
        dots:true,
        slidesToShow:3,
        slidesToScroll:1,
        speed:500,
        easing:'ease',
        infinite:false,
        initialSlide:0,
        autoplay:false,
        waitForAnimate:false,
        responsive: [
            {
                breakpoint: 1430,
                settings: {
                    slidesToShow:2,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow:1,
                    arrows:true,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow:1,
                    arrows:false,
                }
            }
        ]
    });
});