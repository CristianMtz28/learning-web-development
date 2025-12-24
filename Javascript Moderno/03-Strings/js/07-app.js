/* */

const producto = "Monitor 20 pulgadas";

console.log(producto);

/*toUpperCase
Sirve para poder cambiar toda la cadena de texto a mayúsculas
*/

console.log(producto.toUpperCase());

/*toLowerCase
Sirve para poder cambiar toda la cadena de texto a mayúsculas
*/

console.log(producto.toLowerCase());

/**Así como yo lo hacía antes, hay personas que ponen CristianMtz28@gmail.com y para eso podría servir toLowerCase*/

const email = 'CristianMtz28@gmail.com';

console.log(email);

/*Cambiando el correo a todo minúsculas */

console.log(email.toLowerCase());

/*Cambiando un número a un string */

const precio = 300;
console.log(precio);
console.log(precio.toString());

/*Los números que no estan entre comillas simples o comillas dobles son catalogados como números enteros; estos tienen las características de un número y podrías hacer operaciones con ellos
cuando queremos que el número sea un estring podemos usar el método toString()*/