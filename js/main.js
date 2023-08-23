const sectionButton = document.querySelector(".section__button");
const sectionParagraph = document.querySelector(".section__paragraph");
const paragraphColor = document.querySelector(".paragraph__color");
const contentLayout = document.querySelector(".content-layout");
const hexOptions = "0123456789";

sectionButton.addEventListener("click", () => {
  let result = "";
  let numberRed;
  let numberGreen;
  let numberBlue;
  for (let i = 0; i <= 2; i++) {
    const randomIndex = Math.floor(Math.random() * 256);
    if (i === 0) numberRed = randomIndex;
    if (i === 1) numberGreen = randomIndex;
    if (i === 2) numberBlue = randomIndex;
  }

  if (result === "rgb(33, 33, 33)") {
    sectionButton.classList.add("equals-button");
    sectionParagraph.classList.add("equals-paragraph");
  } else {
    sectionParagraph.classList.remove("equals-paragraph");
    sectionButton.classList.remove("equals-button");
  }

  result = `rgb(${numberRed}, ${numberGreen}, ${numberBlue})`;

  paragraphColor.textContent = result;
  contentLayout.style.backgroundColor = result;
});
