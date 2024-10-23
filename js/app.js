document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: false,
        pagination: {
            el: '.swiper-pagination'
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    })

    document.addEventListener('keydown', function (event) {
        if(event.key === 'ArrowLeft') {
            swiper.slidePrev()
        } else if(event.key === 'ArrowRight'){
            swiper.slideNext()
        }
    })
})

//Menu hamburguer

const hamburger = document.getElementById('hamburger');
        const nav = document.querySelector('.nav');

        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });