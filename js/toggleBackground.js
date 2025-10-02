const check = document.getElementById("checkbox");
const sun = document.querySelector(".bi-brightness-high-fill");
const header = document.querySelector("header");
const textos = document.querySelectorAll("button, p, h1, h2, h3, span, cite, a, q, li");
const menu = document.querySelector('.menu');
const spanDropdown = document.querySelector('.selected');

check.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  spanDropdown.classList.toggle("dark-color");
  header.classList.toggle("dark");
  sun.classList.toggle("white-color");
  menu.classList.toggle("dark"); // corrigido para toggle

  textos.forEach(el => el.classList.toggle("white-color"));
});