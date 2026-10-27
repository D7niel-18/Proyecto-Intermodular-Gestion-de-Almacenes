// formularios.js
// 1) Botones "Mostrar / Ocultar" de las contraseñas
// 2) Validación sencilla de todos los formularios con "novalidate"

// ---------- 1. Mostrar / ocultar contraseña ----------
var botonesPassword = document.querySelectorAll("[data-toggle-password]");

botonesPassword.forEach(function (boton) {
    boton.addEventListener("click", function () {
        var id = boton.getAttribute("data-toggle-password");
        var input = document.getElementById(id);

        if (input.type === "password") {
            input.type = "text";
            boton.textContent = "Ocultar";
        } else {
            input.type = "password";
            boton.textContent = "Mostrar";
        }
    });
});

// ---------- 2. Validación ----------

// Muestra un mensaje de error debajo del input
function mostrarError(input, mensaje) {
    quitarError(input);

    var p = document.createElement("p");
    p.className = "campo__error";
    p.textContent = mensaje;
    p.style.color = "#ef4444";
    p.style.fontSize = "0.8rem";
    p.style.marginTop = "4px";

    input.insertAdjacentElement("afterend", p);
    input.setAttribute("aria-invalid", "true");
}

// Elimina el mensaje de error de un input (si lo tiene)
function quitarError(input) {
    var siguiente = input.nextElementSibling;

    if (siguiente && siguiente.classList.contains("campo__error")) {
        siguiente.remove();
    }
    input.removeAttribute("aria-invalid");
}

// Devuelve el mensaje de error de un input, o "" si está bien
function validarCampo(input) {
    var valor = input.value.trim();

    if (input.required && valor === "") {
        return "Este campo es obligatorio.";
    }

    if (valor !== "" && input.type === "email") {
        var patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!patronEmail.test(valor)) {
            return "Introduce un email válido.";
        }
    }

    if (valor !== "" && input.minLength > 0 && valor.length < input.minLength) {
        return "Mínimo " + input.minLength + " caracteres.";
    }

    if (valor !== "" && input.type === "number" && input.min !== "") {
        if (Number(valor) < Number(input.min)) {
            return "El valor mínimo es " + input.min + ".";
        }
    }

    return "";
}

var formularios = document.querySelectorAll("form[novalidate]");

formularios.forEach(function (formulario) {

    formulario.addEventListener("submit", function (evento) {
        var hayErrores = false;
        var campos = formulario.querySelectorAll("input, select, textarea");

        campos.forEach(function (campo) {
            if (campo.type === "hidden") {
                return;
            }

            var mensaje = validarCampo(campo);

            if (mensaje !== "") {
                mostrarError(campo, mensaje);
                hayErrores = true;
            } else {
                quitarError(campo);
            }
        });

        // Solo en el registro: las dos contraseñas deben coincidir
        var pass1 = formulario.querySelector("#contrasena");
        var pass2 = formulario.querySelector("#confirmar-contrasena");

        if (pass1 && pass2 && pass1.value !== pass2.value) {
            mostrarError(pass2, "Las contraseñas no coinciden.");
            hayErrores = true;
        }

        // Si hay errores, no se envía el formulario
        if (hayErrores) {
            evento.preventDefault();
        }
    });

    // Al escribir, se limpia el error de ese campo
    formulario.addEventListener("input", function (evento) {
        quitarError(evento.target);
    });
});