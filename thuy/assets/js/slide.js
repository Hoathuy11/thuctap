$(document).ready(function(){
    // Slider 1 - "お客様の声"
    $('.sec-slide .slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: ".sec-slide .prev",
        nextArrow: ".sec-slide .next",
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Slider 2 - "スタッフ紹介"
    $('.sec-slide1 .slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: ".sec-slide1 .prev",
        nextArrow: ".sec-slide1 .next",
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
