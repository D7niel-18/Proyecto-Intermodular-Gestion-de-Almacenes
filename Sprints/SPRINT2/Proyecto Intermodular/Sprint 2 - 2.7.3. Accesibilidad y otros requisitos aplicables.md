# Accesibilidad web

## 1. Objetivo de la accesibilidad

La accesibilidad web tiene como objetivo garantizar que StockLink pueda ser utilizado por el mayor número posible de personas, incluidas aquellas que tengan limitaciones visuales, auditivas, motrices o dificultades para comprender la información presentada en pantalla.

Para conseguirlo, el diseño y el desarrollo de la aplicación tendrán en cuenta las pautas de accesibilidad para el contenido web (WCAG) y los requisitos de accesibilidad de la norma UNE-EN 301 549, relacionados con los productos y servicios de las tecnologías de la información y la comunicación.

La accesibilidad se tendrá en cuenta desde el diseño de las interfaces hasta la implementación y las pruebas. No se trata únicamente de mejorar el aspecto visual, sino de facilitar que todos los usuarios puedan navegar, consultar información y gestionar el inventario de forma comprensible y eficaz.

## 2. Medidas de accesibilidad

### 2.1. Contraste y uso del color

Se comprobará que exista suficiente contraste entre el texto y el fondo para facilitar la lectura de la información. Como referencia, se utilizarán los criterios WCAG de nivel AA, que establecen una relación mínima de contraste de 4,5:1 para texto normal y de 3:1 para texto grande.

StockLink contará con un tema claro y otro oscuro. Ambos deberán mantener un contraste adecuado entre los textos, los fondos, los campos de los formularios, los botones y los elementos de navegación.

Además, los colores no se utilizarán como único medio para transmitir información. Por ejemplo, cuando un producto tenga pocas unidades disponibles, se mostrará un aviso como «Stock bajo» junto con el color de advertencia. De esta manera, los usuarios podrán comprender el estado del inventario aunque tengan dificultades para distinguir determinados colores.

**Justificación:** un contraste insuficiente puede dificultar la lectura, especialmente en personas con baja visión o cuando se utiliza la aplicación en pantallas con mucha iluminación ambiental.

### 2.2. Navegación mediante teclado

La aplicación permitirá utilizar sus principales funcionalidades sin depender exclusivamente del ratón. Los enlaces, botones, campos de formulario y demás controles interactivos deberán poder alcanzarse mediante el teclado.

Se mantendrá un orden de tabulación lógico, siguiendo la distribución visual de la interfaz. También se mostrará un indicador de foco visible para que el usuario pueda identificar en todo momento qué elemento está seleccionado.

Por ejemplo, un usuario deberá poder recorrer los campos del formulario de inicio de sesión, introducir sus credenciales y activar el botón de acceso utilizando el teclado.

**Justificación:** algunas personas tienen dificultades para utilizar un ratón debido a limitaciones motrices o utilizan dispositivos de entrada alternativos. La navegación por teclado permite acceder a las funciones sin depender de este periférico.

### 2.3. Tamaño y legibilidad del texto

Se utilizarán tipografías legibles, tamaños de letra adecuados y una jerarquía visual clara mediante títulos, subtítulos y textos secundarios.

El diseño permitirá ampliar el texto y el contenido de la página sin perder información ni funcionalidad. Se evitarán textos excesivamente pequeños, párrafos difíciles de leer y elementos que dependan únicamente de diferencias sutiles de tamaño o color para comunicar su importancia.

En las tablas de inventario, los nombres de los productos, las cantidades, las categorías y los avisos deberán poder identificarse fácilmente.

**Justificación:** una buena legibilidad facilita la comprensión de la información y permite que los usuarios adapten la visualización a sus necesidades.

### 2.4. Compatibilidad con lectores de pantalla

Se utilizará HTML semántico para estructurar correctamente las páginas.

Los campos de los formularios tendrán etiquetas descriptivas asociadas, y los botones y enlaces utilizarán textos que expliquen claramente su función. Las imágenes que aporten información incluirán textos alternativos adecuados; las imágenes decorativas no generarán información redundante.

