const btnNav = document.querySelector(".nav__btn");
const navList = document.querySelector(".nav__list");

btnNav.addEventListener("click", function () {
  navList.classList.toggle("nav--close");
});
