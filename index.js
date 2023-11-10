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
    return `La suma es: ${a + b}`
}
console.log(indefinida(0));


function resta(a = 0, b = 0) {
    return `La resta es: ${a - b}`
}
console.log(resta(100, 50));

// Parametros de Funciones FIN
console.log("--------------------------------------------------");






// Objetos de Javascript INICIO

const user = {
    //PROPIEDADES // PROPERTIES
    name: "Juan",
    lastname: "Perez",
    age: 30,
    address: {
        country: "Peru",
        city: "Lima",
        street: "Av. Lima 123"
    },
    friends: ["Carlos", "Pedro", "Maria"],
    active: true,
    // METODOS // METHODS
    sendMail: function(){
        return "Enviando Mail...";
    }
}

console.log(user.name);
console.log(user.lastname);
console.log(user.address.street);
console.log(user.friends[1]);
console.log(user.active);
console.log(user.sendMail());

// Objetos de Javascript FIN
console.log("--------------------------------------------------");






// Shorthand property names INICIO

const name = "notebook";
const price = 300000;

const newProduct = {
    name,
    price
}
console.log(newProduct);

// Shorthand property names FIN
console.log("--------------------------------------------------");





// Manipulacion del DOM INICIO

const title = document.createElement('h1');
title.innerText = "Titulo agregado desde Javascript";

const button = document.createElement('button');
button.innerText = "Click me";
button.addEventListener('click', function(){
    alert("Alerta con Event handler :3");
    title.innerText = "Titulo modificado con Event handler";
});
document.body.append(title);
document.body.append(button);

// Manipulacion del DOM FIN
console.log("--------------------------------------------------");






// Objetos como parametros INICIO

function printUser(user){
    return '<h1>hola ' + user.name + '</h1>'
}

console.log(printUser(user));
document.body.innerHTML = printUser(user);

// Objetos como parametros FIN
console.log("--------------------------------------------------");






// Destructuracion de Objetos INICIO

function imprimirUsuario({name, lastname}){
    return '<h1>hola ' + name + " " + lastname + '</h1>'
}
console.log(imprimirUsuario(user));
document.body.innerHTML = imprimirUsuario(user);

// Destructuracion de Objetos FIN
console.log("--------------------------------------------------");




// Funciones Anonimas INICIO

console.log(function(){
    return 'starting...';
}());

console.log(function start(){
    return 'starting...con nombre ya no es anonima';
}());

console.log(function (){
    return 'starting...sin el ()';
});

const button1 = document.createElement('button');
button1.innerText = "Click...";

button1.addEventListener('click', function handlerClick(){
    alert("Alerta de una funcion anonima");
});

button1.addEventListener('click', function(){
    alert("Alerta de una funcion anonima");
});

document.body.append(button1);

// Funciones Anonimas FIN