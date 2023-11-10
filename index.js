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
    alert("Alerta de una funcion anonima sin nombre");
});

document.body.append(button1);

// Funciones Anonimas FIN






// Arrow Functions INICIO

function add(x, y){
    return x + y;
}

const add2 = (x, y) => {
    return x + y;
}

// Arrow Functions FIN
console.log("--------------------------------------------------");





// Inline Arrow Functions INICIO

const showtext = () => {
    return 'Hola Mundo';
}

//return implicito
const showtext2 = () => 'Hola Mundo';
const showNumber = () => 100;
const showBoolean = () => true;
const showArray = () => [1, 2, 3];
const showObject = () => ({name: 'Juan', lastname: 'Perez'});
const showFunction = () => function(){};


console.log(showtext());
console.log(showtext2());
console.log(showNumber());
console.log(showBoolean());
console.log(showArray());
console.log(showObject());
console.log(showFunction());

// Inline Arrow Functions FIN




// Return en funciones INICIO

const buttonAlert = document.createElement('button');
buttonAlert.innerText = "Click Alert";

const isAuthorized = () => false;

buttonAlert.addEventListener('click',() => {
    if(isAuthorized()){
        alert("Autorizado¡¡¡");
    }else{
        alert("No autorizado :C");
    }
})

document.body.append(buttonAlert);

// Return en funciones FIN







// String literals INICIO

const background = 'red';
const color = 'white';
const isAuthorized2 = () => true;

const buttonAlert2 = document.createElement('button');
buttonAlert2.innerText = "Click Alert 2";
buttonAlert2.style = `background-color: ${isAuthorized ? 'blue' : background}; color: ${color}`;

buttonAlert2.addEventListener('click',() => {
    if(isAuthorized2()){
        alert("Autorizado¡¡¡");
        document.body.style = `background-color: #202020; color: ${color}`;
    }else{
        alert("No autorizado :C");
        document.body.style = `background-color: ${background}; color: ${color}`;
    }
})

document.body.append(buttonAlert2);

// String literals FIN
console.log("--------------------------------------------------");






// Metodos de arrays (map, filter, foreach, concat) INICIO

const names = ['Juan', 'Pedro', 'Maria', 'Carlos', 'Jose'];
const lastnames = ['Perez', 'Gomez', 'Lopez', 'Garcia', 'Diaz'];

const newName = names.map(function(name){
    return `hola ${name}`;
});

const newName1 = names.find(function(name){
    if(name === 'Juan'){
        return name;
    }
});

const newName2 = names.filter(function(name){
    if(name === 'Pedro'){
        return name;
    }
});

const newName3 = names.filter(function(name){
    if(name !== 'Pedro'){
        return name;
    }
});

console.log(names);
console.log(newName);
console.log(`Es igual a ${newName1}`);
console.log(`Es igual a ${newName2}`);
console.log(`Es diferente a Pedro: ${newName3}`);
console.log(names.concat(lastnames));

// Metodos de arrays (map, filter, foreach, concat) FIN
console.log("--------------------------------------------------");





// Spread operator INICIO

console.log([...names, ...lastnames]);


const book = {
    id: 1,
    title: 'Harry Potter',
    description: 'Lorem ipsum dolor sit amet consectetur',
    autor: 'J.K. Rowling',
    price: 100,
}

const discount = {
    discount: true,
    discountPrice: 50
}

const bookWithDiscount = {
    ...book,
    ...discount
};

console.log(book);
console.log(discount);
console.log(bookWithDiscount);

// Spread operator FIN
console.log("--------------------------------------------------");





// Ecmascript modules INICIO

import { add1, multiply, subtract, texto, puntos } from './operations.js';
console.log(`El resultado de la suma es: ${add1(5, 5)}`);
console.log(`El resultado de la multiplicacion es: ${multiply(5, 5)}`);
console.log(`El resultado de la resta es: ${subtract(5, 5)}`);
console.log(`EL texto es: ${texto}`)
console.log(`Los puntos son: ${puntos}`)

// Ecmascript modules FIN