"use strict"

/*Creando objetos con Object Constructor */

//De momento hemos estado creando los objetos de esta forma que se llama Object Literal

const producto = {
    nombre: `Monitor de 20 pulgadas`,
    precio: 300,
    disponible: true
}

//Y este otro va a ser Object Constructor
/*Con el object constructor podemos dejar la función de crear objetos "lista" para crear cualquier objeto, así
nos evitamos en repetir algo como:

const producto2 = {
    nombre: `Monitor de 24 pulgadas`,
    precio: 500,
    disponible: true
}

const producto3 = {
    nombre: `Monitor de 32 pulgadas`,
    precio: 800,
    disponible: true
}

Si nos damos cuenta al crearlo como lo hemos estado haciendo con el Object Literal, estoy creando cada objeto en su variable, si
el día de mañana debemos añadir algo como las medida, deberíaomos hacerlo a cada uno.

Sin embarho si usamos el Object constructor nos simplifica el trabajo gracias también a la palabra reservada this, ya que con
el constructor tenemos algo así como "una fabrica" de crear objetos, veamos como:

*/

function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
} //Esto es el Object constructor y esta listo para crear nuevos objetos

//La forma de crear objetos es la siguiente:

const producto2 = new Producto('Monitor de 24 pulgadas', 500);
const producto3 = new Producto('Monitor de 32 pulgadas', 800);
const producto4 = new Producto('Pantalla Monitor de 50 pulgadas', 1000);

/*Vemos aquí como en vez de estar escribiendo uno por uno:

const producto2 = {
    nombre: `Monitor de 24 pulgadas`,
    precio: 500,
    disponible: true
}

const producto3 = {
    nombre: `Monitor de 32 pulgadas`,
    precio: 800,
    disponible: true
}

Solo estamos escribiendo una sola líena de código por cada objeto y si debemos añadir o quitar propiedades ya es más fácil
y sobre todo es más dinámico.

Sin embargo cabe mencionar y recalcar que aunque sea más dinamico el Object Constructor se utiliza más
el Object Literal

*/

console.log(producto);
console.log(producto2);
console.log(producto3);
console.log(producto4);