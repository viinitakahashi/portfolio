const header = document.querySelector("header");

const check = document.getElementById("checkbox");
const sun = document.querySelector(".bi-brightness-high-fill");

const textos = document.querySelectorAll("button, p, h1, h2, h3, cite, a, q, li, i, bi");
const contactText = document.querySelector('.selected');

const menu = document.querySelector('.menu');
const spanDropdown = document.querySelector('.selected');
const menuDesktop = document.querySelector('.menu');
const menuMobile = document.querySelector('.nav-list')

check.addEventListener("change", () => {
  textos.forEach(el => el.classList.toggle("white-color"));

  document.body.classList.toggle("dark");
  menuMobile.classList.toggle("dark");
  menuDesktop.classList.toggle("dark");
  header.classList.toggle("dark");
  sun.classList.toggle("white-color");
  menu.classList.toggle("dark"); 

});