## 1. Diseño de objetos (etiquetas), clases, pseudoclases y pseudoelementos

En esta fase se define cómo se van a estructurar los estilos de StockLink antes de maquetar. El objetivo es tener un sistema sencillo y reutilizable, con una hoja de estilos externa principal (`css/main.css`, tema oscuro) y una hoja alternativa (`css/light.css`, tema claro).

### 1.1 Variables de color y tipografía

Los colores se centralizarán en variables CSS con el prefijo `--sl-` (fondo, paneles, bordes, texto, color primario y colores de estado: éxito, aviso y peligro). La hoja del tema claro solo redefinirá esas variables, de forma que no haya que tocar el HTML para cambiar de tema.

Se usarán dos fuentes de Google Fonts: `Work Sans` para el texto general y `JetBrains Mono` para cifras, referencias y encabezados pequeños.

### 1.2 Etiquetas (selectores de elemento)

Se definirá un estilo base para las etiquetas más comunes:

| Etiqueta | Estilo previsto |
|---|---|
| `*` | `box-sizing: border-box` |
| `body` | Sin margen, fuente `Work Sans`, colores del tema |
| `h1`, `h2`, `h3`, `p`, `ul` | Márgenes a 0 y listas sin viñetas |
| `a` | Color primario, sin subrayado |
| `button`, `input`, `select`, `textarea` | Heredan la fuente del documento |
| `table`, `th`, `td` | Tabla a ancho completo, bordes colapsados y texto alineado a la izquierda |

### 1.3 Clases

Los componentes se estilizarán con clases, siguiendo la nomenclatura BEM (ver punto 2), para no depender de la estructura del HTML. Los bloques principales previstos son:

- **Acceso (login y registro):** `acceso`, `acceso__presentacion`, `acceso__panel`, `acceso__formulario`, `funcionalidad`.
- **Formularios:** `campo`, `campo__etiqueta`, `campo__entrada`, `campo__alternar`.
- **Estructura de la aplicación:** `aplicacion`, `aplicacion__barra-lateral`, `aplicacion__contenido`, `aplicacion__cabecera`.
- **Navegación y usuario:** `navegacion`, `navegacion__enlace`, `usuario`, `logo`.
- **Paneles y estadísticas:** `panel`, `tarjeta-estadistica`.
- **Tablas y listados:** `tabla-datos`, `barra-herramientas`, `paginacion`.
- **Movimientos y almacenes:** `movimiento`, `almacen`.
- **Componentes reutilizables:** `boton`, `etiqueta`.

Las variaciones de un componente se resolverán con modificadores:

- `boton--principal`, `boton--fantasma`, `boton--peligro`
- `etiqueta--correcta`, `etiqueta--advertencia`, `etiqueta--peligro`
- `movimiento--entrada`, `movimiento--salida`
- `navegacion__enlace--activo`

Para mostrar la ocupación de los almacenes se usará una propiedad personalizada (`--ocupacion-almacen`) asignada en línea, de modo que una sola regla CSS sirva para cualquier porcentaje.

### 1.4 Pseudoclases

Se emplearán para dar respuesta visual a la interacción y al estado de los elementos:

- `:hover` en enlaces, botones y navegación lateral.
- `:focus-visible` en enlaces y botones, para que se vea el foco al navegar con teclado.
- `:focus` en los campos de formulario.
- `:active` y `:disabled` en los botones.
- `:not(:last-child)` para separar filas de tabla y movimientos sin borde en el último elemento.

### 1.5 Pseudoelementos

- `::before` en las etiquetas de estado, para añadir un pequeño punto de color antes del texto.
- `::placeholder` en los campos de formulario, para atenuar el texto de ayuda.
- `::selection` para adaptar el color de selección de texto al tema.
