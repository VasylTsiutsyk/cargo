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


//scrollbar
window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
    const animItem = document.querySelector(".baner__image-left");
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const animItemHeight = animItem.offsetHeight;
    const kAnimItemToBaner = 4;
    const scrolled = (winScroll / height) * 100;
    const k = 0.4;
    if (animItemHeight * kAnimItemToBaner > winScroll) {
        animItem.style.marginLeft = scrolled * k + "%";
    }
}