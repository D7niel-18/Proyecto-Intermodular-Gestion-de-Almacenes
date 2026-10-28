
# Sprint 2. Desarrollo de Interfaces

* **Objetivo de proyecto**. Crear interfaces web homogéneas definiendo y aplicando estilos.

* **Justificación**. Pasamos a la maquetación pura y dura. Es el momento perfecto para mostrar rigor en el entorno de trabajo, ya sea dominando las extensiones y el control de código en el IDE específico, u optando por explorar alternativas de la industria como *WebStorm*. El objetivo es que la arquitectura CSS sea modular, mantenible, responsiva y esté basada en metodologías y estándares modernos.

Así, entonces, el equipo deberá documentar el desarrollo de las interfaces de StockLink, incluyendo la organización de los estilos, la metodología de nombres de clases, el uso de SASS/SCSS, las herramientas de verificación, las tecnologías empleadas y el cronograma de ejecución.

---

## 1. Diseño de objetos, clases, pseudoclases y pseudoelementos

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

---

## 2. Uso del método BEM

# Guía de Uso de la Metodología BEM en StockLink

Este documento detalla los estándares de convención de nombres y estructura basados en la metodología **BEM** (*Block, Element, Modifier*) aplicados en la interfaz de frontend de **StockLink**.

---

## 1. ¿Qué es BEM y por qué se utiliza en StockLink?

**BEM** es una metodología de nombrado CSS que promueve la creación de componentes modulares, reutilizables y mantenibles. Evita el acoplamiento directo con la estructura HTML y elimina los problemas de especificidad en CSS al priorizar el uso de clases simples.

En **StockLink**, el uso de BEM permite:
- **Modularidad:** Cada componente existe de manera independiente.
- **Mantenibilidad:** Facilita la identificación rápida de a qué componente pertenece una regla de estilo.
- **Escalabilidad:** Permite añadir nuevas vistas o componentes sin riesgo de colisión de clases.

---

## 2. Convención de Nomenclatura

La estructura de nombrado sigue el siguiente esquema:

```css
.bloque {}
.bloque__elemento {}
.bloque--modificador {}
.bloque__elemento--modificador {}
```

* **Bloque (`.bloque`):** Componente autónomo que tiene un significado conceptual por sí mismo (ej. `.tarjeta-estadistica`, `.tabla-datos`, `.campo`).
* **Elemento (`.bloque__elemento`):** Parte interna del bloque que no tiene sentido de manera aislada y está vinculada semánticamente al bloque. Se delimita con dos guiones bajos (`__`).
* **Modificador (`.bloque--modificador` o `.bloque__elemento--modificador`):** Flag o variante que altera el aspecto, estado o comportamiento de un bloque o elemento. Se delimita con dos guiones (`--`).

---

## 3. Estructura de Componentes Clave en StockLink

A continuación se presentan los componentes principales del proyecto y su implementación siguiendo BEM.

### 3.1. Tarjetas Estadísticas (`.tarjeta-estadistica`)

Representan los indicadores clave (KPIs) del panel de control: referencias activas, unidades totales, valor en stock y alertas críticas.

```html
<!-- Bloque Principal, con modificador de estado "peligro" -->
<article class="tarjeta-estadistica tarjeta-estadistica--peligro">
  <!-- Elemento: etiqueta superior -->
  <h2 class="tarjeta-estadistica__etiqueta">Alertas críticas</h2>
  <!-- Elemento: valor numérico principal -->
  <p class="tarjeta-estadistica__valor">1</p>
  <!-- Elemento: texto de ayuda inferior -->
  <p class="tarjeta-estadistica__ayuda">Stock por debajo del mínimo</p>
</article>
```

* **Bloque:** `.tarjeta-estadistica`
* **Elementos:** `.tarjeta-estadistica__etiqueta`, `.tarjeta-estadistica__valor`, `.tarjeta-estadistica__ayuda`
* **Modificadores:** `.tarjeta-estadistica--correcta`, `.tarjeta-estadistica--advertencia`, `.tarjeta-estadistica--peligro`

---

### 3.2. Tabla de Datos e Inventario (`.tabla-datos`)

Utilizada para el listado de productos, categorías, almacenes, empresas y movimientos de stock.

