/*Variables */

/*Existen 3 formas de llamar variables en javascript var, let y conts, estaremos usando let y const */

var nomnbre = 'Cristian';
let nombre2 = 'Daniel';
const apellido = 'Martínez';

console.log(nomnbre);


//Ejemplo del video

var producto = 'Monitor de 24 pulgadas'

producto = 'Monitor de 19 pulgadas'; //Una variable ya sea escrita con var o con let se pueden reasignar

producto = 20;  //Puede tener números, strings, arrays, objects ya que no especifica el tipo de dato


//Javascript es un lenguaje dinamico por la misma razón que no especifica el tipo de dato

//Se pueden inicializar variables sin valor y asignarlo después

var diisponible;

disponible = true;

//También se pueden inicializar multiples variables de la siguiente manera

var categoria = 'Computadora',
    marca = 'Mac',
    calificacion = '5 estrellas';  //Aquí en el final sí debe tener su puno y coma

//Los nombres de las variables no pueden inicializar con un numero

//var 99dias; //Esto esta mal
var dias99;


//Nombrando con camelCase que es la forma más tradicional de hacerlo

var nombreProducto; //camelCase
var nombre_producto;  //Snake
var NombreProducto; //PascalCase

//El más común es camelCase y es el que voy a usar alv
