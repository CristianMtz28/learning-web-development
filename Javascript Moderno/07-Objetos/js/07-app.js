//El problema con los objetos

/**Si  recordamos una variable con const no puede ser reasignada. Sin embargo los objetos sí 
 * se pueden reasignar. Como en el 03-app.js que le añadimos un valor en este caso imagen
 * a nuestro objeto
 * 
 * Por ejemplo:
 * 
*/

//Tenemos este objeto
const producto = {
    nombre: `Monitor de 20 pulgadas`,
    precio: 300,
    disponible: true
}

//Pero si asignamos:

producto.disponible = false;

//Nos arrojará el objeto con el avlor de false
console.log(producto);

/*Esto pasa porque una variable aunque este declarada como const al estar en un objeto sus propiedades sí se pueden 
reescribir o eliminar. Incluso si pones el delete también puede eliminar estos valores dentro del objeto
 */

delete producto.precio;

console.log(producto); //Aquí ya no tenemos el precio