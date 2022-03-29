/* ==================== Dark Mode ==================== */
let menu = document.querySelector('#menu-btn')
let navbar = document.querySelector('.l-header .l-nav')

menu.onclick = () => {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

/* ==================== Mostrar menu ==================== */
var menuHamburguer = document.querySelector('#menu-btn')
menuHamburguer.addEventListener('click', () => {
    var nav = document
        .querySelector('.l-nav__container')
        .classList.toggle('show-menu')
})

/* ==================== Slider swiper ==================== */
const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
    },
    autoplay: {
        delay: 1000
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    mousewheel: true,
    keyboard: true,
    grabCursor: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: -30
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: -100
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 100
        },
        767: {
            slidesPerView: 6,
            spaceBetween: 150,
            setWrapperSize: true
        },
        1000: {
            slidesPerView: 8,
            spaceBetween: -100,
            setWrapperSize: true
        }
    }
})
