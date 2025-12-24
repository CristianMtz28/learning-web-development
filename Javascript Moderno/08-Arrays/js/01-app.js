/*Areglos */

/*Un arreglo aunque en estructura y quizá en sintaxis es algo similar a un objeto, debemos saber que no
son iguales, los arreglos sirven bastante en ejemplos como carritos de compra y funcionan para agrupar elementos
del mismo tipo. Mientras que un objeto es una variable que va a agrupar información de un objeto. Un Arreglo puede
tener multiples objetos que sean iguales. 

Por ejemplo un producto en un carrito de compra de amazon, puedes comprar una computadora pero también ropa, ambos tienen
sus propias propiedades, como nombre, precio, disponibilidad, etc, incluso varian entre ellos, como la computadora tiene
especificaciones y la ropa tallas, pero ambos son un producto que puedes comprar, en el arreglo puedes agrupar esos 2 objetos
para comprarlos ya que son productos y al agrupar esos elementos que en este caso son productos puedes hacer la compra del
arreglo completo

Los arreglos se definen por corchetes, los objetos por llaves, el objeto tiene llave y valor y el arreglo solo valores

*/

const numeros = [10,20,30];

//Otra forma de crear objetos pero no es tan usada

const meses = new Array ('Enero', 'Febrero', 'Marzo');

//Imprimiendo un arreglo
console.log(numeros);

/*Podemos ver que el arreglo dice (3) ya que son los tres valores que tenemos en el arreglo y los arreglos comienzan 
en la posición 0, por lo que no es 1=10, 2=10 si no 0=10, 1=20 */

console.log(meses);

//Un arreglo que contiene dato de todo tipo

const deTodo = ['Hola Mundo', 10, true, "sí", null, {nombre: 'Criss', trabajo: 'Dar lastima'}, [10,20]];

console.log(deTodo);

/*En un arreglo podemos tener todos estos datos sin ningún problema. Podemos pensarla como una variable que puede tener multiples
elementos incluso un arreglo dentro de otro arreglo*/