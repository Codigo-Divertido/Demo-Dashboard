async function verificarPHP() {
    try {
        const respuesta = await fetch("../assets/php/estatus.php");

        if (respuesta.ok) {
            const texto = await respuesta.text();
            if (texto.trim() === "pong") {
                console.log("✅ Conexión con PHP exitosa");
                Swal.fire("✅ Conexión con PHP exitosa");
                return true;
            }
        }

        throw new Error("Respuesta inesperada");

    } catch (error) {
        console.log("✅ La demostración usa almacenamiento local");
        Swal.fire("✅ La demostración usa almacenamiento local");
        return false;
    }
}

// Llamar a la función
verificarPHP();