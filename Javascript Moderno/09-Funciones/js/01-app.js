/*Funciones 
Las funciones son una serie de procedimientos o instrucciones, es decir lineas de código que van a realizar una función
y una de las ventajas es que te permiten tener un código más ordenado y por lo tanto más fácil de mantener 
Otra ventaja es que son reutilizables, puedes  tener una función que valide un formulario y esa misma función replicarla
en todos los formularios, también puedes tener una función que envíe datos a un servidor y la puedes reutilizar 
multiples veces
Existen 2 formas de crear funciones en javascript la declaración de función y la otra es expresión de función */

/*Declaración de función - Function Declaration */

//Declarando la función function nombreDeLaFuncion(parametros) { lo que hace la función }
function sumar() {
    console.log(2+2);
}

//Llamando a la función nombreDeLaFuncion(); o sea el nombre de la función y el parentesis así se llama la función
sumar();
sumar();
sumar(); //Se puede reutilizar

/*En programación real  lo que hace un buen programador es que le den un problema y que sepa como dividir ese 
problema en pequeñas partes, el programar es más dividir que estar escribiendo cientos de líneas de arriba a abajo
como lo hemos estado haciendo ya que esto es solo enseñanza*/

/*Expresión de funcion - Function Expression */

const sumar2 = function (){
    console.log(3+3);
}

sumar2();

/*Esta forma es similar a declarar una variable.*/