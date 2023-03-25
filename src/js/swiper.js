import Swiper, { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const swiper = new Swiper(".mini-slider", {
    modules: [Navigation],
    loop: true,
    spaceBetween: 31,
    slidesPerView: 3,
    grabCursor: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
