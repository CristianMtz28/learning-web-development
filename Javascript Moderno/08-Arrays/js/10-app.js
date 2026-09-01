/*Foreach y map */

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

//Foreach
/*carrito.forEach( function(producto){
    console.log(`Nombre: ${producto.nombre} - Precio: ${producto.precio}`); 
});*/

//console.log('---')

//Map
/*carrito.map( function(producto){
    console.log(`Nombre: ${producto.nombre} - Precio: ${producto.precio}`); 
});*/

/*Si vemos es la misma sintaxis solo cambio el .foreach por el .map  la diferencia es que .map te crea
un arreglo nuevo, es decir que va a llenar una variable con un nuevo arreglo; es decir:*/

//Foreach
const nuevoArreglo = carrito.map( function(producto){
    return`Nombre: ${producto.nombre} - Precio: ${producto.precio}`; 
});

console.log('---')

//Map
const nuevoArreglo2 = carrito.forEach( function(producto){
    return`Nombre: ${producto.nombre} - Precio: ${producto.precio}`; 
});

console.log(nuevoArreglo);
console.log(nuevoArreglo2);

/*Aquí vemos que nuevoArregló sí imprime el arreglo ya que lo estamos utilizando con .map pero el
nuevoArreglo2 no imprime nada y esta como undefined debido a que  forEach no crea una nueva variable */