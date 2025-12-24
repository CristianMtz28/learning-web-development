//Repeat y Split

//.repeat nos permite repetir una cadena de texto

const producto = "Monitor 20 pulgadas";

//const texto = ' en promoción'.repeat(3);
const texto = ' en promoción'.repeat(2,9);

console.log(texto);

console.log(`El producto ${producto} esta ${texto}`); //Aquí por el 2.9 lo muestra solo 2 veces

//si a .repeat le pasas un número en punto decimal como 2.4 o hasta 2.9 se seguirá mostrando el número 2 



/*.split
Split te va a permitir dividir un string en un arreglo, esto haciendo que lo que le pasemos a split sea lo que define que y que va a ser separado
para el arreglo*/

const actividad = 'Estoy aprendiendo javascript moderno'; //Esta cadena de texto tiene 4 palabras

console.log(actividad.split(" ")); //Aquí en split le estoy pasando el " " espacio entre las palabras, por lo tanto el arreglo me sacó 4 palabras 

/*Es muy útil por si tenemos un listado, por ejemplo, sitio web donde coloquemos nuestros hobbies normalmente se podría escribir de la siguiente manera; */

const hobbies = 'Leer, caminar, escuchar música, escribir, aprender a programas';

//Aquí con split podemos separarlo por comas para ver cada hobbie en el arreglo

console.log(hobbies.split(",")); //Aquí lo dividimos por la coma y vemos  la cadena de hobbies

//Algo que debe ser parecido a los hashtag en twitter debe ser el mismo split, por ejemplo:

const tweet = 'Aprendiendo javascript. #JSModernoConJuan';

console.log(tweet.split("#"));