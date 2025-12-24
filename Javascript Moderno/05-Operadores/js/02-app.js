//Comparar con operadores

const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

//Revisar si 2 números son iguales

console.log(numero1 == numero3); //Se asigna con dos == para comparar
console.log(numero1 == numero2); //Si usamos solamente == va a comparar el valor, pero no el tipo de dato, ejemplo
//el numero1 y el numero2 son 20 em ambos casos, pero uno es un string y el otro es un number para comparar el
//tipo de dato también debemos usar === ejemplo:

console.log(numero1 === numero2); //Aquí ya estamos comparando el tipo de dato y vemos que el resultado es false, ya que es un
//Comparardor estricto, ya que compara el valor y el tipo de dato

//Podemos revisar el tipo de dato con el typeOf

console.log(typeof numero1);
console.log(typeof numero2);

//Y ahí ya vemos que el primero es un number y el segundo un string

//Para cambiar el tipo de dato podríamos cambiarlo con parseInt:

console.log(numero1 === parseInt(numero2)); //Aquí ya lo cambiamos y nos regresa un true

//Comparar si son diferentes

//Supongamos que tenemos un inicio de sesión y vamos a ver que cuando escribimos nuestra contraseña la confirmemos 
//Para eso podríamos usar el siguiente ejemplo:

const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2); //Aquí nos dice que sí es diferente porque tenemos la A en minuscula y mayúscula

console.log(numero1 !== numero2); //Si lo dejaramos en solo != identificaría que sí son iguales por el mismo tema de arriba, debemos
//usar el comparador estricto para que sea una muy buena comparación
