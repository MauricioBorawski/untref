// Juego de adivinar un número

// Seleccionar los elementos del DOM
const form = document.getElementById("form");
const input = document.getElementById("number");
const pistas = document.getElementById("pistas");
const errores = document.getElementById("errors");
const intentos = document.getElementById("intentos");
const button = document.getElementById("button");

// Inicializar variables
// Contador de intentos y texto para mostrar en el DOM
let intentosCount = 0;
let intentosText = `Intentos: ${intentosCount}`;

let inputValue = null;
let errorMessage = [];

function generarNumeroAleatorio(max) {
  return Math.floor(Math.random() * max) + 1;
}

let numeroAleatorio = generarNumeroAleatorio(100);

intentos.innerHTML = intentosText;

// Agregar un evento al formulario para manejar el envío.
form.addEventListener("submit", function (e) {
  // Evitar que se recargue la página
  e.preventDefault();

  // Limpiar mensajes de error previos
  errorMessage = [];
  errores.innerHTML = "";

  // Limpiar mensajes de pistas previos
  pistas.innerHTML = "";

  // Incrementar el contador de intentos
  intentosCount = intentosCount + 1;
  intentosText = `Intentos: ${intentosCount}`;
  intentos.innerHTML = intentosText;

  // Validar el input
  if (!inputValue) {
    errorMessage.push("El campo no puede estar vacío.");
    errores.innerHTML = errorMessage.join(", ");
    return;
  }

  // Transformar el valor del input a un número
  let parsedValue = parseInt(inputValue);

  // Validar que el valor ingresado sea un número
  // NaN significa "Not a Number"
  if (isNaN(parsedValue)) {
    errorMessage.push("El valor ingresado no es un número válido.");
    errores.innerHTML = errorMessage.join(", ");
    return;
  }

  // Logica del juego

  // Valor absoluto entre el número aleatorio y el valor ingresado
  const valorAbsoluto = Math.abs(numeroAleatorio - parsedValue);

  if (valorAbsoluto === 0) {
    const jugarDeNuevo = confirm("¡Felicidades! Has adivinado el número. Jugar de nuevo?");

    if (jugarDeNuevo) {
      // Reiniciar el juego
      numeroAleatorio = generarNumeroAleatorio(10);
      intentosCount = 0;
      intentosText = `Intentos: ${intentosCount}`;
      intentos.innerHTML = intentosText;
      pistas.innerHTML = "";
      errores.innerHTML = "";
      input.value = "";
      inputValue = null;
    } else {
      // Terminar el juego
      pistas.innerHTML = "Gracias por jugar.";
      button.disabled = true;
      input.disabled = true;

      return;
    }
  }

  if (valorAbsoluto <= 3) {
    pistas.innerHTML = "¡Muy cerca!";
    return;
  }

  if (valorAbsoluto > 3 && valorAbsoluto <= 5) {
    pistas.innerHTML = "¡Cerca!";
    return;
  }

  if (valorAbsoluto > 5) {
    pistas.innerHTML = "¡Lejos!";
    return;
  }
});

input.addEventListener("input", (e) => {
  const value = e.target.value;

  inputValue = value;
});
