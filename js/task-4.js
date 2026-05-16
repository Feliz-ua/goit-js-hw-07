const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const elements = event.currentTarget.elements;
  const emailInput = elements.email;
  const passwordInput = elements.password;
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (emailValue === '' || passwordValue === '') {
    return alert('All form fields must be filled in');
  }

  const formData = {
    [emailInput.name]: emailValue,
    [passwordInput.name]: passwordValue
  };
  console.log(formData);
  event.currentTarget.reset();
});
