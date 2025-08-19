const button = document.querySelector('#submit');

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

// Inicialmente deshabilita el botón

button.disabled = true;

if (button.disabled) {
  button.classList.add('disabled');
} else {
  button.classList.remove('disabled');
}

function validateButton() {
  // Habilita el botón si todos los campos están llenos
  const nombreValue = nombre.value !== '' && email.value === '' && password.value !== '';
  const emailValue = nombre.value === '' && email.value !== '' && password.value !== '';

  return !(nombreValue || emailValue);

}

nombre.addEventListener('input', () => {
  button.disabled = validateButton();

  if (button.disabled) {
    button.classList.add('disabled');
  } else {
    button.classList.remove('disabled');
  }
});

email.addEventListener('input', () => {
  button.disabled = validateButton();

  if (button.disabled) {
    button.classList.add('disabled');
  } else {
    button.classList.remove('disabled');
  }
});

password.addEventListener('input', () => {
  button.disabled = validateButton();

  if (button.disabled) {
    button.classList.add('disabled');
  } else {
    button.classList.remove('disabled');
  }
});

