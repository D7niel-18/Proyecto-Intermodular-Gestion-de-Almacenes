// tablas.js
// Filtra las filas de la tabla al escribir en el buscador
// o al cambiar los desplegables, sin recargar la página.

var barra = document.querySelector(".barra-herramientas");
var filas = document.querySelectorAll(".tabla-datos tbody tr");

if (barra && filas.length > 0) {

    var buscador = barra.querySelector('input[type="search"]');
    var desplegables = barra.querySelectorAll("select");

    var textoElementos = document.querySelector(".panel__informacion");
    var textoResumen = document.querySelector(".paginacion__resumen");

    function filtrar() {
        var busqueda = buscador ? buscador.value.toLowerCase().trim() : "";
        var visibles = 0;

        filas.forEach(function (fila) {
            var textoFila = fila.textContent;
            var mostrar = true;

            // 1. Filtro del buscador (sin distinguir mayúsculas)
            if (busqueda !== "" && !textoFila.toLowerCase().includes(busqueda)) {
                mostrar = false;
            }

            // 2. Filtros de los desplegables:
            // comparamos con el TEXTO de la opción elegida (ej. "Periféricos")
            desplegables.forEach(function (select) {
                if (select.value !== "") {
                    var opcion = select.options[select.selectedIndex].textContent.trim();

                    if (!textoFila.includes(opcion)) {
                        mostrar = false;
                    }
                }
            });

            fila.style.display = mostrar ? "" : "none";

            if (mostrar) {
                visibles++;
            }
        });

        // Actualizamos los contadores
        if (textoElementos) {
            textoElementos.textContent = visibles + " elementos";
        }
        if (textoResumen) {
            textoResumen.textContent = "Mostrando " + visibles + " de " + filas.length;
        }
    }

    if (buscador) {
        buscador.addEventListener("input", filtrar);
    }

    desplegables.forEach(function (select) {
        select.addEventListener("change", filtrar);
    });

    // El botón "Filtrar" ya no recarga la página
    barra.addEventListener("submit", function (evento) {
        evento.preventDefault();
        filtrar();
    });
}