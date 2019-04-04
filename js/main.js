"use strict";

var toggleMenu = function toggleMenu() {
  var toggle = document.getElementById("toggle");
  var body = document.getElementsByTagName("BODY")[0];
  document.getElementById("nav").classList.toggle("show");
  toggle.classList.toggle("on");
  body.classList.toggle("menu-open");
};

toggle.addEventListener("click", toggleMenu);

window.onscroll = function() {
  var nav = document.getElementById("nav-big");
  if (this.scrollY > 10) nav.classList.add("scroll");
  if (this.scrollY <= 10) nav.classList.remove("scroll");
};

// const toggleMenu = function() {
//   const toggle = document.getElementById("toggle");
//   const body = document.getElementsByTagName("BODY")[0];
//   document.getElementById("nav").classList.toggle("show");
//   toggle.classList.toggle("on");
//   body.classList.toggle("menu-open");
// };
// toggle.addEventListener("click", toggleMenu);

// window.onscroll = () => {
//   const nav = document.getElementById("nav-big");
//   if (this.scrollY > 10) nav.classList.add("scroll");
//   if (this.scrollY <= 10) nav.classList.remove("scroll");
// };
