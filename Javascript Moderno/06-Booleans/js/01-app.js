//Booleans 

//Solamente pueden tener 2 valores, true y false, verdadero o apagado, prendido o apagado, sí o no, eso es
//basicamente lo que es un booleano

const boolean1 = true;
const boolean2 = false;
const boolean3 = "true";

console.log(boolean1);
console.log(boolean2);

//Si comparamos ya sea con el comparador estricto o el normal nos va a regresar un false ya que al escribir con cadenas de
//texto en vez de con números lo toma como un string automaticamente y detecta que son diferentes
console.log(boolean1 === boolean3);


const boolean4 = new Boolean(true);
console.log(typeof (boolean4)); 