```html
<div class="tabla-contenedor">
  <table class="tabla-datos">
    <thead>
      <tr>
        <th class="tabla-datos__encabezado">Producto</th>
        <th class="tabla-datos__encabezado">Stock</th>
        <th class="tabla-datos__encabezado tabla-datos__encabezado--acciones">Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr class="tabla-datos__fila">
        <td class="tabla-datos__celda">
          <span class="tabla-datos__producto">Teclados</span>
          <span class="tabla-datos__referencia">TEC-014</span>
        </td>
        <td class="tabla-datos__celda tabla-datos__celda--numerica">2000 uds.</td>
        <td class="tabla-datos__celda tabla-datos__celda--acciones">
          <button class="boton boton--fantasma boton--pequeno boton--peligro" aria-label="Eliminar Teclados">Eliminar</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

* **Bloque:** `.tabla-datos` (envuelto en `.tabla-contenedor`, que habilita el scroll horizontal)
* **Elementos:** `.tabla-datos__encabezado`, `.tabla-datos__fila`, `.tabla-datos__celda`, `.tabla-datos__producto`, `.tabla-datos__referencia`
* **Modificadores:** `.tabla-datos__encabezado--acciones`, `.tabla-datos__celda--numerica`, `.tabla-datos__celda--destacada`, `.tabla-datos__celda--acciones`

---

### 3.3. Formularios y Controles (`.campo` / `.boton`)

Garantizan una entrada de datos consistente en todas las pantallas de alta y edición, así como en el acceso.

```html
<div class="campo">
  <div class="campo__cabecera">
    <label for="password" class="campo__etiqueta">Contraseña</label>
    <button type="button" class="campo__alternar" aria-controls="password">Mostrar</button>
  </div>
  <input type="password" id="password" class="campo__entrada" required />
  <p class="campo__ayuda">Mínimo 8 caracteres.</p>
</div>
```

```html
<!-- Botones independientes -->
<button class="boton boton--principal boton--bloque">Guardar Cambios</button>
<a class="boton boton--fantasma" href="productos.html">Cancelar</a>
```

* **Bloque:** `.campo` / `.boton`
* **Elementos de `.campo`:** `.campo__cabecera`, `.campo__etiqueta`, `.campo__alternar`, `.campo__entrada`, `.campo__ayuda`
* **Modificadores:** `.campo__entrada--multilinea` (para `<textarea>`), `.boton--principal`, `.boton--fantasma`, `.boton--peligro`, `.boton--pequeno`, `.boton--bloque`

---

### 3.4. Barras de Ocupación y Etiquetas (`.almacen` / `.etiqueta`)

Indicadores visuales para representar la capacidad de un almacén y los niveles de alerta de stock.

```html
<article class="almacen almacen--completo" style="--ocupacion-almacen: 100%">
  <div class="almacen__cabecera">
    <h3 class="almacen__nombre">Central Sevilla</h3>
    <span class="almacen__categoria">Electrónica</span>
  </div>
  <div class="almacen__medidor">
    <span class="almacen__barra"></span>
  </div>
  <p class="almacen__resumen">
    <span>5000 / 5000 uds.</span>
    <span>100%</span>
  </p>
</article>

