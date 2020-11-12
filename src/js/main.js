const mySwiper = new Swiper('.swiper-container', {

    direction: 'horizontal',
    slidesPerView: 5,
    grabCursor: true,
    slidesOffsetBefore: '50',

    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
    }
})