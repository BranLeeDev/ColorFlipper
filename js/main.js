// Global Variables
const navButton = document.querySelector(".nav__button");
const buttonLine = document.querySelectorAll(".button__line");
const navList = document.querySelector(".nav__list");
const sectionButton = document.querySelector(".section__button");
const sectionParagraph = document.querySelector(".section__paragraph");
const contentLayout = document.querySelector(".content-layout");
const paragraphColor = document.querySelector(".paragraph__color");

// Function to open the hidden slide in the navigation menu
function handleNavButtonClick() {
  navButton.addEventListener("click", () => {
    buttonLine[0].classList.toggle("button__line--one");
    buttonLine[1].classList.toggle("button__line--two");
    buttonLine[2].classList.toggle("button__line--three");

    navList.classList.toggle("nav__list--active");
  });
}

// This function set key and value in localStorage
function setColorInLocalStorage(key, value) {
  window.localStorage.setItem(key, value);
}

// Function to get color from localStorage and apply it to the div with the class .content-layout
function getColorAndApplyToDocument(key) {
  const color = window.localStorage.getItem(key);

  if (color) {
    paragraphColor.textContent = color;
    contentLayout.style.backgroundColor = color;
  }
}

// This function applies color to the div with the class .content-layout
function applyColorToDocument(color) {
  paragraphColor.textContent = color;
  contentLayout.style.backgroundColor = color;
}

// This function checks that the color is equal to the sectionButton or sectionParagraph
function verifyColorEquals(currentColor, colorToCompare) {
  if (currentColor === colorToCompare) {
    sectionButton.classList.add("equals-button");
    sectionParagraph.classList.add("equals-paragraph");
  } else {
    sectionParagraph.classList.remove("equals-paragraph");
    sectionButton.classList.remove("equals-button");
  }
}

// This function changes color when pressing the button
function changeColor(callback, keyStorage, colorToCompare) {
  sectionButton.addEventListener("click", () => {
    const color = callback();

    verifyColorEquals(color, colorToCompare);
    applyColorToDocument(color);

    setColorInLocalStorage(keyStorage, color);
  });
}

window.addEventListener("load", () => {
  handleNavButtonClick();
});

export { getColorAndApplyToDocument, changeColor };
