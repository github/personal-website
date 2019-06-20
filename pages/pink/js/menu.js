/**
 * Created by Serj on 11.03.2017.
 */
'use strict';
var menu = document.querySelector(".main-nav");
var menuControl = menu.querySelector(".main-nav__control");
var menuList = menu.querySelector(".main-nav__list");
var button = menu.querySelector(".main-nav__toggle");

menu.classList.remove("main-nav--nojs");
menuControl.classList.remove("main-nav__control--nojs");
menuList.classList.remove("main-nav__list--nojs");
button.classList.remove("main-nav__toggle--nojs");

button.addEventListener("click", function (event) {
  event.preventDefault();
  if (button.classList.contains("main-nav__toggle--closed")) {
    button.classList.remove("main-nav__toggle--closed");
    button.classList.add("main-nav__toggle--opened");
  } else {
    button.classList.remove("main-nav__toggle--opened");
    button.classList.add("main-nav__toggle--closed");
  }
  menu.classList.toggle("main-nav--closed");
  menuControl.classList.toggle("main-nav__control--closed");
  menuList.classList.toggle("main-nav__list--closed");
});
