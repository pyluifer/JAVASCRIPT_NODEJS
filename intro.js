//unicamente funciona sobre nodejs
const functions = require("./functions");


functions.saludar();

var result = functions.sumar(5,5);
console.log("resultado:", result);

let band = functions.validar("a");
console.error(band);

band = functions.validar("Hola mundo");
console.log(band);

let numeros = functions.mayorque(10);
console.log(numeros);

let numFiltro = functions.filtro(10);
console.log(numFiltro);