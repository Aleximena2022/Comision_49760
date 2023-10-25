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


let a = Number(prompt("Ingresar el primer número"));
let b = Number(prompt("Ingresar el segundo número"));

do {
    
    let operacion = prompt("Operación Matemática (+, -, *, /) o escribir 'cancelar' para finalizar");

    
    if (operacion.toLowerCase() === 'cancelar') {
        break; // Salir del bucle si el usuario escribe 'cancelar'
    }

    // Realizar la operación correspondiente
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

    let continuar = prompt("¿Quieres realizar otra operación? (sí/no)").toLowerCase();
    if (continuar !== 'sí' && continuar !== 'si') {
        break; // Salir del bucle si la respuesta no es 'sí' o 'si'
    }

    b = Number(prompt("Ingresar otro número"));

} while (true);

console.log("Fin De La Operacion");
