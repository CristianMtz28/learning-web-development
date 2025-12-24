"use strict";
/*Palabra reservada This*/

const nombre = 'Hola';
const precio = 20;

const producto = {
    nombre: `Monitor de 20 pulgadas`,
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto ${this.nombre} tiene un precio de: ${this.precio} `)
    }
}

/*Si dejaramos así el objeto al momento de yo invocar la función mostrarInfo, me traería algo como 
El producto Hola tiene un precio de 20

Ya que se está yendo a la variable definida de afuera del scope, sin embargo si yo agrego la palabra reservada
this en la función de mi objeto le estamos diciendo "Quiero que tomes ESTE o ESTA variable para la propiedad de este objeto"

NOTA: Recuerda que this es un forma de referirse al obejto en si mismo, porque un objeto puede tener multiple información

Si quieres ver como funciona solo quita y pon el this. de la función y ve que te tare
*/
producto.mostrarInfo();

/*Para ver como se cumple  la nota de que this se refiere al obejto en sí mimso creemos un objeto casi igual*/


const producto2 = {
    nombre: `Macbook Air M2`,
    precio: 100,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto ${this.nombre} tiene un precio de: ${this.precio} `)
    }
}

producto2.mostrarInfo();

/*Aquí creamos un objeto con casi la misma información, de hecho no hubo necesidad de poner nombre2 o precio2, ni modificar 
el nombre de la función ya que con this estamos diciendole que se refiere al objeto en sí mismo, obvio la contsante que es
un objeto sí cambia ya que no puede haber 2 constantes con el mismo nombre */