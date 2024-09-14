//Prompt Principal
//let nombre = prompt("Ingresa tu nombre, por favor.")

function mostrarAlerta() {
    //Muestra el prompt para ingresar un dato
    let txtIngresado = prompt("Hola, ingresa tu nombre por favor:");

    //Si el usuario ingresa algo, lo va a mostrar en el alert
    if (txtIngresado !== null) {
        alert("Hola" + " " + txtIngresado + "," + " este es una prueba del proyecto que estaré empezando");
    } else {
        alert("No ingresaste nada.");
    }
}

// Pedir datos al usuario usando prompts
const nombre = prompt("Por favor, ingresa tu nombre:");
const edad = prompt("Por favor, ingresa tu edad:");
const ciudad = prompt("Por favor, ingresa tu ciudad:");

// Crear un objeto con los datos del usuario
const usuario = {
    nombre: nombre,
    edad: edad,
    ciudad: ciudad
};

// Mostrar los datos en el HTML
const outputDiv = document.getElementById('output');
outputDiv.innerHTML = `
        <p style="color: #fff; font-size: 30px;"><strong>Hola, bienvenido</strong> ${usuario.nombre}</p>
        <p style="color: #fff; font-size: 20px;"><strong>Tu edad es:</strong> ${usuario.edad}</p>
        <p style="color: #fff; font-size: 20px;"><strong>Vives en:</strong> ${usuario.ciudad}</p>
`;