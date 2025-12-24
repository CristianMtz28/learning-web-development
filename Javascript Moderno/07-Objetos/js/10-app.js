"use strict";
/*Unir 2 objetos */

const producto = {
    nombre: `Monitor de 20 pulgadas`,
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

console.log(producto);
console.log(medidas);

//Para unir 2 objetos tenemos varias opciones una de ella es hacerlo con assign 

const resultado = Object.assign(producto, medidas);

console.log(resultado);

//Otra forma es el Spread Operator o Rest Operator

const resultado2 = { ...producto, ...medidas}
console.log(resultado2);