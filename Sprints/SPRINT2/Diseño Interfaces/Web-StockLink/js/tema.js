// tema.js
// Cambia entre tema oscuro y claro y recuerda la elección del usuario.

var html = document.documentElement;
var hojaClara = document.querySelector('link[title="Claro"]');

// Aplica un tema ("dark" o "light") a la página
function aplicarTema(tema) {
    html.setAttribute("data-theme", tema);

    // La hoja light.css solo se activa en el tema claro
    if (hojaClara) {
        hojaClara.disabled = (tema !== "light");
    }
}

// Al cargar la página: recuperamos el tema guardado (si existe)
var temaGuardado = localStorage.getItem("tema");
if (temaGuardado) {
    aplicarTema(temaGuardado);
}

// Botón "Tema" del menú lateral
var botonTema = document.querySelector("[data-theme-toggle]");

if (botonTema) {
    botonTema.addEventListener("click", function () {
        var temaActual = html.getAttribute("data-theme");
        var nuevoTema = (temaActual === "dark") ? "light" : "dark";

        aplicarTema(nuevoTema);
        localStorage.setItem("tema", nuevoTema);
    });
}