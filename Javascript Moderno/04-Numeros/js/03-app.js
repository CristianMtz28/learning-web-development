/**Objeto Math */

let resultado;
resultado = Math.PI;
console.log(resultado);


let redondearArriba;
let redondearAbajo;


/*Redondear
Para que se pueda usar el método math, se debe declarar los parámetros dentro de los parentesis, no funciona si los declaramos ya que
la característica de este objeto es compartirle los valores en el parentesis
Redonde desde el .0 al .4 hacía abajo y el .5 hacía arriba*/

redondearArriba = Math.round(2.8); 
redondearAbajo = Math.round(2.2);

console.log(redondearArriba);
console.log(redondearAbajo);

/*.ceil
Si lo que queremos es redondear hacía arriba siempre sin importar el punto por ejemplo que saques en un examen 7.2 pero eso lo tomamos como 8 entonces
podemos usar .ceil */

let redondearSiempreArriba;

redondearSiempreArriba = Math.ceil(7.2);
console.log(redondearSiempreArriba); //Esto a pesar que mi número es 7.2 me mostrará un 8


/*.floor
Este siempre redondea hacía abajo*/

let redondearSiempreAbajo;

redondearSiempreAbajo = Math.floor(7.9);
console.log(redondearSiempreAbajo); //Esto a pesar que mi número es 7.9 me mostrará un 7

/*.sqrt
Este nos ayuda con la razíz cuadrada de un número*/

let raziCuadrada;

raziCuadrada = Math.sqrt(144);
console.log(raziCuadrada); //Esto nos muestra el resultado de la raíz cuadrada de 144 que es12

/**.abs 
Valor absoluto quiere decir que si tenemos un -200 solo traerá el 200 */

let valorAbsoluto;
valorAbsoluto = Math.abs(-200);
console.log(valorAbsoluto);

/**.pow
Tarerá la potencia de un número por ejemplo 3 elevado a la potencia de 2 es 9 */

let potencia;
let potencia2;
potencia = Math.pow(3,2);  //3 x 3 = 9
console.log(potencia);
potencia2 = Math.pow(2,4); //2 x 2 = 4 º 4 x 2 = 8 º 8 x 2 = 16 
console.log(potencia2);

/*Sacando el mínimo de números */
let minimo;
minimo = Math.min(3,5,1,12,7,-28);
console.log(minimo); //Nos muestra el número más pequeño incluyendo números negativos

/*Sacando el mínimo de números */
let maximo;
maximo = Math.max(3,5,1,12,7,-28);
console.log(maximo); //Nos muestra el número más pequeño incluyendo números negativos

/*Obteniendo un número random */
let random;
random = Math.random();
console.log(random); //Casi siempre nos da un número flotanto como un 0.....

/*Obteniendo un número random dentro de un rango por ejemplo del 0 al 100*/
let randomCeroCien;
randomCeroCien = Math.floor(Math.random() * 100);
console.log(randomCeroCien); //Aquí con la fusión entre floor que redondeamos hacía abajo y multiplicado por 100 entonces nos da un número entre el 0 y el 100
//No usamos ceil porque cabe la posibilidad que salga un número random original que multiplicado por cien sea 101 y entonces ya no estaría la regla del 0 al 100