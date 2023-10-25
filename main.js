// Funciones
function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        return "Operación incorrecta";
    } else {
        return a / b;
    }
}

// Aqui se encuentra el Algoritmo condicional
let a = Number(prompt("Ingresar un número"));
let operacion = prompt("Operación Matemática");
let b = Number(prompt("Ingresar un número"));

switch (operacion) {
    case '+':
        console.log(suma(a, b));
        break;
    case '-':
        console.log(resta(a, b));
        break;
    case '*':
        console.log(multiplicacion(a, b));
        break;
    case '/':
        console.log(division(a, b));
        break;
    default:
        console.log("Operación incorrecta");
}

// Aqui esta el Algoritmo que genera un un ciclo
let numero = Number(prompt("Ingresar un número"));

while (numero !== 0) {
    console.log(numero);
    numero = Number(prompt("Ingresar otro número"));
}
console.log("Fin De La Operacion");
