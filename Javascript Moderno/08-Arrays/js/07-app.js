/*Añadir nuevos elementos al inicio y al final de un arreglo */

const carrito = []; 

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

const producto4 = {
    nombre: "Smartwatch",
    precio: 500
}

const producto5 = {
    nombre: "iPad",
    precio: 700
}

const producto6 = {
    nombre: "iMac",
    precio: 1200
}

carrito.push(producto, producto2, producto3, producto4, producto5, producto6);
console.table(carrito);

/*Eliminar último elenento del arreglo  */

//Con pop eliminas el último elemento del arreglo
carrito.pop();
console.table(carrito);

/*Eliminando al inicio del arreglo*/
carrito.shift();
console.table(carrito);

/*Eliminando elementos en especifico*/
carrito.splice(2,1); //Este toma 2 parametros el primero es la posición donde queremos empezar 
//a eliminar y el segundo cuantos elementos queremos eliminar a partir de la posición que
//le dijimos
console.table(carrito);