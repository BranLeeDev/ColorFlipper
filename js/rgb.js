import { changeColor, getColorAndApplyToDocument } from "./main.js";

// This function generates a random rgb color
function generateRandomRgbColor() {
  const numberRed = Math.floor(Math.random() * 256);
  const numberGreen = Math.floor(Math.random() * 256);
  const numberBlue = Math.floor(Math.random() * 256);

  const rgbColor = `rgb(${numberRed}, ${numberGreen}, ${numberBlue})`;

  return rgbColor;
}

// Main function
function rgbMain() {
  getColorAndApplyToDocument("rgbColor");
  changeColor(generateRandomRgbColor, "rgbColor", "rgb(33, 33, 33)");
}

window.addEventListener("load", rgbMain);
