// Funciones de Javascript INICIO

function hello() {
  console.log("Hello World...");
  console.log("Trabajando con Javascript");
}
hello();


function hello2() {
  return "Hello World con return...";
  // puede retornar cualquier tipo de dato, ejemplo un objeto, un arreglo, un string, un numero, etc.
}
console.log(hello2());


function hello3() {
  return function () {
    return "Hello World con return y funcion anonima...";
  };
}
console.log(hello3()());

// Funciones de Javascript FIN
console.log("--------------------------------------------------");





// Parametros de Funciones INICIO

function saludo(nombre) {
  console.log(`Hola ${nombre}`);
}
saludo("Juan");
saludo("Pedro");
saludo("Carlos");




function sumar(a, b) {
  return `La suma es: ${a + b}`
}
console.log(sumar(50, 50));


function indefinida(a, b){
    console.log(a + b);
}
console.log(indefinida(0));


function resta(a = 0, b = 0) {
    return `La resta es: ${a - b}`
}
console.log(resta(100, 50));

// Parametros de Funciones FIN