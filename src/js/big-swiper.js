import Swiper, { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiper = new Swiper(".big-slider", {
    modules: [Navigation],
    loop: true,
    spaceBetween: 100,
    slidesPerView: 3,
    speed: 250,

    grabCursor: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
