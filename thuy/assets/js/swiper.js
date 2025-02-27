document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".slider", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".btn-slide.next",
            prevEl: ".btn-slide.prev"
        },
        breakpoints: {
            0: { // Dưới 768px
                slidesPerView: 1
            },
            768: { // Trên 768px
                slidesPerView: 3
            },
            1024: { // Trên 1024px
                slidesPerView: 4
            }
        }
    });
});