<span class="etiqueta etiqueta--correcta">Disponible</span>
<span class="etiqueta etiqueta--advertencia">Stock bajo</span>
<span class="etiqueta etiqueta--peligro">Crítico</span>
```

* **Bloque:** `.almacen` / `.etiqueta`
* **Elementos de `.almacen`:** `.almacen__cabecera`, `.almacen__nombre`, `.almacen__ubicacion`, `.almacen__categoria`, `.almacen__medidor`, `.almacen__barra`, `.almacen__resumen`
* **Modificadores:** `.almacen--completo` (ocupación al 100%, pinta la barra en rojo), `.etiqueta--correcta`, `.etiqueta--advertencia`, `.etiqueta--peligro`, `.etiqueta--contador`

---

## 4. Reglas y Buenas Prácticas BEM en StockLink

1. **Evitar la anidación profunda de BEM:** No se utilizan clases como `.tarjeta-estadistica__valor__numero`. Los elementos siempre están vinculados directamente al bloque raíz (`.tarjeta-estadistica__valor`).
2. **Combinación de bloques:** Se permite asignar más de una clase de bloque a un mismo elemento DOM cuando cumple funciones independientes (ej. `<button class="boton boton--fantasma boton--pequeno boton--peligro">`, donde `.boton` es el bloque base y el resto son modificadores combinados).
3. **Independencia del tema visual:** Los temas (modo oscuro por defecto / modo claro) modifican únicamente las variables CSS de color (`--sl-...`) definidas en `:root` y redefinidas en `:root[data-theme="light"]`, manteniendo la estructura de clases BEM intacta sin duplicar reglas de estilo.


---

## 3. Uso de un preprocesador SASS y SCSS

## 1. Uso del método BEM

Para la organización de las clases CSS se ha aplicado la metodología **BEM** (*Block, Element, Modifier*), que estructura los nombres de clase según su función dentro de la interfaz:

- **Block** (bloque): componente independiente y reutilizable, como una tarjeta, un botón, un panel o una fila de navegación.
- **Element** (elemento, separado con `__`): parte interna que solo tiene sentido dentro de su bloque, como la etiqueta o el valor numérico de una tarjeta de estadística.
- **Modifier** (modificador, separado con `--`): variante de estado o apariencia sobre ese bloque, como una versión de color distinta para indicar éxito, advertencia o peligro.

El proyecto aplica esta estructura de forma consistente en todos sus componentes: las tarjetas de estadísticas del dashboard, los botones de la interfaz, las etiquetas de estado de los productos, las filas de la tabla de movimientos o las tarjetas de ocupación de los almacenes. En todos los casos, el bloque define el componente base, los elementos representan sus partes internas y los modificadores cambian su apariencia según el estado (correcto, advertencia, crítico) sin necesidad de crear componentes nuevos.

### Por qué es importante

- **Legibilidad inmediata**: con solo leer el nombre de una clase se entiende de qué componente se trata y qué variante representa, sin tener que consultar el CSS.
- **Bajo acoplamiento con el HTML**: en vez de depender de la posición de los elementos dentro de la página, cada clase es independiente y explícita, por lo que cambiar la estructura del HTML no rompe los estilos.
- **Reutilización real**: un mismo bloque (por ejemplo, el botón o el panel) se usa en todas las páginas de la aplicación combinando distintos modificadores, evitando escribir estilos nuevos para cada caso concreto.
- **Trabajo en equipo**: al ser una convención predecible y estándar en la industria, cualquier persona del equipo puede escribir componentes nuevos siguiendo el mismo patrón, sin depender de quien creó el componente original.
- **Escalabilidad**: añadir una nueva variante de un componente (por ejemplo, un nuevo estado de stock) consiste simplemente en añadir un nuevo modificador, sin tener que tocar el resto del bloque ni duplicar código.

## 2. Uso de SASS/SCSS

El proyecto utiliza **SASS**, con su sintaxis **SCSS**, como preprocesador para escribir los estilos. SCSS añade funcionalidades de programación que CSS por sí solo no ofrece —variables, mixins, anidamiento y organización en módulos— y después se compila a CSS estándar para que lo interprete el navegador.

### Variables

Se utilizan variables para centralizar los valores que se repiten constantemente a lo largo del proyecto: tipografías, tamaños de texto, radios de borde y los anchos de pantalla que marcan los puntos de ruptura del diseño responsive. De este modo, cualquier ajuste global (por ejemplo, cambiar la tipografía o el radio de los bordes de toda la aplicación) se realiza en un único punto, en lugar de tener que localizar y modificar cada aparición individual.

Un aspecto especialmente cuidado del proyecto es la separación entre dos tipos de variables: los valores puramente estructurales (tamaños, espaciados, tipografías) se definen como variables de SCSS, mientras que los colores se definen como variables propias de CSS. Esta decisión no es casual: permite implementar el tema claro y el tema oscuro simplemente redefiniendo esas variables de color según el tema activo, sin tener que duplicar ni una sola regla de estilo de los componentes. Todos los bloques de la interfaz heredan automáticamente el color correcto, estén donde estén.

### Mixins

Los mixins son bloques de estilo reutilizables y configurables mediante parámetros, pensados para evitar repetir el mismo conjunto de propiedades una y otra vez. El proyecto los utiliza, por ejemplo, para definir de forma centralizada cómo se comportan las cajas organizadas en fila o en columna, cómo se aplican los puntos de ruptura del diseño responsive, cómo se construye el estilo de texto tipo "etiqueta" (pequeño, en mayúsculas y con tipografía monoespaciada) que aparece en múltiples partes de la aplicación, o cómo se resalta visualmente un elemento cuando se navega con teclado por accesibilidad.

Gracias a estos mixins, patrones que se repiten en decenas de componentes distintos (como organizar elementos en fila con cierto espaciado, o adaptar un estilo a partir de un ancho de pantalla concreto) se escriben una sola vez y se reutilizan mediante una simple llamada, en lugar de copiar y pegar las mismas propiedades repetidamente.

### Anidamiento (nesting)

SCSS permite anidar las reglas de estilo unas dentro de otras, reflejando visualmente en el propio código la relación entre un bloque, sus elementos y sus modificadores. Esto hace que la jerarquía BEM del proyecto no sea solo una convención de nombres, sino que también quede representada en la propia estructura del archivo de estilos, resultando mucho más legible que escribir cada clase de forma independiente y repetir el nombre completo del bloque cada vez.

### Organización en archivos independientes

Los estilos del proyecto no viven en un único archivo, sino que están repartidos en varios archivos independientes, cada uno centrado en un bloque o grupo de bloques relacionados: la base y los estilos globales, la estructura general de las páginas, la navegación, los formularios, las tarjetas, las tablas de datos, los listados, y las utilidades de propósito general. Todos estos archivos se combinan después desde un único punto de entrada que los importa en orden. Esta organización permite localizar y modificar los estilos de un componente concreto de forma inmediata, sin tener que buscar entre cientos de líneas de un archivo CSS monolítico.

### Por qué es importante

- **Mantenibilidad**: modificar un valor usado en todo el proyecto (un color, un espaciado, un radio de borde) se reduce a cambiarlo en un único lugar, en vez de buscarlo y reemplazarlo manualmente en todos los componentes.
- **Consistencia visual**: al reutilizar las mismas variables y mixins en todos los bloques, se garantiza que espaciados, tipografías y colores son siempre idénticos en toda la aplicación, evitando valores sueltos e inconsistentes.
- **Menos código repetido**: los mixins reducen drásticamente la cantidad de código necesario para patrones que se repiten constantemente a lo largo del proyecto.
- **Tema claro y oscuro sin duplicar estilos**: separar las variables de color de las variables estructurales permitió implementar un segundo tema visual completo con un archivo muy pequeño, sin modificar ningún componente existente.
- **Organización y escalabilidad**: dividir los estilos en archivos independientes por componente permite que el proyecto crezca con nuevas vistas y nuevos bloques sin que el código se vuelva difícil de mantener o de localizar.

---

## 4. Herramientas y test de verificación

# Herramientas y Test de Verificación

Este apartado recoge las herramientas utilizadas para comprobar la calidad del código y el funcionamiento de **StockLink**, así como la metodología seguida para medir y documentar los resultados obtenidos.

---

## 1. Validación de código

Se comprueba que el HTML y el CSS generados cumplen los estándares web, evitando errores de sintaxis que puedan provocar comportamientos inesperados en distintos navegadores.

- **W3C Markup Validator**: valida la corrección del HTML de cada página.
- **W3C CSS Validator**: valida la corrección del CSS compilado a partir del SCSS.

---

## 2. Accesibilidad

Se verifica que la interfaz es utilizable por el mayor número posible de personas, incluyendo quienes usan tecnologías de asistencia.

- **Lighthouse** (Chrome DevTools): genera una puntuación de accesibilidad, rendimiento, buenas prácticas y SEO para cada página.
- **WAVE** / **axe DevTools**: detectan problemas de contraste de color, uso incorrecto de atributos ARIA, ausencia de textos alternativos, etc.

---

## 3. Diseño responsive

Se comprueba que la interfaz se adapta correctamente a distintos tamaños de pantalla, siguiendo los puntos de ruptura definidos en el proyecto.

- **Chrome DevTools (modo responsive)**: simulación de distintos anchos de pantalla (móvil, tablet, escritorio).
- Revisión visual de que no aparecen desbordamientos horizontales ni elementos solapados.

---

## 4. Compatibilidad entre navegadores

Se realizan pruebas manuales en varios navegadores para detectar incoherencias visuales o funcionales.

- Navegadores probados: Chrome, Firefox, Edge *(añadir Safari si se dispone de dispositivo Apple)*.

---

## 5. Pruebas funcionales (fase de implementación)

Una vez incorporada la lógica de backend, se añadirán pruebas sobre el comportamiento real de la aplicación:

- Validación de formularios (campos obligatorios, formatos, mensajes de error).
- Operaciones CRUD completas (crear, leer, actualizar, eliminar) sobre productos, categorías, almacenes, empresas y movimientos.
- Reglas de negocio: por ejemplo, que un movimiento de salida no genere stock negativo, o que las alertas se disparen correctamente al superar el umbral de stock mínimo.

---

## 6. Plantilla de registro de pruebas

Cada prueba realizada se documenta con el siguiente formato, incluyendo capturas de pantalla como evidencia cuando sea posible:

| ID | Prueba | Herramienta | Resultado esperado | Resultado obtenido | Estado |
|---|---|---|---|---|---|
| T01 | Validación HTML de todas las páginas | W3C Validator | 0 errores | — | OK |
| T02 | Validación CSS compilado | W3C CSS Validator | 0 errores | — | OK |
| T03 | Accesibilidad de cada página | WAVE | — | OK |
| T04 | Adaptación a móvil (375px) | Chrome DevTools | Sin scroll horizontal | — | OK |
| T05 | Adaptación a tablet (768px) | Chrome DevTools | Menú y contenido correctos | — | OK |
| T06 | Compatibilidad en Chrome/Firefox/Edge | Manual | Apariencia idéntica | — | OK |

---

## 7. Captura de las pruebas

<img width="386" height="881" alt="Image" src="https://github.com/user-attachments/assets/e8c41ea8-c763-4cd8-8405-198c78d4b04d" />
<img width="351" height="445" alt="Image" src="https://github.com/user-attachments/assets/c965d5ea-27be-4dab-ba68-1d8e0288d8cf" />
<img width="765" height="346" alt="Image" src="https://github.com/user-attachments/assets/eb002443-d2bb-4ec1-ba16-c9acebeb9140" />


---

## 5. Uso de tecnologías y frameworks

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

---

## 6. Cronograma de ejecución

### 1. División del sprint en fases

| Fase | Tareas | Tiempo estimado |
| --- | --- | ---: |
| 1. Análisis | Revisar los requisitos de las interfaces y la estructura de las páginas. | 8 h |
| 2. Diseño y planificación | Definir la estructura HTML y los componentes visuales que se utilizarán. | 10 h |
| 3. Maquetación HTML5 | Crear las páginas de inicio de sesión, registro y panel de control. | 31 h |
| 4. Desarrollo CSS | Aplicar estilos, organizar las clases mediante BEM y adaptar los diseños. | 71 h |
| 5. Pruebas y validación | Comprobar la estructura de las páginas, los enlaces y la visualización de los componentes. | 12 h |
| 6. Ajustes finales | Corregir errores, mejorar detalles visuales y actualizar la documentación. | 8 h |
| **Total** | | **140 h** |

**Nota:** Las fechas del Sprint 2 corresponden al periodo comprendido entre el 16 y el 29 de octubre de 2026, según la planificación del proyecto.

### 2. Diagrama de Gantt sencillo

La siguiente tabla muestra la distribución aproximada de las tareas durante el Sprint 2, desde el 16 hasta el 29 de octubre de 2026.

| Fase | 16-19 oct. | 20-23 oct. | 24-26 oct. | 27-29 oct. |
| --- | :---: | :---: | :---: | :---: |
| Análisis | ■ | | | |
| Diseño y planificación | ■ | ■ | | |
| Maquetación HTML5 | | ■ | ■ | |
| Desarrollo CSS | | | ■ | ■ |
| Pruebas y validación | | | | ■ |
| Ajustes finales | | | | ■ |

**Resultado esperado:** Al finalizar el Sprint 2, el 29 de octubre de 2026, se espera haber completado la maquetación HTML5, la aplicación de estilos CSS y las pruebas y correcciones finales previstas.
---
## COEvaluación
- Daniel Jiménez Ramírez - 100% de las tareas completadas en tiempo y forma.
- Pepe Gil Cué - 100% de las tareas completadas en tiempo y forma.
- Daniel Ortiz - 100% de las tareas completadas en tiempo y forma.
