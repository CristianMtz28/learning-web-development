/*Como acceder a los valores de un arreglo */

const numeros = [10,20,30,40,50];

console.log(numeros);

/*Con console.table te permite ver el arreglo de una manera más ordenadajunto
con la posición donde se encuentra el valor */

console.table(numeros);

/*Supongamos que me gustaría acceder al 30, tenemos que acceder con base a su posición
que esta en el indice 2 */

console.log(numeros[2]); //Aquí accedemos a 30
console.log(numeros[0]); //Aquí accedemos a 10
console.log(numeros[20]); //Si accedemos a una posción que no existe, crea la variable pero
//la coloca como undefined