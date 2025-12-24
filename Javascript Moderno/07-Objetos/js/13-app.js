"use strict"
/*Tres métodos para objetos, keys, values y entries */


const producto = {
    nombre: `Monitor de 20 pulgadas`,
    precio: 300,
    disponible: true
}


console.log(Object.keys(producto)); /*Este nso devuelve las llaves/propiedades de nuestro objeto
en pocas palabras el nombre, precio y disponible en forma de arreglo, pero sin los valores, solo nos
devuelve la llave del objeto, nada más esto nos puede ayudar para saber
si un objeto esta vacio o que llaves posee*/

console.log(Object.values(producto)); /*Este a diferencia de keys, nos devuelve el puro valor de la llave
pero sin la llave o sea nos devuelve 'Monitor de 20 pulgadas, 300 y true, pero sin las llaves; de igual
forma nos lo regresa en un arreglo*/

console.log(Object.entries(producto)); /*Este nos devuelve 2 arreglos donde cada uno de los arreglos son las
llaves y el otro arreglo los valores y los relaciona por la posición, por ejemplo la primer posición de un
arreglo siempre es 0, entonces el primer arreglo diria 0:nonbre y el segundo 0:'Monitor de 20 pulgadas'*/