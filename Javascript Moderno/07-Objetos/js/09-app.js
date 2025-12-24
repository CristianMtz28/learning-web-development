"use strict";
/*Seal
Es similar a Freeze, la diferencia es que no se pueden agregar ni eliminar propiedaes pero sí se pueden modificar
las existentes.*/

const producto = {
    nombre: `Monitor de 20 pulgadas`,
    precio: 300,
    disponible: true
}

Object.seal(producto);

/*Por ejemplo si quiero colocar: */
//producto.imagen = 'imagen.jpg';

/*Esto no es posible ya que Seal no permite agregar o eliminar. Pero si queremos modificar el precio,
por ejemplo a 200 */
producto.precio = 200;

//Aquí sí nos deja sin ningún problema. Nota: Tuve que comentar la adición de la imagen ya que me estaba dando error por el seal
console.log(producto);

//De igual forma si queremos comprobar si un objeto esta sellado, se puede ver de la siguiete manera:

console.log(Object.isSealed(producto)); //Nos devolverá true o false dependiendo del caso