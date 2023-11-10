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
