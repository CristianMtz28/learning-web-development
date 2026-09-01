/*Foreach para iterar un array */

//Creamo un arreglo y adentro tiene objetos

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

/*Iterar sobre un arreglo*/

//Si hicieramos esto va a iterar por cada elemento del arreglo
for (let i = 0; i < carrito.length; i++ ) {
    console.log(carrito[i]); 
}

//Pero so quisieramos acceder a sus valores se empezaría a complicar las cosas
for (let i = 0; i < carrito.length; i++ ) {
    console.log(`Nombre: ${carrito[i].nombre} - Precio: ${carrito[i].precio}`); 
}

console.log('----');

//Aunque no hay nada de malo en un for loop sin embargo javascript tiene sus propios métodos para iterar
//sobre un arreglo que son más sencillos que esta sintaxis y también es parte de los ArrayMethods.

/*Foreach */

carrito.forEach( function(producto){
    console.log(`Nombre: ${producto.nombre} - Precio: ${producto.precio}`); 
});

/*Como podemos ver en la estructura del foreach cambia ya que incluimos una función llamada producto y esta función
producto se va a iterar por cada elemento que tengamos en el arreglo for each (por cada) así la estructura es
un poco más sencilla; ambas sirven de la misma manera */