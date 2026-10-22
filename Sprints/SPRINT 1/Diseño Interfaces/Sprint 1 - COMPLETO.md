# Sprint 1 Planificacion y prototipado

* **Objetivo**. Planificar la creación de una interfaz web valorando y aplicando especificaciones de diseño.  
* **Justificación**. Aquí sentamos las bases del proyecto. Antes de escribir una sola línea de código, el equipo debe conceptualizar la interfaz. Es el momento de que definan el mapa de navegación, apliquen la teoría del color y construyan los primeros prototipos de alta fidelidad garantizando que la experiencia de usuario (UX) tenga coherencia visual.

Así, entonces, el equipo deberá presentar un **plan detallado de creación de la interfaz**, que incluya:

1. **Análisis inicial**  
   * Identificación del público objetivo.

- El análisis del público objetivo se ha realizado teniendo en cuenta que la aplicación está destinada a la gestión de stock de diferentes empresas y locales, por lo que sus usuarios presentan perfiles, necesidades y contextos de uso distintos. Identificar estos perfiles permite orientar las decisiones de diseño hacia una experiencia sencilla, clara e intuitiva.

- Administrador/gerente multiempresa: propietario o responsable que gestiona uno o varios locales desde la misma cuenta. Necesita una visión global y desglosada del stock, cambiar de negocio sin perder contexto, y acceder a informes que le ayuden a decidir compras y reposición. Usa la aplicación principalmente desde ordenador, con nivel tecnológico medio.

- Encargado de local/almacén: responsable del día a día de un local, que recibe mercancía, ajusta inventario y registra ventas. Necesita consultar y actualizar el stock de forma rápida, con avisos claros ante niveles bajos. Trabaja desde el propio local, a menudo con interrupciones, usando tablet o móvil además de ordenador.

Personal operativo: realiza tareas puntuales (recuento, entrada de pedidos) bajo supervisión, con acceso limitado a lo esencial. Requiere procesos visuales, con el mínimo de pasos posible, desde dispositivos móviles.

* Objetivos principales de la interfaz.

**Centralizar el stock** de varias empresas/locales en una sola sesión, con navegación clara entre ellos.

**Visibilidad en tiempo real** (existencias, alertas de stock bajo).

**Minimizar clics** para registrar movimientos de stock.

**Escalar bien** tanto para 1 local como para 10\.

**Jerarquía visual clara y color funcional** (alertas, estados).

**Transmitir fiabilidad y profesionalidad.**

* Benchmarking: referencias de 2 sitios similares.
- Zoho Inventory: software de gestión de inventario pensado para pymes y comercios con venta multicanal. Permite ver las existencias en tiempo real, gestionar varios almacenes y controlar proveedores con órdenes de compra. Destaca por sus avisos cuando el stock de un producto es bajo y porque conecta bien el stock con las compras y las ventas. Como punto débil, su interfaz es funcional pero bastante genérica.

- inFlow Inventory: software específico de gestión de inventario y almacenes, no es un ERP completo. Está pensado para pymes de retail, distribución y fabricación. Permite gestionar stock en varias ubicaciones, escanear códigos de barras desde el móvil, asignar pedidos a empleados y controlar permisos según el rol de cada usuario. Se valora mucho por su interfaz sencilla e intuitiva. Como debilidad, algunos usuarios dicen que el proceso de primeros pasos (onboarding) podría mejorar.

- Sortly: aplicación de gestión de inventario muy visual y sencilla, pensada para negocios pequeños que gestionan stock en varias ubicaciones (almacenes, furgonetas, obras). Organiza el inventario en carpetas y subcarpetas por ubicación, permite escanear códigos QR, avisa cuando el stock es bajo y da permisos distintos según el usuario. Se valora por sincronizar todo en tiempo real. Como debilidad, sus permisos no son muy detallados (cuesta restringir el acceso a datos concretos).

- Qué nos diferencia de estas herramientas
Las tres aplicaciones analizadas resuelven bien el problema de una empresa con varios almacenes, pero ninguna está pensada para gestionar varias empresas distintas desde la misma cuenta. Ahí es donde nuestro proyecto aporta algo diferente:

