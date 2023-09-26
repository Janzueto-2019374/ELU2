// Ejercicio 1
// Funciones que imprimen mensajes en la consola
function mensaje1() {
    console.log("Mensaje 1: Función 1 activada");
}

function mensaje2() {
    console.log("Mensaje 2: Función 2 activada");
}

function mensaje3() {
    console.log("Mensaje 3: Función 3 activada");
}

function mensaje4() {
    console.log("Mensaje 4: Función 4 activada");
}

function mensaje5() {
    console.log("Mensaje 5: Función 5 activada");
}

// Crear un array de funciones para funciones aleatorias
const funcionesAleatorias = [mensaje1, mensaje2, mensaje3, mensaje4, mensaje5];

// Función principal para ejecutar aleatoriamente una función del arreglo de funciones aleatorias
function ejecutarFuncionAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * funcionesAleatorias.length);
    const resultadoAleatorio = document.getElementById('resultadoAleatorio');

    resultadoAleatorio.textContent = "Resultado: en consola";

    // Llamar a la función seleccionada aleatoriamente
    funcionesAleatorias[indiceAleatorio]();
}

//Ejercicio 2
// Función para verificar si una cadena es un palíndromo
function esPalindromo(cadena) {
    cadena = cadena.replace(/\s/g, '').toLowerCase();
    return cadena === cadena.split('').reverse().join('');
}

// Función que se ejecuta al hacer clic en el botón "Verificar" para el palíndromo
function verificarPalindromo() {
    const inputText = document.getElementById('inputText').value;
    const resultadoPalindromo = document.getElementById('resultadoPalindromo');

    if (esPalindromo(inputText)) {
        resultadoPalindromo.textContent = 'Es un palíndromo.';
    } else {
        resultadoPalindromo.textContent = 'No es un palíndromo.';
    }
}

// Obtener los botones por sus IDs y agregar controladores de eventos
const verificarBtn = document.getElementById('verificarBtn');
verificarBtn.addEventListener('click', verificarPalindromo);

const ejecutarAleatorioBtn = document.getElementById('ejecutarAleatorio');
ejecutarAleatorioBtn.addEventListener('click', ejecutarFuncionAleatoria);

//Ejercicio 3
// Ejemplo de función para contar vocales y consonantes
function contarVocalesYConsonantes(cadena) {
    cadena = cadena.toLowerCase();
    const vocales = 'aeiouáéíóú';
    let numVocales = 0;
    let numConsonantes = 0;

    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i];
        if (vocales.includes(caracter)) {
            numVocales++;
        } else if (caracter.match(/[a-z]/i)) {
            numConsonantes++;
        }
    }

    console.log(`Cadena: ${cadena}`);
    console.log(`Número de Vocales: ${numVocales}`);
    console.log(`Número de Consonantes: ${numConsonantes}`);
}

// Función que se ejecuta al hacer clic en el botón "Contar" para vocales y consonantes
function contarVocalesYConsonantesClick() {
    const inputTextoVC = document.getElementById('inputTextoVC').value;
    const resultadoVC = document.getElementById('resultadoVC');

    // Llamar a la función para contar vocales y consonantes
    contarVocalesYConsonantes(inputTextoVC);

    // Mostrar texto informativo
    resultadoVC.textContent = "Resultado: en consola";
}

// Obtener el botón por su ID y agregar un controlador de eventos para contar vocales y consonantes
const contarVCBtn = document.getElementById('contarVCBtn');
contarVCBtn.addEventListener('click', contarVocalesYConsonantesClick);

//Ejercicio 4
// Ejemplo de función para validar contraseñas
function validarContraseña(contraseña) {
    // Criterios de validación
    const longitudMínima = 8;
    const contieneMayúsculas = /[A-Z]/.test(contraseña);
    const contieneMinúsculas = /[a-z]/.test(contraseña);
    const contieneNúmero = /\d/.test(contraseña);

    if (
        contraseña.length >= longitudMínima &&
        contieneMayúsculas &&
        contieneMinúsculas &&
        contieneNúmero
    ) {
        console.log("La contraseña es válida.");
    } else {
        console.log("La contraseña no cumple con los criterios.");
    }
}

// Función que se ejecuta al hacer clic en el botón "Validar" para contraseñas
function validarContraseñaClick() {
    const inputPassword = document.getElementById('inputPassword').value;
    const resultadoPassword = document.getElementById('resultadoPassword');

    // Llamar a la función para validar la contraseña
    validarContraseña(inputPassword);

    // Mostrar texto informativo
    resultadoPassword.textContent = "Resultado: en consola";
}

// Obtener el botón por su ID y agregar un controlador de eventos para validar contraseñas
const validarPasswordBtn = document.getElementById('validarPasswordBtn');
validarPasswordBtn.addEventListener('click', validarContraseñaClick);

//Ejercicio 5
// Ejemplo de función para contar dígitos en un número entero
function contarDigitos(numero) {
    const cantidadDigitos = numero.toString().length;
    console.log(`Número: ${numero}`);
    console.log(`Cantidad de Dígitos: ${cantidadDigitos}`);
}

// Función que se ejecuta al hacer clic en el botón "Contar" para dígitos
function contarDigitosClick() {
    const inputNumero = document.getElementById('inputNumero').value;
    const resultadoDigitos = document.getElementById('resultadoDigitos');

    // Llamar a la función para contar dígitos
    contarDigitos(parseInt(inputNumero, 10));

    // Mostrar texto informativo
    resultadoDigitos.textContent = "Resultado: en consola";
}

// Obtener el botón por su ID y agregar un controlador de eventos para contar dígitos
const contarDigitosBtn = document.getElementById('contarDigitosBtn');
contarDigitosBtn.addEventListener('click', contarDigitosClick);

// Ejercicio 6
// Ejemplo de función para calcular el número de días entre dos fechas
function calcularDiasEntreFechas(fechaInicio, fechaFin) {
    const fechaInicioObj = new Date(fechaInicio);
    const fechaFinObj = new Date(fechaFin);

    const diferenciaEnMilisegundos = fechaFinObj - fechaInicioObj;
    const diferenciaEnDias = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));

    console.log(`Fecha de Inicio: ${fechaInicio}`);
    console.log(`Fecha de Fin: ${fechaFin}`);
    console.log(`Número de Días entre las Fechas: ${diferenciaEnDias}`);
}

// Función que se ejecuta al hacer clic en el botón "Calcular" para días entre fechas
function calcularDiasEntreFechasClick() {
    const fechaInicio = document.getElementById('fechaInicio').value;
    const fechaFin = document.getElementById('fechaFin').value;
    const resultadoDias = document.getElementById('resultadoDias');

    // Llamar a la función para calcular los días entre las fechas
    calcularDiasEntreFechas(fechaInicio, fechaFin);

    // Mostrar texto informativo
    resultadoDias.textContent = "Resultado: en consola";
}

// Obtener el botón por su ID y agregar un controlador de eventos para calcular días entre fechas
const calcularDiasBtn = document.getElementById('calcularDiasBtn');
calcularDiasBtn.addEventListener('click', calcularDiasEntreFechasClick);