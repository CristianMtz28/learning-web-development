/*Más metodos para los strings */


const producto = "       Monitor de 20 pulgadas     ";
console.log(producto);
console.log(producto.length);

//Si nosotros declaramos así la variable con esos espacios ya cuentan como caracteres esto podría pasar si en un formulario alguien pone su nombre y sin querer un espacio al final

//trimStart - Eliminando espacios del inicio 

console.log(producto.trimStart());

//trimEnd - Eliminando espacios del final

console.log(producto.trimEnd());

//trimEnd - Eliminando espacios del inicio y el final

console.log(producto.trimStart().trimEnd());

//trim - Eliminando los espacios de inicio y de final

console.log(producto.trim());