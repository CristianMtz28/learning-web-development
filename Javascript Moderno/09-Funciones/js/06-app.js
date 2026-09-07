/*Paramteros por default 

Muchas veces vas a mandar a llamar tus funciones y no vas a tener los parametros/valores que son necesarios
para que esa función realice el código para el que fue diseñado y algunas veces va a ser obligatorio.

Por ejemplo en una transferencia bancaria es obligatorio tener la cuenta bancaria a la que se le van a ingresar 
fondos y también la cantidad. Pero otras veces si no te presentan datos puedes presentar información por default

*/

function saludar(nombre = 'Desconocido', apellido = ''){ 
    console.log(`Hola ${nombre} ${apellido} bienvenido a tu perfil`)
}

/*En la declaración de la funcion:

function saludar(nombre = 'Desconocido', apellido = ''){

Vemos que si el usuario no pone nombre le va a colocar por defecto 'Desconocido'
Y también estamos dejando el apellido vacio '' para que no coloque nada en especifico y sea solo un espacio 

Entonces si hago lo siguiente:
*/

saludar('Cristian', 'Martínez'); //Imprime el nombre completo
saludar('Cristian'); //Imprime solo 'Hola Cristian con el espacio al final
saludar(); //Imprime Hola Desconocido 