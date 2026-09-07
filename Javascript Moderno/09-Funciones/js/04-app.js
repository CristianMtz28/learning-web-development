/*Diferencia entre función y método */

const numero1 = 20;
const numero2 = '20';

/*Aunque básicamente son lo mismo los métodos y las funciones, la forma en que son nombrados
ya sea método o función tiene que ver con el contexto en el que son utilizadas*/

console.log( parseInt(numero2) ); //Esto es una función 

//La sintaxis de una función es nombreDeLaFuncion seguido de un parentesis ()

console.log(numero1.toString()); //Esto es un método

//La diferencia es la sintaxis cuando tienes el nombre de una variable o de un objeto seguido de
//un punto y después el nombre del método significa que es un método