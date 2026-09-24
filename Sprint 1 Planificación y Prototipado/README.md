# Sprint 1 Planificacion y prototipado

* **Objetivo**. Planificar la creación de una interfaz web valorando y aplicando especificaciones de diseño.  
* **Justificación**. Aquí sentamos las bases del proyecto. Antes de escribir una sola línea de código, el equipo debe conceptualizar la interfaz. Es el momento de que definan el mapa de navegación, apliquen la teoría del color y construyan los primeros prototipos de alta fidelidad garantizando que la experiencia de usuario (UX) tenga coherencia visual.

Así, entonces, el equipo deberá presentar un **plan detallado de creación de la interfaz**, que incluya:

1. **Análisis inicial**  
   * Identificación del público objetivo.

**PYMEs con uno o varios locales** (retail, hostelería, farmacias, almacenes) que hoy gestionan el stock en Excel, papel o de memoria.

**Multiempresas/franquicias** pequeñas-medianas con varios locales que necesitan verlos todos desde una misma sesión.

**Usuarios finales:** gerentes (visión global y decisiones), encargados de local (consulta/actualización diaria), personal operativo (entradas/salidas).

**Nivel tecnológico** medio-bajo, interfaz simple, sin curva de aprendizaje, usable en móvil/tablet.

* Objetivos principales de la interfaz.

**Centralizar el stock** de varias empresas/locales en una sola sesión, con navegación clara entre ellos.

**Visibilidad en tiempo real** (existencias, alertas de stock bajo).

**Minimizar clics** para registrar movimientos de stock.

**Escalar bien** tanto para 1 local como para 10\.

**Jerarquía visual clara y color funcional** (alertas, estados).

**Transmitir fiabilidad y profesionalidad.**

* Benchmarking: referencias de 2 sitios similares.

**Zoho Inventory**: gestión multialmacén, alertas de stock bajo, órdenes de compra integradas. A tomar: sistema de alertas y navegación multialmacén. Debilidad: diseño algo genérico.

**Holded (Inventario)**: control de stock en tiempo real entre almacenes, alarmas por umbral, informes de valor de inventario, modelo modular (básico/avanzado). A tomar: escalado de funciones por módulos. Debilidad: informes e inventario algo básico según usuarios.

**Conclusión**: ambos validan multialmacén, alertas, centralización como imprescindibles. Nuestro diferencial: gestión multiempresa fluida desde una única sesión, pensada para negocios pequeños con varios locales.

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

**Fase**          	   S1 		   S2 		  S3   		S4  		 S5 

**Análisis**    	 ███

**Diseño**           			  ███	  	███

**Validación**                  					 ███

**Ajustes**                        						          ███

**Cronograma de ejecución**

El proyecto se ha planificado en cuatro fases secuenciales, distribuidas a lo largo de cinco semanas, contamos con un tiempo mayor, para en caso de errores o posibles mejoras poder ejecutarlas. El objetivo es garantizar un desarrollo ordenado y con puntos de control claros entre cada etapa.

En la **fase de análisis** (1 semana)  Antes de nada, situarnos sobre el contenido, planificación y finalidad del proyecto, una vez asentados, se recopilan los requisitos del sistema de gestión de stock multiempresa: qué información necesita gestionar cada empresa, qué usuarios interactuarán con el sistema y qué funcionalidades mínimas deben existir.

En la **fase de diseño** (2 semanas) se define la arquitectura de la aplicación y el modelo de datos: diseño (tablas de empresas, productos, inventario, movimientos de stock), diseño de la interfaz de usuario y planificación de las funcionalidades.

En la **fase de validación** (1 semana) se comprueba que el sistema diseñado responde a los requisitos definidos en la fase de análisis. Esto puede incluir pruebas con datos de ejemplo, revisión con el tutor para posibles mejoras, y detección de posibles carencias o errores.

Por último, en la **fase de ajustes** (1 semana) se corrigen las incidencias detectadas durante la validación y se refina el sistema antes de la entrega final.

Esta planificación permite avanzar de forma progresiva, dedicando más tiempo a la fase de diseño por ser la más importante para el correcto funcionamiento del sistema.

4. **Presupuesto básico**  
   * Estimar costes de recursos humanos (horas de trabajo del equipo).
El principal recurso del proyecto es el tiempo dedicado por los integrantes del equipo. El proyecto está formado por 3 miembros, estimando aproximadamente 200 horas de trabajo por persona durante el desarrollo. Estas horas incluyen tareas de análisis, diseño, programación, pruebas, documentación y corrección de errores.

Somos 3 miembros en el equipo:
Cada miembro cobrará por hora 9 euros x las horas estimadas que son 200 hr de trabajo equivale a un total de 1.800 euros por persona y hace un total de gasto solamente en horas de 5.400 euros
  
   * Herramientas o licencias necesarias.
Se utilizarán principalmente herramientas gratuitas o de código abierto para reducir los costes del proyecto:

Visual Studio Code: editor de código gratuito.
Node.js y Express: tecnologías gratuitas y de código abierto para el backend.
Angular: framework gratuito y de código abierto para el frontend.
MySQL: sistema de gestión de bases de datos disponible en una edición gratuita.
Git y GitHub: utilizados para el control de versiones y trabajo colaborativo.
Figma: utilizado para el diseño y prototipado de la interfaz, utilizando las funcionalidades disponibles en su plan gratuito.

Coste estimado de licencias: 0 €, siempre que se utilicen las versiones y planes gratuitos.

   * Otros gastos (pruebas de usuarios, imágenes, iconos, etc.).
También se han considerado posibles gastos relacionados con el desarrollo:

Pruebas con usuarios: 0 €, realizadas con compañeros, profesores o usuarios cercanos.
Imágenes e iconos: 0 €, utilizando recursos gratuitos o iconos incluidos en librerías de uso permitido.
Dominio y alojamiento: no necesarios durante la fase de desarrollo. En caso de publicar la aplicación, supondrían un coste adicional.
Servidor/base de datos de producción: no necesario durante el desarrollo, ya que se puede trabajar mediante un entorno local.

# Duración y entrega

* **Entrega y presentación:** 06/10/2025.  
* **Presentación**: 10 minutos  
* **Formato de entrega:** En un repositorio de Github  
  * README  
  * Presentación en diapositivas, Google Slides.