Multiempresa de verdad, no solo multialmacén. El usuario puede cambiar entre negocios completamente distintos, con sus propios productos, stock y usuarios, sin cerrar sesión ni tener que crear varias cuentas. Zoho, inFlow y Sortly separan almacenes dentro de una misma empresa, pero no permiten gestionar empresas distintas desde el mismo sitio.
Pensado para pymes con varios locales pequeños, mientras que Zoho e inFlow están más orientados a negocios medianos o grandes, y Sortly está pensado más para controlar objetos o activos que para gestionar stock comercial.
Interfaz adaptada a los distintos perfiles de usuario (administrador, encargado, operativo), con vistas y permisos pensados para cada uno, en vez de una interfaz igual para todos. Esto soluciona el problema de permisos poco detallados que tiene Sortly.
Diseño sencillo, evitando la complejidad típica de un ERP y la sensación de interfaz genérica que tiene Zoho.
En resumen, no intentamos competir en funciones básicas de inventario, que ya están bien resueltas por estas herramientas, sino en resolver algo que ninguna cubre bien: una pyme con varios negocios independientes, que hoy necesitaría varias cuentas o herramientas distintas, y que con nuestra aplicación lo gestiona todo desde un único sitio.

2. **Plan de diseño de la interfaz**  
   * Definición de requerimientos funcionales y estéticos.  
   * Elaboración de **bocetos (wireframes)** de la página de inicio y una sección interior (puede hacerse en papel o en herramientas como Figma, Canva, Balsamiq…).  
     En nuestro caso hemos usado FIGMA para la realización de los Wireframe y Mockup hemos hecho una página de login y registro de la web, nos faltaria hacer el dashboard.

   * Wireframe Login y Registro 
<img width="812" height="557" alt="wireframe" src="https://github.com/user-attachments/assets/7305f605-ea9c-4a2b-a058-a93abb293aa6" />

   * Wireframe Dashboard
<img width="861" height="588" alt="Wireframe - dashboard" src="https://github.com/user-attachments/assets/6a0e7ba2-ff73-453e-a1da-7381d4a191c3" />

       
   * Mockup Login y Registro (Modo oscuro)
<img width="1599" height="592" alt="Mockup - negro" src="https://github.com/user-attachments/assets/6efe1b27-3298-41a2-9885-b28fb801b59b" />


   * Mockup Login y Registro (Modo claro)

<img width="1299" height="508" alt="Mockup - blanco" src="https://github.com/user-attachments/assets/a88b91f5-4041-4c7e-af7f-8a33f55e6124" />

   * Mockup Dashboard (Modo oscuro)
<img width="1297" height="805" alt="Mockup -Dashboard - negro" src="https://github.com/user-attachments/assets/939d1e2e-fff9-4536-ad78-e90362f292d2" />

   * Mockup Dashboard (Modo claro)
<img width="1550" height="820" alt="Mockup -Dashboard - blanco" src="https://github.com/user-attachments/assets/52337165-5b0b-4e3f-80df-20e9e4c93183" />

*  Prototipo.  
  Se hara un prototipo inicial usando HTML semántico, CSS y algo de Javascript  
  * Justificación de las decisiones de diseño (colores, tipografía, estructura).

  Decisión de diseño: tema oscuro \+ azul como color primario

La aplicación se ha diseñado con dos temas visuales, oscuro y claro, permitiendo al usuario alternar entre ambos según sus preferencias. Los dos modos mantienen la misma estructura, componentes y funcionalidades, modificando únicamente la apariencia visual.

Esta decisión busca mejorar la comodidad, accesibilidad y personalización de la aplicación, permitiendo que cada usuario utilice el tema que mejor se adapte a sus preferencias o al entorno en el que se encuentre.

**Tema oscuro**

El tema oscuro está pensado especialmente para un uso prolongado de la aplicación, como puede ocurrir al consultar y gestionar información desde el dashboard.

La paleta de colores utilizada es:

