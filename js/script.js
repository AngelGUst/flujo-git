
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


const formulario = document.getElementById("formularioInnecesario");

const nivel = document.getElementById("nivel");
const nivelTexto = document.getElementById("nivelTexto");

const resultado = document.getElementById("resultado");

nivel.addEventListener("input", function () {
    nivelTexto.textContent = nivel.value + "%";
});

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const animal = document.getElementById("animal").value;
    const color = document.getElementById("color").value;
    const nivelPatos = document.getElementById("nivel").value;
    const excusa = document.getElementById("excusa").value;

    document.body.style.backgroundColor = color;

    resultado.style.display = "block";

    resultado.innerHTML = `
        <h2>Resultados completamente inútiles</h2>

        <p>
            <strong>Superhéroe:</strong>
            ${nombre}
        </p>

        <p>
            <strong>Futuro gobernante del mundo:</strong>
            ${animal}
        </p>

        <p>
            <strong>Preparación contra patos:</strong>
            ${nivelPatos}%
        </p>

        <p>
            <strong>Excusa:</strong>
            ${excusa || "No proporcionaste ninguna excusa."}
        </p>

        <p>
            Después de un análisis extremadamente científico,
            hemos determinado que esta información no sirve para nada.
        </p>
    `;
});

