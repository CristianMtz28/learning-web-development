/*Diferencia entre function expression y function declaration

Además de la sintaxis y la forma en la que se declara la función también es el poder utilizar o no
el llamado de la función antes de crear la función en ambos ejemplos de abajo estamos llamando la función
en este caso sumar(); y sumar2(); sin embargo la única que se ejecuta es la forma declarativa o la Function
Declaration; esto sucede porque Javascript "se ejecuta en 2 vueltas" por así decirlo, que es el tema del hoisting,
en la primer vuelta lo que hace javascipt es escanear el documento y registra todas las funciones y determina que
variables va a crear, o sea es la etapa de creación, ahí empieza a registrar todo y en la segunda vuelta ya esta 
registrado y empieza a ejecutar.
Entonces en una función declarativa javascript lee primero la función vamos a decir que ignora la invocación
y en la segunda vuelta ya la ejecutiva
En la function expression al ser declarada de una manera más similar a una constante la función no se lee igual
ya que sería algo como esto:

const sumar2;
sumar2();

Aquí estaríamos creando una variable y llamando una función es por eso que la sintaxis de Function Expression no
se ejecuta como la Function Declaration ya que no se declara de la misma manera
*/

//Function Declaration
sumar();
function sumar() {
    console.log(2+2);
}


//Function Expression
sumar2();
const sumar2 = function (){
    console.log(3+3);
}