* \#2F91F9 — Azul principal: utilizado en botones, elementos interactivos y acciones importantes. Se utiliza como color de acento para destacar los elementos con los que el usuario puede interactuar.  
  * \#151A21 — Fondo izquierdo: utilizado como fondo principal de la zona izquierda de la interfaz.  
  * \#0D1117 — Fondo derecho: utilizado en la zona principal de contenido, creando una separación visual entre las diferentes áreas de la aplicación.  
  * \#1B2129 — Superficies e inputs: utilizado en tarjetas, campos de entrada y otros componentes que necesitan diferenciarse del fondo.  
  * \#E5E7EB — Texto principal: utilizado para títulos y contenido de mayor importancia, proporcionando un contraste adecuado sobre los fondos oscuros.  
  * \#7A8491 — Texto secundario: utilizado para descripciones, información auxiliar y metadatos, creando una jerarquía visual respecto al texto principal.  
  * \#252C35 — Bordes sutiles: utilizado en bordes y separadores para delimitar componentes sin generar un contraste excesivo.

El resultado es una interfaz oscura con contrastes controlados y una jerarquía visual clara, utilizando el azul como elemento de acento para dirigir la atención hacia las acciones principales.

**Tema claro**

Como alternativa al tema oscuro, se ha desarrollado una versión en modo claro, manteniendo la misma estructura y funcionalidad de la aplicación. De esta forma, el usuario puede cambiar entre ambos modos sin que cambie la organización de la interfaz.

La paleta utilizada en el tema claro es:

* \#111827 — Texto principal y botones: utilizado para los elementos de mayor importancia y acciones principales.  
  * \#6B7280 — Texto secundario: utilizado para descripciones y contenido de menor jerarquía.  
  * \#9CA3AF — Texto auxiliar y placeholders: utilizado para información complementaria y textos de ayuda.  
  * \#D1D5DB — Bordes: utilizado para separar y delimitar los diferentes componentes de la interfaz.  
  * \#F3F4F6 — Fondo general: utilizado como base de la aplicación.  
  * \#F9FAFB — Superficies suaves: utilizado en determinadas zonas para crear una separación visual ligera.  
  * \#FFFFFF — Tarjetas y campos: utilizado en tarjetas, formularios e inputs para diferenciarlos claramente del fondo general.

La combinación de estos colores permite mantener una interfaz limpia, sencilla y fácil de leer, utilizando diferentes tonalidades para establecer una jerarquía clara entre la información.

**Colores semánticos**

Independientemente del tema seleccionado, los colores rojo, ámbar y verde se reservan para representar los diferentes estados del stock. Estos colores no se utilizan de forma general en la interfaz para mantener su significado y evitar confusiones.

* Verde: estado correcto o stock disponible.  
  * Ámbar: situación de advertencia o stock bajo.  
  * Rojo: situación crítica o falta de stock.

**Tipografía**

Se ha utilizado Work Sans como fuente principal debido a su buena legibilidad y apariencia limpia, especialmente adecuada para interfaces digitales.

Para la marca, la versión de la aplicación y determinados textos técnicos se utiliza JetBrains Mono, una tipografía monoespaciada que permite diferenciar estos elementos del contenido general y aporta una estética más técnica.

En conjunto, ambos temas mantienen una identidad visual común, compartiendo estructura, tipografía, componentes y criterios de jerarquía. La posibilidad de alternar entre modo oscuro y claro permite personalizar la experiencia sin afectar a la funcionalidad ni a la organización de la aplicación.

3. **Cronograma de ejecución**  
   * Dividir el proyecto en fases (análisis, diseño, validación, ajustes).  
   * Representar los tiempos estimados en una tabla o diagrama de Gantt sencillo.

| **Fase** | **S1** | **S2** | **S3** | **S4** | **S5** |
|---|---|---|---|---|---|
| **Análisis** | 🟦 | | | | |
| **Diseño** | | 🟦 | 🟦 | | |
| **Validación** | | | | 🟦 | |
| **Ajustes** | | | | | 🟦 |

**Cronograma de ejecución**

