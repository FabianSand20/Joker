import Publisher from '../Publisher.js';

const colorInputs = document.querySelectorAll('.color');
const colorChange = new Publisher();

function handleColorChange(event) {
  const color = event.currentTarget.dataset.id;
  colorChange.publish(color);
}

function initializeColors() {
  colorInputs.forEach(colorInput => {
    colorInput.addEventListener('change', handleColorChange);
  });
}

export {
  initializeColors,
  colorChange
};
