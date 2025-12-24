//Undefined

let numero;

console.log(numero);  

//Aquí nos va a regresar un undefined, eso significa que la variable esta definida pero su valor no, 
//por lo tanto es undefined

//En el caso de null es más bien asignarlo

//NULL

let numero2 = null;
console.log(numero2); //Aquí la consola nos regresa null

//Si los comparamos

console.log(numero == numero2);  //Nos dice true a pesar de que numero no tiene un valor, eso usualmente lleva a comportamientos
//extraños, esto pasa debido a que son valores no definidos, es por eso que es mejor comparar con el ===
//Así podrás tener un código un poco mejor