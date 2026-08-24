/*Añadir nuevos elementos al inicio y al final de un arreglo */

const meses = ['abril', 'mayo', 'junio'];
console.table(meses);

/*Hasta el momento lo hemos hecho así: */

meses[3] = 'julio';
meses[4] = 'agosto';
meses[5] = 'septiembre';
console.table(meses);

/*Y aquí ya añadimos  'julio', 'agosto', 'septiembre' al arreglo pero lo estamos haciendo de manera
manual por lo que si me piden añadir 200 elementos pues sería muy complicado y muy tardado, además
que al hacerlo manual debemos saber la posición que esta vacante dentro del arreglo; es por eso que
podemos hacerlo de la siguiente forma que son los métodos del arreglo 

Agregar al final del arreglo: 
*/

meses.push('octubre', 'noviembre', 'diciembre');
console.table(meses);

/*Y para agregar al principio del arreglo y recorrer los elementos por posición sería: */

meses.unshift('enero', 'febrero', 'marzo');
console.table(meses);


console.log('--CARRITO DE COMPRA--');

/*Ejemplo con Carrito de compra.
Vamos a empezar con un carrito vacio:
*/

const carrito = []; //Carrito es igual a un arreglo vacio porque no sabemos que va a agregar el usuario de los
//miles de productos que hay en Amazon, por ejemplo

const producto = {
    nombre: "Monitor 32 pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Smartphone",
    precio: 800
}

const producto3 = {
    nombre: "Teclado",
    precio: 300
}

carrito.push(producto, producto2);
carrito.unshift(producto3); //agregando el producto 3 al principio del arreglo
console.table(carrito);