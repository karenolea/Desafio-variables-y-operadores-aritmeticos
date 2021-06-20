//ejercicio 4

//definir variables
var dias = 0;

//pedir datos usuario
dias = prompt("ingresar cantidad de días");

//convertir string a numero
dias = parseInt(dias);

//calcular

var años = Math.floor(dias / 365);
var semanas = Math.floor ((dias % 365) / 7);
var diasRestantes = (dias % 365) % 7;

console.log("años: " + años + ", semanas " + semanas + ", dias " + diasRestantes);