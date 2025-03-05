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
    // Slider 3 - Chỉ hiển thị 3 slides cùng lúc
    $('.slide-top .slider').slick({
        infinite: true,
        slidesToShow: 3,  // Hiển thị 3 slide
        slidesToScroll: 1,
        prevArrow: ".slide-top .prev",
        nextArrow: ".slide-top .next",
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2  // Màn hình nhỏ hơn 769px sẽ hiển thị 2 slide
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1  // Màn hình nhỏ hơn 426px sẽ hiển thị 1 slide
                }
            }
        ]
    });
});

