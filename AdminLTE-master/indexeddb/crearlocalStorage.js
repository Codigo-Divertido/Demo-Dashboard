function CrearItemtest(argument) {
    // body...
    localStorage.setItem("Prueba", "ejemlpo");
}

function OptenerItemtest(argument) {
    let elemento = localStorage.getItem("Prueba");
    alert(elemento);
}