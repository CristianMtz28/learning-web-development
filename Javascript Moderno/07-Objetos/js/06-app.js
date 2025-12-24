//Destructuring en objetos muys grandes

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

//Recordando el destructuring

//const {nombre} = producto;
//console.log(nombre);

//Accediendo a 'Fabricación':

//const {nombre, informacion: {fabricacion}} = producto;
//console.log(fabricacion);

//Aquí ya accedimos a la fabricación gracias a la sintaxis de : con las {}. HAY QUE TENERE EN CUENTA, que si lo 
//dejamos así, esta sintaxis solo me va a crear la variable de fabricacion pero no la de informacion, ya que la manera
//en la que lo estamos definiendi es para obtener y crear a fabricación como variable, si queremos las 2
//tendríamos que poner:

/*const {nombre, informacion, informacion: {fabricacion}} = producto;
console.log(nombre);
console.log(informacion);
console.log(fabricacion);*/

//Y ahora sí tenemos a informacion y a fabricacion en cada una de sus variables

//Ahora si queremos acceder al pais o sea que la consola solo nos arroje 'China' sería:

const { nombre, 
        informacion, 
        informacion: {fabricacion}, 
        informacion: {fabricacion: {pais}}
    } = producto;

    console.log(nombre);
console.log(informacion);
console.log(fabricacion);
console.log(pais);

//Solo lo acomode para poder verlo yo de otra forma pero es así:

// const { nombre, informacion, informacion: {fabricacion}, informacion: {fabricacion: {pais}}} = producto;