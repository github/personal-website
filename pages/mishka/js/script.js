'use strict';

var toggle = document.querySelector('.main-nav__toggle');
var menu = document.querySelector('.main-nav__list');
var modal = document.querySelector('.modal-content');
var overlay = document.querySelector('.modal-overlay');
var btnIndex = document.querySelector('.btn--benefits');

toggle.addEventListener('click', function (event) {
  event.preventDefault();

  if (toggle.classList.contains('main-nav__toggle--closed')) {
    toggle.classList.remove('main-nav__toggle--closed');
    toggle.classList.add('main-nav__toggle--opened');
  } else {
    toggle.classList.remove('main-nav__toggle--opened');
    toggle.classList.add('main-nav__toggle--closed');
  }

  menu.classList.toggle('main-nav__list--closed');
});

btnIndex.addEventListener('click', function (event) {
  event.preventDefault();

  overlay.classList.add('modal-overlay--show');
  modal.classList.add('modal-content--show');
});

window.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
    if (modal.classList.contains('modal-content--show')) {
      modal.classList.remove('modal-content--show');
      overlay.classList.remove('modal-overlay--show');
    }
  }
});
