let numeroSecreto = 0;
let intentos = 0;
let numSorteados = [];
let numMax = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numUsuario = parseInt(document.getElementById('numUsuario').value);
    if (numUsuario == numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#numUsuario').value = '';
}

function generarNumeroSecreto() {
    let numGenerado = Math.floor(Math.random()*numMax)+1;
    console.log(numGenerado);
    console.log(numSorteados);
    //Si ya sorteamos todos los números
    if(numSorteados.length == numMax) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
        //deshabilitar input y botón intentar
        document.querySelector('#numUsuario').setAttribute('disabled', true);
        document.querySelector('#btnIntentar').setAttribute('disabled', true);
    } else {
        // Si el número generado está en la lista
        if (numSorteados.includes(numGenerado)) {
            return generarNumeroSecreto();
        } else {
            // Agregarlo a la lista
            numSorteados.push(numGenerado);
            return numGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numMax}`);
    //generar num aleatorio
    numeroSecreto = generarNumeroSecreto();
    //reiniciar intentos
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    condicionesIniciales();
    //deshabilitar botón de Nuevo Juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
    
}

condicionesIniciales();

/** Desafío */
/*
function holaMundo() {
    console.log('Hola, mundo');
    return;
}

holaMundo();

function holaNombre(nombre) {
    console.log('Hola '+nombre);
    return;
}

holaNombre('Clau');

function returnDouble(numero) {
    let doble = parseInt(numero)*2;
    console.log(doble);
    return;
}

returnDouble(3);

function promedio(num1, num2, num3) {
    let suma = parseInt(num1) + parseInt(num2) + parseInt(num3);
    let promedio = suma / 3;
    console.log(promedio);
    return;
}

promedio(7,5,4);

function numMayor(num1, num2) {
    let numMax = Math.max(num1, num2);
    console.log(numMax);
    return;
}

numMayor(13,2);

function numCuadrado(numero) {
    let res = parseInt(numero * numero);
    console.log(res);
    return;
}

numCuadrado(11);
*/