const navButton = document.querySelector(".nav__button");
const buttonLine = document.querySelectorAll(".button__line");

navButton.addEventListener("click", () => {
  buttonLine[0].classList.toggle("button__line--one");
  buttonLine[1].classList.toggle("button__line--two");
  buttonLine[2].classList.toggle("button__line--three");
});
