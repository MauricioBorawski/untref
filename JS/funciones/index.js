/**
 * Ejercicio 1: FizzBuzz
 *
 * Escribe una función que imprima los números del 1 al 100.
 * Para los múltiplos de 3, imprime "Fizz" en lugar del número.
 * Para los múltiplos de 5, imprime "Buzz" en lugar del número.
 * Para los números que son múltiplos de ambos (3 y 5), imprime "FizzBuzz".
 */
function fizzBuzz(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 3 === 0 && nums[i] % 5 === 0) {
      nums[i] = "FizzBuzz";
    } else if (nums[i] % 3 === 0) {
      nums[i] = "Fizz";
    } else if (nums[i] % 5 === 0) {
      nums[i] = "Buzz";
    }
    console.log(nums[i]);
  }
}

fizzBuzz([1, 4, 6, 8, 15, 20]);

/**
 * Ejercicio 2: Escalera
 *
 * Crea una función que reciba un número entero 'n' y dibuje una "escalera"
 * utilizando el carácter '#' y espacios en blanco.
 * La escalera debe tener 'n' escalones.
 * El último escalón no debe tener espacios a la derecha.
 *
 * Ejemplo para n = 4:
 * [#]
 * [#, #]
 * [#, #, #]
 * [#, #, #, #]
 */
function escalera(escalones, bloque) {
  const resultado = [];

  for (let i = 0; i < escalones; i++) {
    const escalon = [];
    escalon.push(bloque.repeat(i + 1));
    resultado.push(escalon);
  }

  return resultado;
}

console.log(escalera(5, "Juan"));

function parsearCadena(cadena) {
  let result = "";
  let cadenaParseada = cadena.replaceAll(" ", "");

  for (let i = 0; i < cadenaParseada.length; i++) {
    result += cadenaParseada[i].toLowerCase();
  }

  return result;
}

/**
 * Ejercicio 3: Reverse
 *
 * Escribe una función que tome una cadena de texto (string) como argumento
 * y retorne una nueva cadena con los caracteres en orden inverso.
 * No puedes usar el método `reverse()` de arrays.
 *
 * Ejemplo:
 * reverse("hola") debería retornar "aloh"
 */
function reverse(cadena) {
  // Tu código aquí
  let resultado = "";

  // replace =>  acepta 2 parametros 1ro es el elemento a reemplazar 2do es el valor con lo que vamos a reemplazar.
  let parseCadena = parsearCadena(cadena);

  for (let i = 0; i < parseCadena.length; i++) {
    const char = parseCadena[parseCadena.length - 1 - i];

    resultado += char;
  }

  return resultado;
}

console.log(reverse("Anita lava la tina"));

/**
 * Ejercicio 4: Palíndromos
 *
 * Crea dos funciones para verificar si una cadena de texto es un palíndromo.
 * Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha
 * que de derecha a izquierda, ignorando espacios, puntuación y mayúsculas/minúsculas.
 *
 * a) `esPalindromoConReverse(cadena)`: Utiliza la función `reverse` que creaste (o el metodo)
 * para comparar la cadena original con su versión invertida.
 *
 * b) `esPalindromoSinReverse(cadena)`: No uses el método `reverse()` de arrays
 * ni ninguna función de inversión de cadenas. Recorre la cadena y compara
 * los caracteres de forma manual.
 *
 * Ejemplos:
 * esPalindromoConReverse("Anita lava la tina") debería retornar true
 * esPalindromoSinReverse("La ruta nos aporto otro paso natural") debería retornar true
 */

function esPalindromoConReverse(cadena) {
  // Tu código aquí

  return parsearCadena(cadena) === reverse(cadena);
}

console.log(esPalindromoConReverse("anita lava la tina"));

function esPalindromoSinReverse(cadena) {
  // Tu código aquí
}
