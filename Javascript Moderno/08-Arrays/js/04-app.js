/*Agregar nuevos valores a un array */

/*Al igual que en un objeto, en los arreglos también se pueden modificar
a pesar de estar declarados con un const */

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio'];
console.table(meses);


//A pesar de estar declarado como const si yo ejecuto:

meses[0] = 'Nuevo mes';

//Sus valores sí se pueden modificar

console.table(meses);

/*Podemos agregar valores al arreglo si lo declaramos en una posición que no este ocupada.
Por ejemplo: */

meses[10] = 'Ultimo mes';

console.table(meses); 

/*Aquí nos imprime el valor de la posición 10 que le asigne, obviamente si hubiera puesto algo como
meses[2] = 'Ultimo mes'; Entonces marzo se hubiera convertido en 'Ultimo mes'
*/