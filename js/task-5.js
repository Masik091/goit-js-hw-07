"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.body;
const color = document.querySelector('.color');
const colorButton = document.querySelector('.change-color');

colorButton.addEventListener('click', function(){
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  color.textContent = newColor;
})