El proyecto se ha planificado en cuatro fases secuenciales, distribuidas a lo largo de cinco semanas, contamos con un tiempo mayor, para en caso de errores o posibles mejoras poder ejecutarlas. El objetivo es garantizar un desarrollo ordenado y con puntos de control claros entre cada etapa.

En la **fase de análisis** (1 semana)  Antes de nada, situarnos sobre el contenido, planificación y finalidad del proyecto, una vez asentados, se recopilan los requisitos del sistema de gestión de stock multiempresa: qué información necesita gestionar cada empresa, qué usuarios interactuarán con el sistema y qué funcionalidades mínimas deben existir.

En la **fase de diseño** (2 semanas) se define la arquitectura de la aplicación y el modelo de datos: diseño (tablas de empresas, productos, inventario, movimientos de stock), diseño de la interfaz de usuario y planificación de las funcionalidades.

En la **fase de validación** (1 semana) se comprueba que el sistema diseñado responde a los requisitos definidos en la fase de análisis. Esto puede incluir pruebas con datos de ejemplo, revisión con el tutor para posibles mejoras, y detección de posibles carencias o errores.

Por último, en la **fase de ajustes** (1 semana) se corrigen las incidencias detectadas durante la validación y se refina el sistema antes de la entrega final.

Esta planificación permite avanzar de forma progresiva, dedicando más tiempo a la fase de diseño por ser la más importante para el correcto funcionamiento del sistema.

## 4 Presupuesto básico

### 1.4.1 Cómo hemos hecho la estimación

Hemos calculado las horas partiendo de lo que dedicamos cada semana al proyecto. Con eso sacamos las horas de cada sprint según las semanas que dura, y después repartimos esas horas en tareas. Las horas totales no las hemos puesto a ojo: salen de sumar las tareas de los seis sprints.

### 1.4.2 Dedicación semanal

| Concepto | Horas/semana por persona |
| --- | :---: |
| Trabajo en clase para el proyecto | 6 h |
| Trabajo en casa | 6 h |
| **Total** | **12 h** |

Horas de cada sprint = semanas del sprint × 12 h por persona (redondeado).

### 1.4.3 Horas por sprint

| Sprint | Fechas | Semanas | Horas/persona | Horas equipo (×3) |
| --- | --- | :---: | :---: | :---: |
| S1 - Planificación y Diseño UI/UX | 15/09/26 - 15/10/26 | 4,4 | 53 h | 159 h |
| S2 - Maquetación HTML5 y CSS | 16/10/26 - 12/11/26 | 4,0 | 48 h | 144 h |
| S3 - Contenido Multimedia | 13/11/26 - 03/12/26 | 3,0 | 36 h | 108 h |
| S4 - Frontend de Interactividad | 04/12/26 - 23/12/26 | 2,9 | 35 h | 105 h |
| S5 - Accesibilidad Web | 11/01/27 - 04/02/27 | 3,6 | 43 h | 129 h |
| S6 - Usabilidad y Auditoría Final | 05/02/27 - 21/02/27 | 2,4 | 29 h | 87 h |
| **TOTAL** | 15/09/26 - 21/02/27 | **20,3** | **244 h** | **732 h** |

Comprobación: 244 h entre 20,3 semanas son unas 12 h por semana, que es lo que dedicamos de verdad (6 en clase + 6 en casa). Entre S4 y S5 no contamos horas por las vacaciones de Navidad (24/12 - 10/01).

### 1.4.4 Tareas de cada sprint

En cada sprint sumamos las tareas, las reuniones (1 a la semana, 3 personas, 1 h) y una contingencia de más o menos el 10 % para imprevistos.

**S1 - Planificación y Diseño UI/UX (159 h)**

