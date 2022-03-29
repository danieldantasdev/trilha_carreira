let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.l-header .l-nav');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () =>{
    themeBtn.classList.toggle('fa-sun');

    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
};

/* ScrollIndicator */
window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  let maxHeight = window.document.body.scrollHeight - window.innerHeight;
  let percentage = ((window.scrollY) / maxHeight) * 100;
  document.querySelector('.l-header .scroll-indicator').style.width = percentage + '%';
};

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .l-home__image,
    #services, .l-services__box,
    #work, .l-work__box-container,
    #pricing, .l-pricing__box,
    #reviews, .l-reviews__box,
    #contact, .l-contact__box, .l-contact__form
    `,
    { interval: 50 }
)

/* Swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
      el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
      767: {
          slidesPerView: 2,
          setWrapperSize: true
      }
  }
})
