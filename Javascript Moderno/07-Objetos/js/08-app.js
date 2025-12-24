"use strict";

//Métodos para los objetos
/*const producto = {
    nombre: `Monitor de 20 pulgadas`,
    precio: 300,
    disponible: true
}

producto.disponible = false;
producto.imagen = 'imagen.jpg';

console.log(producto);

//Hasta aquí vimos como añadir una propiedad, en este caso imagen y disponible lo modificamos

Cómo le hacemos para que un objeto se comporte como una constante. Para ello debemos 
habilitar lo que es el "Modo estricto" o "use strict"; en el renglón 01. Básicamente el use strict,
es como decir "Evalua este código de javascript de forma estricta, no permitas malas practicas en este documento

Por ejemplo en javascript sin el modo estricto podemos escribir:

x = 20;
console.log(x);
Y la consola nos mostraría 20, pero con el "use strict" nos va a decir que la variable no ha sido creada

Ahora vamos a usar los Object Methods. Así que reescribamos todo el objeto de arriba
*/

const producto = {
    nombre: `Monitor de 20 pulgadas`,
    precio: 300,
    disponible: true
}
/*El Object freeze se debe poner después del objeto a congelar, ya que si lo ponemos después de la asignación de una
propiedad o una modificación lo congelará después de eso según donde lo pongamos debido a como corre el DOM*/
Object.freeze(producto);

//Ahora si intentamos modificarlo
//producto.disponible = false;
//producto.imagen = 'imagen.jpg';

//Al llamarlo nos va a dar un error
console.log(producto);

//Y así lo tenemos más similar a lo que es un const. Si queremos saber si un objeto esta congelado debemos usar:

console.log(Object.isFrozen(producto)); //Y nos devolverá un true