| Tarea | Cálculo | Horas |
| --- | --- | ---: |
| Análisis y requisitos | Objetivos, público y requisitos | 16 |
| Investigación de usuarios y referentes | Perfiles y análisis de 6 webs parecidas | 14 |
| Planificación | Backlog, sprints, Gantt y presupuesto | 14 |
| Arquitectura de información | Mapa del sitio y navegación | 8 |
| Wireframes | 8 páginas × 4 h | 32 |
| Guía de estilos en Figma | Colores, tipografía y componentes | 10 |
| Prototipo en Figma | 8 páginas × 3 h | 24 |
| Revisión y correcciones | Revisión en equipo y con el profesor | 8 |
| Documentación del sprint | Memoria de diseño | 5 |
| Reuniones | 4 reuniones × 3 personas × 1 h | 12 |
| Contingencia (≈ 10 %) | Imprevistos | 16 |
| **Total S1** | | **159** |

**S2 - Maquetación HTML5 y CSS (144 h)**

| Tarea | Cálculo | Horas |
| --- | --- | ---: |
| Estructura HTML5 semántica | 8 páginas × 4 h | 32 |
| CSS base | Variables, reset, tipografía y colores | 10 |
| Maquetación responsive | 8 páginas × 7 h (escritorio, tablet y móvil) | 56 |
| Componentes reutilizables | Cabecera, pie, tarjetas y botones | 8 |
| Validación W3C | Revisar y corregir errores de HTML y CSS | 6 |
| Git y GitHub | Configuración, ramas y commits | 6 |
| Reuniones | 4 reuniones × 3 personas × 1 h | 12 |
| Contingencia (≈ 10 %) | | 14 |
| **Total S2** | | **144** |

**S3 - Contenido Multimedia (108 h)**

| Tarea | Cálculo | Horas |
| --- | --- | ---: |
| Selección de recursos y licencias | Buscar recursos libres y apuntar la licencia | 10 |
| Optimización de imágenes | WebP/JPG, compresión y tamaños | 14 |
| Vídeo y audio | Edición básica e incorporación | 16 |
| Multimedia en HTML | `<picture>`, `srcset`, `<figure>`, `<video>` y `<audio>` | 14 |
| Iconos y gráficos SVG | | 8 |
| Organización de recursos | Carpetas y nombres de archivos | 6 |
| Pruebas de peso y rendimiento | Tiempos de carga y ajustes | 10 |
| Revisión en las páginas | Comprobar las 8 páginas | 10 |
| Reuniones | 3 reuniones × 3 personas × 1 h | 9 |
| Contingencia (≈ 10 %) | | 11 |
| **Total S3** | | **108** |

**S4 - Frontend de Interactividad (105 h)**

| Tarea | Cálculo | Horas |
| --- | --- | ---: |
| Diseño del comportamiento | Definir las interacciones de cada página | 6 |
| Menú responsive | Menú hamburguesa y estados | 8 |
| Formulario con validación | Campos, validación en cliente y mensajes de error | 14 |
| Componentes dinámicos | Galería, acordeón, modal, pestañas y carrusel: 5 × 4 h | 20 |
| Eventos y DOM | JavaScript organizado en módulos | 14 |
| Pruebas en navegadores | Chrome, Firefox y móvil, y corregir fallos | 14 |
| Refactorización y comentarios | Limpiar y documentar el código | 10 |
| Reuniones | 3 reuniones × 3 personas × 1 h | 9 |
| Contingencia (≈ 10 %) | | 10 |
| **Total S4** | | **105** |

**S5 - Accesibilidad Web (129 h)**

| Tarea | Cálculo | Horas |
| --- | --- | ---: |
| Auditoría inicial | Lighthouse, WAVE y axe DevTools (gratis) | 8 |
| Semántica y ARIA | 8 páginas × 2 h | 16 |
| Contraste y tipografía | Revisión según WCAG 2.2 | 8 |
| Teclado y foco | Orden de tabulación, foco visible y enlaces de salto | 14 |
| Textos alternativos y subtítulos | Imágenes, vídeo y audio | 10 |
| Formularios accesibles | Etiquetas, errores y avisos | 8 |
| Pruebas con lector de pantalla | NVDA (gratis) | 12 |
| Declaración de accesibilidad | Nivel alcanzado | 6 |
| Adaptación a distintos usuarios | Alto contraste, tamaño de texto y menos movimiento | 12 |
| Correcciones y nueva auditoría | Aplicar mejoras y volver a comprobar | 10 |
| Reuniones | 4 reuniones × 3 personas × 1 h | 12 |
| Contingencia (≈ 10 %) | | 13 |
| **Total S5** | | **129** |

