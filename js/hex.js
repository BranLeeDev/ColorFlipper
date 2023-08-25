const sectionButton = document.querySelector(".section__button");
const sectionParagraph = document.querySelector(".section__paragraph");
const paragraphColor = document.querySelector(".paragraph__color");
const contentLayout = document.querySelector(".content-layout");
const hexOptions = "0123456789ABCDEF";

const valueLocalStorage = window.localStorage.getItem("hexColor");
if (valueLocalStorage) {
  contentLayout.style.backgroundColor = valueLocalStorage;
  paragraphColor.textContent = valueLocalStorage;
}

sectionButton.addEventListener("click", () => {
  let colorHex = "#";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hexOptions.length);
    colorHex += hexOptions[randomIndex];
  }

  if (colorHex === "#222222") {
    sectionButton.classList.add("equals-button");
    sectionParagraph.classList.add("equals-paragraph");
  } else {
    sectionParagraph.classList.remove("equals-paragraph");
    sectionButton.classList.remove("equals-button");
  }

  paragraphColor.textContent = colorHex;
  contentLayout.style.backgroundColor = colorHex;

  window.localStorage.setItem("hexColor", colorHex);
});
