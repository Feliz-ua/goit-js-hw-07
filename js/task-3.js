const inputElement = document.querySelector('#name-input');
const outputElement = document.querySelector('#name-output');

inputElement.addEventListener('input', (event) => {
  const inputValue = event.currentTarget.value.trim();
   if (inputValue === '') {
    outputElement.textContent = 'Anonymous';
  } else {
       outputElement.textContent = inputValue;
  }
});