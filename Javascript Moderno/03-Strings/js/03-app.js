//Uniendo 2 textos mediante la concatenación

const producto = 'Monitor de 20 pulgadas ';
const precio = '30 USD';

console.log(producto);
console.log(precio);

console.log(producto.concat(precio)); //Uniendo 2 variables mediante concat
console.log(producto.concat('en descuento')); //Se puede pasar no solo variables si no también strings definidos

console.log(producto + 'con precio de ' + precio); //Esta era una forma habitual que se puede encontrar.

//Es importante aprender a concatenar bien porque lo más probable es que cuando obtengamos información de una base de datos vengan solo los datos y se les debe dar formaro

console.log('El producto ' + producto + 'tiene un precio de' + precio);
console.log("El producto " , producto , "tiene un precio de" , precio);

//El problema de la sintaxis de + o de , es que puede haber errores para eso se creó la nueva sintaxis

console.log(`El producto ${producto} tiene un precio de $${precio}`);

//Y esta es una forma más cómoda de poder escribir sin tener tanos simbolos de "más" + o de comas , y es de mejor forma llamar las variables



