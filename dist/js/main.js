(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  slidesPerView: 5,
  grabCursor: true,
  slidesOffsetBefore: '50',
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev'
  }
}); //scrollbar

window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
  var animItem = document.querySelector(".baner__image-left");
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var animItemHeight = animItem.offsetHeight;
  var kAnimItemToBaner = 4;
  var scrolled = winScroll / height * 100;
  var k = 0.4;

  if (animItemHeight * kAnimItemToBaner > winScroll) {
    animItem.style.marginLeft = scrolled * k + "%";
  }
}

},{}]},{},[1]);
