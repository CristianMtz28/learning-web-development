/*Recorrer un array */

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio'];

console.table(meses);

/*Cuando visitas un carrito de compras se te enlistan todos los productos a los que le diste
me gutsa; en lugar de ir 

console.table(meses);
console.table(meses[0]);
console.table(meses[1]);
console.table(meses[2]);
console.table(meses[3]);

Pero esta sería contraproducente porque que tal si tiene 100 productos en el carrito, o 500 amigos en facebook
o 1000 me gusta entonces vamos a recorrer el arreglo
*/

console.log(meses.length) //Esto nos dice cuantos elementos hay en el arreglo, este sí empieza en 1 y no en 0

/*Entonces para poder recorrer un arreglo usamos un for, donde:

    let i = 0; Esto es con lo que inicia la variable i, la cual empezara con el valor 0 porque empezará en 
    la posición 0 del arreglo, que es enero, si le pusieramos 1 empezaría en febrero

    i < meses.lenght; = Aquí le estamos diciendo que se ejecute mientras meses.lenght sea menor al arreglo, por
    lo que esto no limita el arreglo si no que se adapta dependiendo cuantos elementos hay en el arreglo

    i++; = Es el número que irá encrementando el arreglo hasta toparse con el i < meses.lenght; en este caso
    de 1 en 1, hasta que llegue al tope

*/

for (let i = 0; i < meses.length; i++ ) {
    console.log(meses[i]); //Para poner los valores del arreglo debemos colocar la i que es lo que tiene la
    //posición dinámica (es decir el 0,1,2,3...) y con el meses le decimos que imprima los valores del arreglo
}