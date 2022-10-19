'use strict';

// グローバルナビゲーション
const gMenuP = document.querySelector('header p');
const gMenuArea = document.querySelector('header nav');

gMenuP.addEventListener('click', () => {
  gMenuArea.classList.toggle('hidden');
  gMenuP.classList.toggle('active');
});

const gMenuAreaList = document.querySelectorAll('header nav li');

gMenuAreaList.forEach(List => {
  List.addEventListener('click', () => {
    gMenuArea.classList.remove('hidden');
    gMenuP.classList.remove('active');
  });
});

// ギャラリー
$('#gallery-area').slick({
  autoplay: true,
  autoplaySpeed: 4000,
  infinite: true,
  slidesToShow:3,
  slidesToScroll:3,
  arrows: false,
  dots: true,
});