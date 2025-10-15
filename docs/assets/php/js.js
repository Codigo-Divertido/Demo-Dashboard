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
        console.log("❌ No se pudo conectar con PHP");
        Swal.fire("❌ No se pudo conectar con PHP");
        return false;
    }
}

// Llamar a la función
verificarPHP();