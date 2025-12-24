/*Agregar o eliminar propiedades de un objeto
*/

const producto = {
    nombre: `Monitor de 20 pulgadas`,
    precio: 300,
    disponible: true
}

//Agregar nuevas propiedas al objeto
//Para eso se usa la sintaxis de punto

producto.imagen = 'imagen.jpg';

//Si queremos eliminar una propiedad de un objeto se usa:

delete producto.disponible;

console.log(producto);
