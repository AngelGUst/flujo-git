
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 256);
}

function desatarCaos() {
    const r = generarNumeroAleatorio();
    const g = generarNumeroAleatorio();
    const b = generarNumeroAleatorio();

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

const botonCaos = document.getElementById('chaosButton');
botonCaos.addEventListener('click', desatarCaos);
