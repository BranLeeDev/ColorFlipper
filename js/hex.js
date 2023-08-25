import { changeColor, getColorAndApplyToDocument } from "./main.js";

const hexOptions = "0123456789ABCDEF"; // Values needed to generate hex colors

// This function generates a random hex color
function generateRandomHexColor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hexOptions.length);
    hexColor += hexOptions[randomIndex];
  }

  return hexColor;
}

// Main function
function hexMain() {
  getColorAndApplyToDocument("hexColor");
  changeColor(generateRandomHexColor, "hexColor", "#222222");
}

window.addEventListener("load", hexMain);
