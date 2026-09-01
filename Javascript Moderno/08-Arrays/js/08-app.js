/*Destructing de arrays*/

/*Anteriormente vimos que el destructing de objetos consiste en sacar un valor del objeto
y ponerlo en su propia variable; en este caso sacamos las 3 variables:
const { nombre, precio, disponible } = producto
Y así ya cada unotse guarda en su propia variable es por eso que podemos imprimirlo sin ningún
problema
*/

const producto = {
    nombre: `Monitor de 20 pulgadas`,
    precio: 300,
    disponible: true
}

const { nombre, precio, disponible } = producto;
console.log(producto);
console.log(nombre);
console.log(precio);
console.log(disponible);

/**En el destructing de arrays ocurre algo similar */

const numeros = [10, 20, 30, 40, 50];

const [primero, nike, variable, starbucks, cincuenta] = numeros;

console.log(primero); //Esto nos da 10 porque sacamos el primer elemento en la posición 0
console.log(nike); //Esta nos da 20 porque cae en la segunda posición

/*A diferencia del objeto podemos nombrar la variable como queramos, es por eso que
le pusimos primero y a las demás otro nombre para corroborar

Si quisieramos sacar solo la información de la posición 3 que sería 40 deberíamos 
hacer algo similar a esto: 

const numeros = [, , 30, ,];

Así el elemento de las primeras posiciones quedan en una variable vacia, ejemplo:*/

const numeros2 = [10, 20, 30, 40, 50, 60];
const [ , , , tercerPosicion, , numero60] = numeros2;

console.log(tercerPosicion); //Aquí imprimimos lo que esta en la tercer posición en este caso 40
console.log(numero60);

/*También va a ser muy común que querramos el primer y el segundo valor y que el resto de elementos esten en su 
propio arreglo */

const numeros3 = [10, 20, 30, 40, 50, 60];
const [primer, segundo, ...tercero] = numeros3;

console.log(tercero); //Aquí se imprimiría 30, 40, 50 y 60 en su propio arreglo