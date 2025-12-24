/*Métodos útiles para strins */

const producto = "Monitor 20 pulgadas";

console.log(producto);

//.replace
/*Reemplazar cadenas de texto */

console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Pantalla'));


//.slice
/*Extraer o cortar texto */
console.log(producto.slice(0, 10)); //Se debe pasar la posición de donde quieres que corte y hasta donde cortará 
console.log(producto.slice(8)); //Si solo le pasamos un valor cortará a de la posición 0 hasta la posición que le indiquemos, en este caso cortatía la palabra Monitor
console.log(producto.slice(7, 5)); //Si el primer valor es mayor que el segundo, no va a cortar hacía atrás, simplemente no hará nada


//.substring
/*Alternativa a Slice.
La diferencia entre slice y substring es que si le pasamos la primer posición mayor y el segundo menor, substring modifica el código y los acomoda en este casi quedaría 5 y 7 */
console.log(producto.substring(0, 10)); 
console.log(producto.substring(7, 5)); //Aquí substring nos lo modifica a console.log(producto.slice(5, 7));


//charAt
/*Este es similar a substring y slice a diferencia que solo toma un caracter, normalmente
cuando iniciamos sesión en Google sin foto nos ponen un circulito con nuestras iniciales, en mi cas CM, para esto podemos ver el siguiente ejemplo:
*/
const usuario = 'Cristian';
const apellido = 'Martínez';

console.log(usuario.charAt(0), apellido.charAt(0)); //Y aquí estamos mostrando la primer letra de cada constante que es nuestro nombre