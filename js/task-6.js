function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Знаходимо всі необхідні елементи в DOM
const inputElement = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
  boxesContainer.innerHTML = '';
  const boxesMarkup = [];
  for (let i = 0; i < amount; i++) {
    // Базовий розмір 30px, кожен наступний збільшується на 10px
    const size = 30 + i * 10; 
    const color = getRandomHexColor();
    
    // Створюємо HTML-розмітку одного квадрата з інлайн-стилями
    const divMarkup = `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
    boxesMarkup.push(divMarkup);
  }

  // Додаємо всі створені елементи в DOM за одну операцію
  boxesContainer.insertAdjacentHTML('beforeend', boxesMarkup.join(''));
}

// Функція для повного очищення колекції
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

// Слухач події для кнопки Create
createBtn.addEventListener('click', () => {
  // Зчитуємо та перетворюємо значення з інпуту на число
  const amount = Number(inputElement.value);

  // Валідація: число має бути від 1 до 100 включно
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);      // Створюємо квадрати
    inputElement.value = '';  // Очищаємо інпут після успішного рендеру
  }
});

// Слухач події для кнопки Destroy
destroyBtn.addEventListener('click', destroyBoxes);