const toggle = document.getElementById("toggle");
var body = document.getElementsByTagName("BODY")[0];

const toggleMenu = function() {
  document.getElementById("nav").classList.toggle("show");
  toggle.classList.toggle("on");
  body.classList.toggle("menu-open");
};
toggle.addEventListener("click", toggleMenu);

window.onscroll = () => {
  const nav = document.getElementById("nav-big");
  if (this.scrollY > 10) nav.classList.add("scroll");
  if (this.scrollY <= 10) nav.classList.remove("scroll");
};