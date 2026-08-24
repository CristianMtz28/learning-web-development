/*Crear un nuevo arreglo con el spread operator */

/*En javascript es importante mencionar que en las nuevas versiones se dieron diferentes funciones
que hacen lo mismo a unas se les conoce como 'Declarativa' y a las otras se les conoce como 'Formas imperativas'
ambas son muy utilizadas en la programación de Javascript.

La forma imperativa fue la que vimos en el video anterior ya que tenemos un carrito y sobre ese carrito estamos
modificando, agregando elementos al prinicipio o al final, es decir que esa forma modifica a la variable original
sobre ella misma trabaja.

Existe otra forma que es la declarativa, es un paradigma que expresa la lógica sin describir tanto el flujo
de control. O sea de manera más compacta

*/
const carrito = []; 

//Definir un producto
const producto = {
    nombre: "Monitor 32 pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Smartphone",
    precio: 800
}

const producto3 = {
    nombre: "Teclado",
    precio: 300
}

/*Froma declarativa */

let resultado = [...carrito, producto, producto2];

/*Lo que estamos haciendo es declarar una nueva variable que es una copia de carrito, al usar el ... que es
el spread operator le decimos a la variable, 'Oye resultado, crea una copia de carrito y sobre esta nueva variable 
que es resultado vamos a trabajar, entonces, dentro del arreglo le ponemos producto, como el carrito en su forma
original estaba vacio, pues estará vacio y sobre eso lo trabaja, si hubiera tenido algo el arreglo de carrito 
entonces también lo hubiera traido, así ya no modificamos la variable original */

console.table(resultado); //Aquí me imprimio carrito más la variable que le asigne que fue producto y producto2
console.table(carrito); //Y aquí el carrito sigue vacio

