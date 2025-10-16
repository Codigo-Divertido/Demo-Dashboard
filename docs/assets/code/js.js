async function verificarPHP() {
    try {
        const respuesta = await fetch("../assets/code/estatus.php");

        if (respuesta.ok) {
            const texto = await respuesta.text();
            if (texto.trim() === "pong") {
                console.log("✅ Se usará el almacenamiento remoto");
                Swal.fire("✅ Se usará el almacenamiento remoto");
                return true;
            }
        }

        throw new Error("Respuesta inesperada");

    } catch (error) {
        console.log("✅ Se usará el almacenamiento local");
        Swal.fire("✅ Se usará el almacenamiento local");
        return false;
    }
}

function ejecutarPHP(argument) {
    console.log('Ejecutar algoritmo con PHP');
}

function ejecutarJS(argument) {
    console.log('Ejecutar algoritmo con JS');
}
// Llamar a la función
// verificarPHP();

if (verificarPHP() == true) {
    ejecutarPHP();
} else {
    ejecutarJS();
}