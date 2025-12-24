//Objetos dentro de otro objeto

const producto = {
    nombre: `Monitor de 20 pulgadas`,
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            medida: '1m',
        },
        fabricacion: {
            pais:'China'
        }        
    }
}

console.log(producto);
console.log(producto.informacion);
console.log(producto.informacion.medidas.peso);

//Los objetos pueden ser tan complejos como sean necesarios.

//Intentando acceder a país como actividad del curso:

console.log(producto.informacion.fabricacion.pais);