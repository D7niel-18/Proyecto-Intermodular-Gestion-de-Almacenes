// eliminar.js
// Pide confirmación antes de eliminar un registro.

var formulariosEliminar = document.querySelectorAll(".acciones__formulario");

formulariosEliminar.forEach(function (formulario) {
    formulario.addEventListener("submit", function (evento) {
        var boton = formulario.querySelector("button");
        var nombre = boton.getAttribute("aria-label"); // ej. "Eliminar Ratón Oficina"

        var seguro = confirm("¿Seguro que quieres continuar?\n\n" + nombre);

        if (!seguro) {
            evento.preventDefault();
        }
    });
});