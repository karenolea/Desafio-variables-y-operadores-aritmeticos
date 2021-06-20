//ejercicio 5

 //definir variables
 var numeroUno = 0;
 var numeroDos = 0;
 var numeroTres = 0;
 var numeroCuatro = 0;
 var numeroCinco = 0;
 

//solicitar numeros
 numeroUno = prompt("ingrese primer número");
 numeroDos = prompt("ingrese segundo número");
 numeroTres = prompt("ingrese tercero número");
 numeroCuatro = prompt("ingrese cuarto número");
 numeroCinco = prompt("ingrese quinto número");

 //Convertir string a entero
 var suma = parseInt(numeroUno) + parseInt (numeroDos) + parseInt (numeroTres) + parseInt(numeroCuatro) + parseInt(numeroCinco);
 
 //Suma de los cinco numeros
 console.log("la suma de los cinco números es: " + suma);

 //Promedio de los cinco numeros
 console.log("El promedio de los cinco numeros es: " + (suma / 5)); 