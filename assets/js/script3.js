//ejercicio numero 3

//se pide al usuario que ingrese el valor en grados Celsius
var celsius = prompt("Ingrese el valor en grados Celsius");

//El valor ingresado a traves de prompt viene como string(cadena de texto)
//con parseInt se convierte en un valor tipo numero
var celsius = parseInt(celsius);

//la variable fahrenheit hace la operacion de transformar el valor de celsius a fahrenheit
var fahrenheit = celsius * 1.8 + 32;

//la variable kelvin hace la operacion de transformar el valor de celsius a kelvin
var kelvin = celsius + 273.15;

//a traves de un alert(modal emergente) se muestra el resultado
//lo que está dentro de las comillas se mostrará tal cual, incluyendo los espacios
alert(celsius + "°C es equivalente a " + fahrenheit + "°F y a " + kelvin + "K.");