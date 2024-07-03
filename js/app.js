alert("!Juguemos a las adivinanzas!")

function quitarTilde(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function jugarAdivinanza(adivinanza, respuestaCorrecta) {
    let respuestauno = prompt(adivinanza);
    let respuestaNormalizada = quitarTilde(respuestauno);
    let respuestaCorrectaNormalizada = quitarTilde(respuestaCorrecta);
    
    if (respuestaNormalizada === respuestaCorrectaNormalizada) {
        alert("¡Correcto!");
    } else {
        alert("Incorrecto. La respuesta correcta es: " + respuestaCorrecta);
    }
}

let adivinanzas = [
    { pregunta: "Blanco por dentro, verde por fuera. Si quieres que te lo diga, espera", respuesta: "palta" },
    { pregunta: "Tiene dientes y no come, tiene cabeza y no es hombre", respuesta: "ajo" },
    { pregunta: "Tiene agujas y no cose, tiene números y no sabe contar", respuesta: "reloj" },
    { pregunta: "Todos me pisan a mí, pero yo no piso a nadie; todos preguntan por mí, y yo no pregunto por nadie", respuesta: "camino" },
    { pregunta: "Vivo en la selva, cambio de color, soy experto en camuflaje", respuesta: "camaleón" }
];

for (let i = 0; i < adivinanzas.length; i++) {
    jugarAdivinanza(adivinanzas[i].pregunta, adivinanzas[i].respuesta);
}

alert("Eso es todo!")
