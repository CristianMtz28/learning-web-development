/*MÉTODOS PARA LOS STRINGS */

//Por ejemplo en X te limitan a ciertos caracteres, eso se puede usar con un método de string

const producto = 'Monitor de 20 pulgadas';

console.log(producto);

//Cuenta caracteres
console.log(producto.length); 


//Búsqueda por caracteres como en un buscador de Amazon
console.log(producto.indexOf('pulgadas'));  //En la consola dice 0 porque empieza en la pocisión 0 si pongo pulgadas nos aparece en la pocición 14
//sin embargo si ponemos Pulgadas nos va a dar -1 ya que es suseptible a mayusculas y miinusculas, igual si ponemos una palabra que no existe va a ser -1

//Búsqueda con includes
console.log(producto.includes('pulgadas'));  //Va a aparecer true o false dependiendo si existe o no

