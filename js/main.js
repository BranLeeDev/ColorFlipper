const navButton = document.querySelector(".nav__button");
const buttonLine = document.querySelectorAll(".button__line");
const navList = document.querySelector(".nav__list");

navButton.addEventListener("click", () => {
  buttonLine[0].classList.toggle("button__line--one");
  buttonLine[1].classList.toggle("button__line--two");
  buttonLine[2].classList.toggle("button__line--three");

  navList.classList.toggle("nav__list--active");
});
