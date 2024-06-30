"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
document.addEventListener('DOMContentLoaded', function () {
  const input = document.querySelector('#controls input');
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const boxes = document.querySelector('#boxes');
  
  function createBoxes(amount) {
    boxes.innerHTML = '';
    let size = 30;
    const containerNewBoxes = document.createDocumentFragment();
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      containerNewBoxes.appendChild(box);
      size += 10;
    }
    boxes.appendChild(containerNewBoxes);
  }
  
  function destroyBoxes() {
    boxes.innerHTML = '';
  }
  
  createButton.addEventListener('click', function () {
    const amount = parseInt(input.value);
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = '';
    }
  });
  
  destroyButton.addEventListener('click', function () {
    destroyBoxes();
  });
});