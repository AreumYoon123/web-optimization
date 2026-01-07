const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector(".nav-menu");
const closeBtn = document.querySelector(".close_btn");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("active");
});