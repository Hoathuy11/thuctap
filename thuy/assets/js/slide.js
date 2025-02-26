$(document).ready(function(){
    $('.slider').slick({
        infinite:true,
        slidesToShow:4,
        slidesToScroll:1,
        prevArrow:".sec-slide .prev",
        nextArrow:".sec-slide .next"
    });
});