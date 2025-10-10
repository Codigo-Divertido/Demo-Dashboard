// Un arreglo con dos objetos de usuario
var usuarios = [{
    nombreUsuario: "Carlos",
    pass: "hewblchejbvlcjehbcljh"
}, {
    nombreUsuario: "Omar",
    pass: "hewblchejbvlcjehbcljh"
}];

function CrearItemtest(argument) {
    // Guardar el arreglo completo en localStorage
    localStorage.setItem("Prueba", JSON.stringify(argument));
}

function OptenerItemtest() {
    // Obtener el valor como string
    let elemento = localStorage.getItem("Prueba");

    if (elemento) {
        // Convertir de JSON a arreglo de objetos
        let lista = JSON.parse(elemento);

        // Mostrar por consola cada usuario
        lista.forEach((usuario, i) => {
            console.log(`Usuario ${i + 1}:`, usuario);
        });

        // También puedes mostrar uno específico
        alert("Primer usuario: " + lista[0].nombreUsuario);
    } else {
        alert("No hay datos en localStorage con esa clave");
    }
}

// Ejemplo de uso
// CrearItemtest(usuarios);
// OptenerItemtest();