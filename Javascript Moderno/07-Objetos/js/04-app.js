/*Destructing de objetos*/

const producto = {
    nombre: `Monitor de 20 pulgadas`,
    precio: 300,
    disponible: true
}

//Supongamos que quiero acceder al nombre; antes para "sacar" 
//propiedades de un objeto se debía hacer de la siguiente manera:

//const nombre = producto.nombre;
//console.log(nombre); //Y así nombre ya es una variable independiente.

//Sin embargo con Ecmascript 6 tenemos lo que se conoce como object destructuring

/*const { nombre } = producto;
const { precio } = producto;
console.log(nombre);
console.log(precio);*/

//Podemos simplificarlo de la siguiente manera:

const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);

/*De esta forma ya tenemos las propiedades del objeto en su propia variable y lo bueno es que
destructuring además de extraer el valor, crea la variable*/