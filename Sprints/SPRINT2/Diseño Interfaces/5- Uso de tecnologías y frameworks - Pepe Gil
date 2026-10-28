# Uso de Tecnologías y Frameworks

Este apartado describe las tecnologías, lenguajes y herramientas empleadas en el desarrollo de **StockLink**, así como la justificación de cada elección.

---

## 1. Frontend

### HTML5 semántico

Se ha utilizado HTML5 con etiquetas semánticas (`aside`, `nav`, `main`, `article`, `section`) en lugar de `div` genéricos, acompañadas de atributos de accesibilidad (`aria-label`, `aria-current`, `role="progressbar"`) desde la propia maquetación. Esto mejora la comprensión del documento tanto por parte de los motores de búsqueda como de tecnologías de asistencia (lectores de pantalla).

### SASS / SCSS

El proyecto utiliza SASS, con su sintaxis SCSS, como preprocesador de estilos. Permite trabajar con variables, mixins, anidamiento y una organización modular del código en distintos archivos, compilando finalmente a CSS estándar interpretable por cualquier navegador.

### Metodología BEM

Para la nomenclatura de las clases CSS se ha adoptado la metodología BEM (*Block, Element, Modifier*), que favorece un código modular, predecible y fácil de mantener a medida que el proyecto crece.

### Tipografía: Google Fonts

Se emplean dos familias tipográficas cargadas desde Google Fonts:
- **Work Sans**: tipografía principal para el texto general de la interfaz, por su legibilidad en pantalla.
- **JetBrains Mono**: tipografía monoespaciada usada en datos numéricos, etiquetas de estado y elementos técnicos (referencias de producto, cantidades), reforzando la lectura rápida de información tabular.

### Sistema de temas (claro/oscuro)

El proyecto implementa un sistema de temas mediante variables nativas de CSS (`--sl-primary`, `--sl-bg`, etc.), independientes de las variables de SCSS. Esto permite alternar entre tema oscuro (por defecto) y tema claro redefiniendo únicamente los valores de color, sin duplicar reglas de estilo en ningún componente.

### Diseño responsive (mobile first)

El diseño se construye siguiendo un enfoque *mobile first*, utilizando puntos de ruptura (*breakpoints*) definidos como variables y aplicados mediante un mixin reutilizable, adaptando la interfaz a móvil, tablet y escritorio.

---

## 2. Herramientas de desarrollo

| Herramienta | Propósito |
|---|---|
| Editor de código (VScode) | Escritura y organización del proyecto |
| Compilador de SASS | Transformación de los archivos `.scss` en `.css` |
| Git / GitHub | Control de versiones y trabajo colaborativo |
| Tablero Kanban | Organización y seguimiento de tareas del equipo |
| Navegador (DevTools) | Inspección, depuración y pruebas de la interfaz |

---

## 3. Tecnologías pendientes de definir

A medida que el proyecto avance hacia la implementación funcional, se incorporarán:

| Categoría | Tecnología prevista |
|---|---|
| FrameWork Frontend| *Angular o React (pendiente de ver))* |
| Backend | *(por definir)* |
| Base de datos | *(por definir)* |
| Despliegue / hosting | *(por definir)* |

---

## 4. Resumen de la pila tecnológica actual

| Tecnología | Categoría | Justificación |
|---|---|---|
| HTML5 | Estructura | Semántica y accesibilidad |
| SCSS (SASS) | Estilos | Variables, mixins y modularidad |
| BEM | Convención CSS | Mantenibilidad y escalabilidad |
| Google Fonts | Tipografía | Legibilidad y coherencia visual |
| CSS Variables | Theming | Tema claro/oscuro sin duplicar código |
| Git / GitHub | Control de versiones | Trazabilidad y trabajo en equipo |
