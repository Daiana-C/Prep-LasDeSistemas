// No cambies los nombres de las funciones.

//function esVocal(letra) {
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //Escribe tu código aquí
  //let vocal = "aeiou"
  //if (vocal.indexOf(letra) === -1) {
  //  return "Dato incorrecto";
  //  } else {
  //  return "Es vocal";
  //}
//}


function colors(color) {
  /*it('should return \'This is {color}\'', function() {
    expect(colors("blue")).toBe('This is blue');
    expect(colors("red")).toBe('This is red');
    expect(colors("green")).toBe('This is green');
    expect(colors("orange")).toBe('This is orange');
  });
  it('should return \'Color not found\' if there is no argument or the argument is none of the expected ones', function() {
    expect(colors()).toBe('Color not found');
    expect(colors("pink")).toBe('Color not found');
  });
}); */

if(color === "blue"){
  return "This is blue"
} else if (color === "red"){
return "This is red"
} else if (color === "green"){
return "This is green"
} else if (color === "orange"){
  return "This is orange"
} else {
return "Color not found"
}

}

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if(x>y){
    return x
  } else {
  return y
  }
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  if(edad >= 18){
    return "Allowed"
  } else {
  return "Not allowed"
  }
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  if(status === 1){
    return "Online"
  } else if (status === 2){
  return "Away"
  } else {
  return  "Offline"
  }


}

function saludo(color) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "color" es "aleman", devuelve "Guten Tag!"
  // Si "color" es "mandarin", devuelve "Ni Hao!"
  // Si "color" es "ingles", devuelve "Hello!"
  // Si "color" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  if(color === "aleman"){
    return "Guten Tag!"
  } else if (color === "mandarin"){
  return "Ni Hao!"
  } else if (color === "ingles"){
  return "Hello!"
  } else {
  return "Hola!"
  }

}


function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero === 10 || numero === 5){
    return true
  } else {
    return false
  }

}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero < 50 && numero > 20){
    return true
  } else {
    return false
  }

}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  if (numero % 1 === 0){
    return true
  } else {
    return false
  }
}


function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if (numero % 3 === 0 && numero % 5 === 0){
    return "fizzbuzz"
  } else if (numero % 5 === 0){
    return "buzz"
  } else if (numero % 3 === 0){
    return "fizz"
  } else {
    return numero
  }

}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo" 3
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"  2 
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor. 4
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error". 1
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false.  5
  if (num1 === 0 || num2 === 0 || num3 === 0){
    return "Error"
  } else if (num1 < 0 || num2 < 0 || num3 < 0){
    return "Hay negativos"
  } else if (num1 > num2 && num1 > num3 && num1 > 0){
    return "Número 1 es mayor y positivo"
  } else if (num3 > num1 && num3 > num2 ){
    return num3 + 1
  } else {
    return false
  }

}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos

  if (numero === 1 || numero === 0) {
    return false
  }

  for (var i = 2  ; i < Math.sqrt(numero) ; i++ ){
  if (numero % i === 0){
    return false
    } 
  }
  return true

}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  if (valor){
    return "Soy verdadero"
  } else {
    return "Soy falso"
  }

}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  if (numero.toString().length === 3){
    return true
  } else {
    return false
  }

  
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle ... while.

  var limite = numero + (5*8)
  while (numero < limite){
    numero += 5
  }
  return numero

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  //esVocal,
  colors,
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tieneTresDigitos,
  doWhile
};
