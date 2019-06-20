/**
 * Created by Serj on 10.02.2017.
 */
"use strict";

var search = document.querySelector(".search");
var searchPopup = search.querySelector("input");

var loginHeader = document.querySelector(".login");
var loginPopup = document.querySelector(".login-popup");
var formPopup = loginPopup.querySelector("form");
var mailPopup = formPopup.querySelector("[name=email]");
var passwordPopup = formPopup.querySelector("[name=password]");

var popup = document.querySelector(".modal-content");
var link = document.querySelector(".index-map-info .btn");
var overlay = document.querySelector(".modal-overlay");
var close = popup.querySelector(".modal-content-close");
var login = popup.querySelector("[name=name]");
var mail = popup.querySelector("[name=email]");
var form = popup.querySelector(".login-form");
var storage = localStorage.getItem("login");

var contentLetter = document.querySelector(".index-post-newsletter");
var formLetter = contentLetter.querySelector("form");
var letter = formLetter.querySelector("input");

var bodySlider = document.querySelector(".wrapper");
var slide1 = document.querySelector(".slide-1");
var slide2 = document.querySelector(".slide-2");
var slide3 = document.querySelector(".slide-3");
var button1 = document.getElementById("slide-1");
var button2 = document.getElementById("slide-2");
var button3 = document.getElementById("slide-3");

search.addEventListener("mouseover",function () {
  searchPopup.focus();
});

loginHeader.addEventListener("mouseover", function () {
  mailPopup.focus();
});

formPopup.addEventListener("submit", function (event) {
  if (!mailPopup.value || !passwordPopup.value) {
    event.preventDefault();
    loginPopup.classList.add("modal-error");
  }
});

loginHeader.addEventListener("mouseout", function () {
  loginPopup.classList.remove("modal-error");
});

formLetter.addEventListener("submit", function (event) {
  if (!letter.value) {
    event.preventDefault();
    contentLetter.classList.toggle("modal-error");
  }
});

link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  overlay.classList.add("modal-content-show-overlay");

  if (storage) {
    login.value = storage;
    mail.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  popup.classList.remove("modal-error");
  overlay.classList.remove("modal-content-show-overlay");
});

form.addEventListener("submit", function (event) {
  if (!login.value || !mail.value) {
    event.preventDefault();
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("login", login.value);
  }
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      popup.classList.remove("modal-error");
      overlay.classList.remove("modal-content-show-overlay");
    }
  }
});

button1.addEventListener("mousedown", function (event) {
  event.preventDefault();
  button1.classList.add("active");
  slide1.classList.add("slide-show");
  bodySlider.classList.add("body-ice1");

  button2.classList.remove("active");
  button3.classList.remove("active");
  slide2.classList.remove("slide-show");
  slide3.classList.remove("slide-show");
  bodySlider.classList.remove("body-ice2");
  bodySlider.classList.remove("body-ice3");
});

button2.addEventListener("mousedown", function (event) {
  event.preventDefault();
  button2.classList.add("active");
  slide2.classList.add("slide-show");
  bodySlider.classList.add("body-ice2");

  button1.classList.remove("active");
  button3.classList.remove("active");
  slide1.classList.remove("slide-show");
  slide3.classList.remove("slide-show");
  bodySlider.classList.remove("body-ice1");
  bodySlider.classList.remove("body-ice3");
});

button3.addEventListener("mousedown", function (event) {
  event.preventDefault();
  button3.classList.add("active");
  slide3.classList.add("slide-show");
  bodySlider.classList.add("body-ice3");

  button1.classList.remove("active");
  button2.classList.remove("active");
  slide1.classList.remove("slide-show");
  slide2.classList.remove("slide-show");
  bodySlider.classList.remove("body-ice1");
  bodySlider.classList.remove("body-ice2");
});
