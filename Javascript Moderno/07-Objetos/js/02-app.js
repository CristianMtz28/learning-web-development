/*Como acceder a los valores de un objeto

Los objetos tienes la sintaxis de punto

console.log(producto.nombre);
o
console.log(producto[nombre]);
*/

const producto = {
    nombre: `Monitor de 20 pulgadas`,
    precio: 300,
    disponible: true
}

console.log(producto);
console.log(producto.nombre);
console.log(producto[`precio`]);