**S6 - Usabilidad y Auditoría Final (87 h)**

| Tarea | Cálculo | Horas |
| --- | --- | ---: |
| Test de usabilidad | 6 usuarios × 2 h (preparación, sesión y registro) | 12 |
| Análisis de resultados | Conclusiones y lista de mejoras | 6 |
| Correcciones y mejoras | Aplicar los cambios detectados | 16 |
| Auditoría final | Lighthouse, W3C y accesibilidad | 8 |
| Documentación final | Memoria del proyecto | 14 |
| Preparar la presentación | Guion y material | 6 |
| Revisión final y entrega | Comprobar el repositorio y la versión final | 7 |
| Reuniones | 3 reuniones × 3 personas × 1 h | 9 |
| Contingencia (≈ 10 %) | | 9 |
| **Total S6** | | **87** |

**Resumen**

| Concepto | Horas |
| --- | ---: |
| Tareas (S1 a S6) | 596 |
| Reuniones | 63 |
| Contingencia (≈ 10 %) | 73 |
| **Total proyecto** | **732** |

Comprobación: 159 + 144 + 108 + 105 + 129 + 87 = 732 h.

### 1.4.5 Reparto por miembro

| Miembro | Rol | Horas | Coste (18 €/h) |
| --- | --- | ---: | ---: |
| Daniel JR | [rellenar] | 244 h | 4.392 € |
| Pepe GC | [rellenar] | 244 h | 4.392 € |
| Daniel O | [rellenar] | 244 h | 4.392 € |
| **Total** | | **732 h** | **13.176 €** |

### 1.4.6 Coste por hora

Hemos usado 18 €/hora, que es más o menos lo que cobra un desarrollador frontend junior en España. Fuente: [poned aquí el enlace y la fecha de consulta]. Esta tarifa solo sirve para dar un valor orientativo a nuestro trabajo.

### 1.4.7 Recursos humanos

- Horas totales: 732 h
- Tarifa: 18 €/h
- Valor estimado del trabajo: 732 × 18 = **13.176 €**

Este dinero es un valor imputado (lo que costaría contratar el trabajo), no un gasto real, porque es un proyecto académico.

### 1.4.8 Equipos (amortización)

Usamos nuestros propios portátiles, así que imputamos la parte de su vida útil que gastamos en el proyecto:

- Portátil: 800 € y 4 años de vida útil → 200 €/año
- El proyecto dura 23 semanas (15/09/26 - 21/02/27) → 200 × 23/52 ≈ 88 € por equipo
- 3 equipos: ≈ **264 €** (valor imputado, no gasto real)

### 1.4.9 Herramientas y licencias

| Herramienta | Para qué | Coste |
| --- | --- | ---: |
| Visual Studio Code | Editor de código | 0 € |
| HTML5, CSS y JavaScript | Maquetación e interactividad | 0 € |
| Git y GitHub (plan gratuito) | Control de versiones y trabajo en equipo | 0 € |
| Figma (plan gratuito) | Wireframes, prototipo y guía de estilos | 0 € |
| Validador W3C | Validar HTML y CSS | 0 € |
| Lighthouse, WAVE y axe DevTools | Accesibilidad y rendimiento | 0 € |
| NVDA | Lector de pantalla | 0 € |
| **Total** | | **0 €** |

### 1.4.10 Pruebas con usuarios y recursos multimedia

- Pruebas con usuarios: 0 €, las haremos con compañeros, profesores o gente cercana.
- Imágenes, vídeo y audio: 0 €, usaremos recursos con licencia libre y apuntaremos la licencia de cada uno en S3.

---

## 1.5 Resumen económico

### Bloque A - Gasto real durante el desarrollo

| Concepto | Coste |
| --- | ---: |
| Licencias y herramientas | 0 € |
| Pruebas con usuarios | 0 € |
| Imágenes, vídeo y audio | 0 € |
| Entorno de desarrollo (local) | 0 € |
| **Total gasto real** | **0 €** |

