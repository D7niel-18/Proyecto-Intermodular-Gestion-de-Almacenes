# Sprint 1 Planificacion y prototipado

* **Objetivo**. Planificar la creación de una interfaz web valorando y aplicando especificaciones de diseño.  
* **Justificación**. Aquí sentamos las bases del proyecto. Antes de escribir una sola línea de código, el equipo debe conceptualizar la interfaz. Es el momento de que definan el mapa de navegación, apliquen la teoría del color y construyan los primeros prototipos de alta fidelidad garantizando que la experiencia de usuario (UX) tenga coherencia visual.

Así, entonces, el equipo deberá presentar un **plan detallado de creación de la interfaz**, que incluya:

## 1. **Análisis inicial**  
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

## 2. **Plan de diseño de la interfaz**  
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
  [Prototipo Web usando Stitch  ](https://stitch.google.com/preview/7971768782049281677?node-id=49c4c46be7da4c6aa4f76b6c2cab9637)

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

## 3. **Cronograma de ejecución**  
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

### 4.1 Cómo hemos hecho la estimación

Hemos calculado las horas partiendo de lo que dedicamos cada semana al proyecto. Con eso sacamos las horas de cada sprint según las semanas que dura (ahora alineadas con las fechas oficiales de cada Resultado de Aprendizaje del módulo 0615), y después repartimos esas horas en tareas. Las horas totales no las hemos puesto a ojo: salen de sumar las tareas de los seis sprints.

### 4.2 Dedicación semanal

| Concepto | Horas/semana por persona |
| --- | :---: |
| Trabajo en clase para el proyecto | 6 h |
| Trabajo en casa | 6 h |
| **Total** | **12 h** |

Horas de cada sprint = semanas del sprint × 12 h por persona (redondeado).

### 4.3 Horas por sprint

Fechas tomadas directamente del documento oficial del módulo (fechas de inicio/fin de cada RA):

| Sprint | Fechas (oficiales, por RA) | Semanas | Horas/persona | Horas equipo (×3) |
| --- | --- | :---: | :---: | :---: |
| S1 - Planificación y Prototipado (RA1) | 17/09/26 - 06/10/26 | 2,7 | 32 h | 96 h |
| S2 - Maquetación Avanzada y Estilos (RA2) | 08/10/26 - 26/11/26 | 7,0 | 84 h | 252 h |
| S3 - Tratamiento Multimedia (RA3) | 01/12/26 - 15/12/26 | 2,0 | 24 h | 72 h |
| S4 - Integración Interactiva (RA4) | 17/12/26 - 14/01/27 | 4,0 | 48 h | 144 h |
| S5 - Accesibilidad y Visibilidad (RA5) | 14/01/27 - 28/01/27 | 2,0 | 24 h | 72 h |
| S6 - Usabilidad y Auditoría Final (RA6) | 28/01/27 - 09/02/27 | 1,7 | 20 h | 60 h |
| **TOTAL** | 17/09/26 - 09/02/27 | **19,4** | **232 h** | **696 h** |

Comprobación: 232 h entre 19,4 semanas son unas 12 h por semana, que es lo que dedicamos de verdad (6 en clase + 6 en casa). El Sprint 2 es el más largo porque el RA2 pesa un 30% de la nota del módulo, el mayor peso de los seis.

### 4.4 Tareas de cada sprint

Las tareas y proporciones se mantienen igual que en la versión anterior, reescaladas a las nuevas horas totales de cada sprint. Reuniones y contingencia (≈10%) se recalculan según el número real de semanas de cada sprint.

**S1 - Planificación y Prototipado (96 h)**

| Tarea | Horas |
| --- | ---: |
| Análisis y requisitos | 9 |
| Investigación de usuarios y referentes | 8 |
| Planificación | 8 |
| Arquitectura de información | 5 |
| Wireframes | 19 |
| Guía de estilos en Figma | 6 |
| Prototipo en Figma | 14 |
| Revisión y correcciones | 5 |
| Documentación del sprint | 3 |
| Reuniones (3 × 3 personas × 1 h) | 9 |
| Contingencia (≈10 %) | 10 |
| **Total S1** | **96** |

**S2 - Maquetación Avanzada y Estilos (252 h)**

| Tarea | Horas |
| --- | ---: |
| Estructura HTML5 semántica | 56 |
| CSS base | 17 |
| Maquetación responsive | 98 |
| Componentes reutilizables | 14 |
| Validación W3C | 10 |
| Git y GitHub | 11 |
| Reuniones (7 × 3 personas × 1 h) | 21 |
| Contingencia (≈10 %) | 25 |
| **Total S2** | **252** |

**S3 - Tratamiento Multimedia (72 h)**

| Tarea | Horas |
| --- | ---: |
| Selección de recursos y licencias | 7 |
| Optimización de imágenes | 9 |
| Vídeo y audio | 11 |
| Multimedia en HTML | 9 |
| Iconos y gráficos SVG | 5 |
| Organización de recursos | 4 |
| Pruebas de peso y rendimiento | 7 |
| Revisión en las páginas | 7 |
| Reuniones (2 × 3 personas × 1 h) | 6 |
| Contingencia (≈10 %) | 7 |
| **Total S3** | **72** |

**S4 - Integración Interactiva (144 h)**

| Tarea | Horas |
| --- | ---: |
| Diseño del comportamiento | 8 |
| Menú responsive | 11 |
| Formulario con validación | 19 |
| Componentes dinámicos | 27 |
| Eventos y DOM | 19 |
| Pruebas en navegadores | 19 |
| Refactorización y comentarios | 15 |
| Reuniones (4 × 3 personas × 1 h) | 12 |
| Contingencia (≈10 %) | 14 |
| **Total S4** | **144** |

**S5 - Accesibilidad y Visibilidad (72 h)**

| Tarea | Horas |
| --- | ---: |
| Auditoría inicial | 5 |
| Semántica y ARIA | 9 |
| Contraste y tipografía | 4 |
| Teclado y foco | 8 |
| Textos alternativos y subtítulos | 6 |
| Formularios accesibles | 4 |
| Pruebas con lector de pantalla | 7 |
| Declaración de accesibilidad | 3 |
| Adaptación a distintos usuarios | 7 |
| Correcciones y nueva auditoría | 6 |
| Reuniones (2 × 3 personas × 1 h) | 6 |
| Contingencia (≈10 %) | 7 |
| **Total S5** | **72** |

**S6 - Usabilidad y Auditoría Final (60 h)**

| Tarea | Horas |
| --- | ---: |
| Test de usabilidad | 8 |
| Análisis de resultados | 4 |
| Correcciones y mejoras | 11 |
| Auditoría final | 6 |
| Documentación final | 10 |
| Preparar la presentación | 4 |
| Revisión final y entrega | 5 |
| Reuniones (2 × 3 personas × 1 h) | 6 |
| Contingencia (≈10 %) | 6 |
| **Total S6** | **60** |

**Resumen**

| Concepto | Horas |
| --- | ---: |
| Tareas (S1 a S6) | 604 |
| Reuniones | 60 |
| Contingencia (≈10 %) | 69 |
| **Total proyecto** | **696** |

### 4.5 Reparto por miembro

- **Daniel Jiménez Ramírez → Diseño UI/UX**
- **Pepe Gil Cué → Desarrollo Frontend**
- **Daniel Ortiz → SysAdmin / Control de Calidad**

**Desglose de horas por sprint y persona**

| Sprint | Daniel JR (UI/UX) | Pepe GC (Frontend) | Daniel O (SysAdmin/QA) | Total sprint |
| --- | ---: | ---: | ---: | ---: |
| S1 · Planificación y Prototipado | 53 h | 18 h | 25 h | 96 h |
| S2 · Maquetación Avanzada y Estilos | 22 h | 193 h | 37 h | 252 h |
| S3 · Tratamiento Multimedia | 16 h | 33 h | 23 h | 72 h |
| S4 · Integración Interactiva | 16 h | 94 h | 34 h | 144 h |
| S5 · Accesibilidad y Visibilidad | 15 h | 21 h | 36 h | 72 h |
| S6 · Usabilidad y Auditoría Final | 16 h | 20 h | 24 h | 60 h |
| **TOTAL** | **138 h** | **379 h** | **179 h** | **696 h** |

*El Sprint 2 (7 semanas, 30% de la nota) concentra la mayor parte del trabajo de Pepe (frontend), al ser el sprint de maquetación y estilos puro.*

**Coste por rol**

| Miembro | Rol | Horas | Coste/hora | Subtotal |
| --- | --- | ---: | ---: | ---: |
| Daniel Jiménez Ramírez | Diseño UI/UX | 138 h | 14 €/h | 1.932 € |
| Pepe Gil Cué | Desarrollo Frontend | 379 h | 11 €/h | 4.169 € |
| Daniel Ortiz | SysAdmin / Control de Calidad | 179 h | 12 €/h | 2.148 € |
| **TOTAL** | | **696 h** | | **8.249 €** |

### 4.6 Coste por hora

Se mantiene la tarifa diferenciada por rol usada en la versión anterior, tomada de Glassdoor España a nivel junior:

- Diseñador UX/UI Junior: **14 €/h**
- Front End Developer Junior: **11 €/h**
- Administrador de Sistemas Junior: **12 €/h**

### 4.7 Recursos humanos

- Horas totales: 696 h (138 + 379 + 179)
- Tarifas: 14 €/h, 11 €/h y 12 €/h según rol
- Valor estimado del trabajo: **8.249 €**

### 4.8 Equipos (amortización)

- Portátil: 800 € y 4 años de vida útil → 200 €/año
- El proyecto dura ahora 20,7 semanas (17/09/26 - 09/02/27) → 200 × 20,7/52 ≈ 80 € por equipo
- 3 equipos: ≈ **240 €** (valor imputado, no gasto real)

### 4.9 Herramientas y licencias

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

### 4.10 Pruebas con usuarios y recursos multimedia

- Pruebas con usuarios: 0 €, las haremos con compañeros, profesores o gente cercana.
- Imágenes, vídeo y audio: 0 €, usaremos recursos con licencia libre y apuntaremos la licencia de cada uno en S3.

---

## 5 Resumen económico

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
| Recursos humanos (reparto por rol) | 8.249 € |
| Amortización de equipos | 240 € |
| **Total** | **8.489 €** |

### Bloque C - Puesta en producción (primer año, solo si se publica)

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
| Mantenimiento: 1 h/mes × 12 meses × 12 €/h | 144 € |
| Costes de producción (con IVA) | 61,71 € |
| **Coste anual estimado** | **205,71 €** |

---

## 6 Conclusión

Durante el desarrollo el proyecto no tiene gasto real (0 €), porque usamos herramientas gratuitas y trabajamos en local. El valor estimado del trabajo es de 8.489 €, resultado de repartir las 696 horas entre los tres roles del equipo (diseño UI/UX, desarrollo frontend y SysAdmin/control de calidad) a tarifas junior distintas según cada perfil, más la amortización de los equipos. El proyecto se extiende del 17/09/2026 al 09/02/2027 (19,4 semanas lectivas según el calendario oficial del módulo), con el Sprint 2 (maquetación y estilos) como el más largo al pesar un 30% de la nota. Si se publicara, la puesta en producción costaría unos 62 € el primer año y el mantenimiento anual rondaría los 206 €.

---

## 7 Cambios respecto a la versión anterior

| Apartado | Antes | Ahora | Motivo |
| --- | --- | --- | --- |
| Fechas de los sprints | Estimadas a ojo | Tomadas del documento oficial del módulo (fechas de inicio/fin de cada RA) | El profesor aportó el calendario oficial |
| Horas totales | 732 h | 696 h | Recalculado con las semanas reales de cada RA |
| Reparto de semanas | Más o menos iguales por sprint | Muy desigual (S2 = 7 semanas por su peso del 30%) | El peso de cada RA en la nota marca su duración real |
| Horas por persona | 189/327/216 h | 138/379/179 h | Recalculado con las nuevas horas por sprint |
| Equipos (amortización) | 264 € (23 semanas) | 240 € (20,7 semanas) | Duración real del proyecto según calendario oficial |
| Valor del desarrollo | 9.099 € | 8.489 € | Recalculado con las nuevas horas totales |

---
## COEvaluación
- Daniel Jiménez Ramírez - 100% de las tareas completadas en tiempo y forma.
- Pepe Gil Cué - 100% de las tareas completadas en tiempo y forma.
- Daniel Ortiz - 100% de las tareas completadas en tiempo y forma.
