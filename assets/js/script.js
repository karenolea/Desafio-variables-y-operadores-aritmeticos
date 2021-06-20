//Definir variables
var numeroUno = 0;
var numeroDos = 0;

//pedir datos usuario
numeroUno = prompt("ingresar primer número mayor a 0");
numeroDos = prompt ("ingresar segundo número que sea diferente al primer numero ingresado");

//convertir string a numero
numeroUno = parseInt(numeroUno);
numeroDos = parseInt (numeroDos);

// suma
console.log("la suma de ambos numero es:" + (numeroUno + numeroDos));

// resta
console.log("la resta de ambos numero es:" + (numeroUno - numeroDos));

// multiplicacion
console.log("la multiplicación de ambos numero es:" + (numeroUno * numeroDos));

// Division
console.log("la división de ambos numero es:" + (numeroUno / numeroDos));

// Modulo
console.log("el modulo de la division es:" + (numeroUno % numeroDos));



