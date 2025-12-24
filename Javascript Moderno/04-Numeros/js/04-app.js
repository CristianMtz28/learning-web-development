/**Orden de las operaciones */
/**Esto es igual que en la escuela, primero se realizan las multiplicaciones, luego
 * las divisiones, seguidos de la suma y por último la resta
 */

let resultado = 20 + 30 * 2; //Esto es lo mismo a 20+(30*2) debido a que hace primero la multiplicación

/*Si queremos que se haga primero la suma y luego la multiplicación, le hacemos igual que en la escuela y le ponemos un parentesis */
let resultado2 = (20 + 30) * 2;

/*Otro ejemplo tener un carrito de compras donde sumamos el precio de los productos y hacemos un descuento del 20%*/
let resultado3 = (20 + 30 + 40 + 50 + 60) * 0.2; //Donde hacemos la suma de los productos y luego lo multiplicamos por 0.2 que es el 20%

/*Ahora si queremos aplicar un impuesto por ejemnplo el 16% de IVA se hace igual*/
let resultado4 = (10 + 20 + 30 + 40) * 1.16; //Donde hacemos la suma de los productos que nos da 100 entonces sumamos el 16% del IVA y nos da 115.99999 o sea 116

console.log(resultado);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4.toFixed(2)); //Esto nos lo redondea el resultado de 115.99999999 a 116.00 pero nos lo convierte en string

/*Si queremos redondearlo en número podemos usar .ceil o .round */

let redondeado = Math.round(resultado4); //Esto ya nos devuelve el 116 en número
console.log(redondeado);