### Bloque B - Valor imputado (no es gasto real)

| Concepto | Valor |
| --- | ---: |
| Recursos humanos (732 h × 18 €/h) | 13.176 € |
| Amortización de equipos | 264 € |
| **Total** | **13.440 €** |

La contingencia del 10 % ya está dentro de las 732 h.

### Bloque C - Puesta en producción (primer año, solo si se publica)

Como es una web estática, no necesita servidor de aplicaciones ni base de datos. Precios orientativos sin IVA:

| Concepto | Coste/año |
| --- | ---: |
| Dominio | 15,00 € |
| Hosting estático (≈ 3 €/mes) | 36,00 € |
| Copias de seguridad | 0,00 € (el código está en GitHub) |
| Certificado SSL (Let's Encrypt) | 0,00 € |
| **Subtotal** | **51,00 €** |
| IVA (21 %) | 10,71 € |
| **Total primer año** | **61,71 €** |

### Mantenimiento anual después del lanzamiento

| Concepto | Valor |
| --- | ---: |
| Mantenimiento: 1 h/mes × 12 meses × 18 €/h | 216 € |
| Costes de producción (con IVA) | 61,71 € |
| **Coste anual estimado** | **277,71 €** |

---

## 1.6 Conclusión

Durante el desarrollo el proyecto no tiene gasto real (0 €), porque usamos herramientas gratuitas y trabajamos en local. El valor estimado del trabajo es de 13.440 €, que sale de 732 horas (244 por persona, 12 a la semana: 6 en clase y 6 en casa) repartidas en los seis sprints (15/09/26 - 21/02/27) a 18 €/h. Si se publicara, la puesta en producción costaría unos 62 € el primer año y el mantenimiento anual rondaría los 278 €.

---

## 1.7 Cambios respecto a la versión anterior

| Apartado | Antes | Ahora | Motivo |
| --- | --- | --- | --- |
| Horas totales | 600 h sin desglose | 732 h, suma de tareas | Antes era un número redondo sin justificar |
| Horas por persona | 200 h | 244 h | Ahora se calculan con el calendario de sprints |
| Dedicación semanal | No estaba | 12 h/semana (6 + 6) | Explica de dónde salen las horas |
| Relación con la planificación | Ninguna | Tabla con fechas, semanas y horas | El profesor pidió evidencias |
| Tareas | Sin justificar | Tabla de tareas por sprint | Cada hora tiene una tarea |
| Alcance técnico | Node, Express, Angular y MySQL | HTML5, CSS, multimedia, JS, accesibilidad y usabilidad | Se ajusta a los objetivos reales de los sprints |
| Contingencia | No estaba | ≈ 10 % por sprint (73 h) | Contar con imprevistos |
| Reuniones | No estaban | 63 h | Coordinarse también lleva tiempo |
| Coste por hora | 18 €/h sin fuente | 18 €/h con fuente | Toda tarifa debe estar respaldada |
| Valor del desarrollo | 10.800 € | 13.440 € | Recalculado con horas justificadas + amortización |
| Equipos | No contados | 264 € | Se imputa el uso de los portátiles |
| Hosting | 300 €/año | 36 €/año | Una web estática no necesita servidor de aplicaciones |
| Copias de seguridad | 120 €/año | 0 € | El código está en GitHub |
| Producción (año 1) | 11.235 € | 61,71 € con IVA | Antes se mezclaba el valor imputado con gasto real |
| IVA | No incluido | 21 % | Los costes reales llevan IVA |
| Mantenimiento | No contado | 12 h/año + costes recurrentes | Faltaba el coste tras el lanzamiento |
| Estructura | Todo mezclado | Tres bloques separados | Evitar contradicciones |

---
## COEvaluación
- Daniel Jiménez Ramírez - 100% de las tareas completadas en tiempo y forma.
- Pepe Gil Cué - 100% de las tareas completadas en tiempo y forma.
- Daniel Ortiz - 100% de las tareas completadas en tiempo y forma.
