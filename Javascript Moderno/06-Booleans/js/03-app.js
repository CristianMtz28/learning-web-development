//Buenas practicas para booleans

//Uno de los errores más comunes es tener un código similar a este:

const autenticado = true;

if (autenticado === true) {
    console.log(`Sí, sí puedes ver Netflix`);
} else {
    console.log(`No, no puedes ver Netflix`);
}

//Esto aunque no esta mal del todo, es redundante y se entiende en el código que si autenticado es igual a true debe permitir
//el acceso. Según el profesor, puede ser que incluso no se contrate a gente por escribir así el código, lo ideal sería
//escribirlo de la siguiente manera:

const autenticado2 = false;

if (autenticado2 ) {
    console.log(`Sí, sí puedes ver Netflix`);
} else {
    console.log(`No, no puedes ver Netflix`);
}

//Ya que compara en primera instancia si el true o false
//Otra forma es trabajar con un operador ternario

console.log(autenticado ? 'Sí, esta autenticado' : 'No esta autenticado'); //Una joya usar este operador, muack