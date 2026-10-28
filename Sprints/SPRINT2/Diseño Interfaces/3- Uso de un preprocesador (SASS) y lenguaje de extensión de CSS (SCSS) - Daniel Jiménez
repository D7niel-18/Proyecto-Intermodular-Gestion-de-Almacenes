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