También se proporcionarán mensajes de error comprensibles y asociados a los campos correspondientes. Cuando sea necesario, se utilizarán atributos ARIA para aportar información adicional a las tecnologías de asistencia, sin sustituir los elementos HTML semánticos.

**Justificación:** los lectores de pantalla interpretan la estructura y las etiquetas de una página para comunicar su contenido a las personas con discapacidad visual. Una estructura correcta permite comprender mejor la interfaz y utilizar sus funcionalidades.

### 2.5. Formularios y mensajes de error

Los formularios de StockLink, como los de inicio de sesión, registro y gestión de productos, indicarán claramente qué información debe introducirse en cada campo.

Cuando se produzca un error, se mostrará un mensaje que explique qué ha ocurrido y cómo puede solucionarse. No se dependerá únicamente de un borde rojo o de un icono para señalar el problema.

Por ejemplo, si un usuario introduce una cantidad de stock no válida, la aplicación mostrará un mensaje que indique que debe introducir una cantidad válida. Los errores deberán poder identificarse tanto visualmente como mediante tecnologías de asistencia.

**Justificación:** los mensajes claros ayudan a evitar errores y permiten corregirlos sin confusión, especialmente a usuarios con dificultades de comprensión o que utilizan lectores de pantalla.

### 2.6. Diseño adaptable y accesible

La interfaz se diseñará para funcionar en ordenadores, tabletas y móviles. Los elementos se reorganizarán según el tamaño de la pantalla, evitando que el contenido se corte o que los controles resulten difíciles de utilizar.

Los botones y enlaces tendrán un tamaño y una separación adecuados para facilitar su selección, especialmente en pantallas táctiles. Las tablas y los listados de productos se adaptarán para que la información importante siga siendo accesible en pantallas pequeñas.

**Justificación:** los usuarios pueden acceder a StockLink desde dispositivos diferentes y en condiciones de uso variadas. Un diseño adaptable facilita la consulta y gestión del inventario sin perder información ni funcionalidades esenciales.

### 2.7. Consistencia y claridad de la interfaz

Se mantendrá una estructura coherente en las distintas páginas de StockLink. Los botones, menús, formularios, iconos y mensajes seguirán criterios visuales y de funcionamiento consistentes.

Las acciones importantes, como añadir un producto, modificar existencias o eliminar un registro, estarán identificadas mediante textos claros. Cuando una operación pueda tener consecuencias importantes, se proporcionará una confirmación o una forma de revisar la acción antes de completarla.

**Justificación:** una interfaz consistente reduce la necesidad de aprender cómo funciona cada pantalla por separado y facilita la navegación a usuarios con distintos niveles de experiencia tecnológica.

## 3. Comprobación de la accesibilidad

Durante el desarrollo se realizarán pruebas para comprobar que las medidas previstas funcionan correctamente. Estas comprobaciones incluirán:

- **Contraste:** verificar las combinaciones de colores de los temas claro y oscuro mediante herramientas de análisis de contraste.
- **Teclado:** recorrer las páginas y formularios sin utilizar el ratón, comprobando el orden de navegación y la visibilidad del foco.
- **Ampliación del texto:** aumentar el tamaño del contenido y comprobar que no se pierde información ni funcionalidad.
- **Lectores de pantalla:** revisar la estructura, las etiquetas de los campos, los nombres de los controles y los mensajes de error.
- **Diseño adaptable:** comprobar la visualización en diferentes tamaños de pantalla y navegadores.
- **Formularios:** probar errores de validación para comprobar que los mensajes sean claros y accesibles.

Las herramientas automáticas de evaluación podrán ayudar a detectar determinados problemas, pero se complementarán con comprobaciones manuales, ya que no todos los requisitos de accesibilidad pueden verificarse automáticamente.

## 4. Resultado esperado

La aplicación StockLink pretende ofrecer una interfaz comprensible, coherente y accesible que facilite la gestión del inventario a usuarios con diferentes capacidades y niveles de experiencia tecnológica.

La aplicación de estas medidas contribuirá a mejorar la legibilidad, la navegación, la prevención de errores y la adaptación a distintos dispositivos. El cumplimiento de los criterios de accesibilidad se evaluará durante las pruebas, por lo que no se considerará garantizado hasta que se hayan realizado las comprobaciones correspondientes.
