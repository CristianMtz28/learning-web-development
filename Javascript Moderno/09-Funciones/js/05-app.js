/*Párametros y argumentos en funciones 

En el ejemplo de la suma:

function sumar() {
    console.log(2+2);
}
sumar();

Aquí siempre el resultado va a ser 4 ya que no cambia nada y estamos declarando 2+2 sin embargo si
queremos que esto sea dinámico debemos utilizar los párametros y los argumentos.

Para que esta función sume diferentes valores tendría que tomar 2 parametros, dos valores
*/



function sumar(a,b) { //a y b son párametros de función
    console.log(a+b);
}
sumar(2,3); //Aquí 2 y 3 se le conocen como argumentos y los argumentos son los valores reales

/*Como pusimos en el comentario de arriba los parametros son más representativos ya que solo tomarían a y b sin
importar que es lo que contengan dentro puede ser un 20 o un 100 o un 2. Y los argumentos es lo que va a ser real 
ahí ya ponemos los valores reales*/

sumar(20,8);
sumar(200,184); 
sumar(124,321);

/*Como podemos observar los parametros de la función siguen siendo a y b mientras que los argumentos de la misma
ya son números diferentes y ya es más dinámica */

/*Otro ejemplo es cuando entras a X (antes twitter) ahí ya te muestran nuestro nombre, nuestro user y fotografía
probablemente tiene en una base de datos los valores y con una función ya lo muestra */

function saludar(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido} bienvenido a tu perfil`)
}

saludar('Cristian', 'Martínez');
saludar('Juan', 'De la torre');

/*Como podemos observa aquí ya no depende solo de números, estamos usando una función para un texto en especifico
y dependiendo los argumentos va a saludar así como en las redes sociales no todos nos llamamos igual entonces
la función no puede ser fija, sino debe ser dinámica */

/*Si nosotros solo llamamos un argumento y uno de los 2 o los 2 argumentos no los llamamos entonces nos mostrará
automáticamente como undefined */
saludar('Cristian'); //Hola Cristian undefined
saludar(); //Hola undefinded undefined

/**Para esto podemos dejar parámetros por default que veremos en la próxima práctica */