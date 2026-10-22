## 1.1 Contexto del proyecto
StockLink es una aplicación web de gestión de inventario pensada para pequeñas y medianas empresas (PYMEs) con uno o varios locales (comercio minorista, hostelería, farmacias o almacenes) que hoy gestionan su stock de forma manual, mediante hojas de cálculo, papel o de memoria. El proyecto también da respuesta a multiempresas y franquicias pequeñas-medianas que necesitan visualizar todos sus locales desde una misma sesión..

## 1.2 Problema o necesidad detectada
Para identificar el problema real que resuelve StockLink, se ha investigado en fuentes especializadas en gestión empresarial y pymes, buscando datos sobre los errores más comunes a la hora de controlar el stock en negocios pequeños y medianos. En concreto, se ha consultado Acelera pyme, el portal oficial del Gobierno de España dedicado a la digitalización de pymes, por tratarse de una fuente institucional y fiable sobre las dificultades reales que enfrentan estas empresas.

Según esta fuente, uno de los errores más comunes en la gestión de stock es no contar con un software especializado y controlar el inventario con Excel, libreta o de memoria, lo que provoca errores en el inventario (https://www.acelerapyme.gob.es/novedades/pildora/los-errores-mas-comunes-en-la-gestion-de-stock). Esto confirma que el problema que aborda nuestro proyecto no es algo supuesto, sino una necesidad documentada y extendida entre las pymes.

A partir de esta base, identificamos que las empresas objetivo carecen de una herramienta para controlar su stock: la información se dispersa entre distintos locales y formatos (Excel, papel o memoria), lo que dificulta tener una visión actualizada y continua del inventario. Esto provoca roturas de stock, sobrestock y pérdida de tiempo en tareas manuales que podrían automatizarse.

Además, cuando una empresa tiene varios negocios, la situación empeora: las herramientas actuales del mercado (Zoho Inventory, inFlow Inventory, Sortly) permiten gestionar varios almacenes, pero siempre dentro de una misma empresa. Si un usuario tiene varios negocios independientes, hoy necesita crear y manejar varias cuentas por separado, perdiendo la visión de conjunto.

Los distintos perfiles de usuario implicados son:

* Gerentes: necesitan una visión global del negocio (y de varios negocios, si los tienen) para la toma de decisiones.
* Encargados de local: consultan y actualizan el stock diariamente.
* Personal operativo: registra entradas y salidas de productos.

## 1.3 Propuesta de Solución

Aplicación web centralizada: Desarrollo de un sistema donde cada empresa pueda dar de alta productos, organizarlos en categorías, actualizar existencias y configurar alertas automáticas al alcanzar un umbral mínimo de stock.
Acceso multiempresa unificado: Posibilidad de cambiar entre distintas empresas o locales gestionados desde una misma sesión, sin necesidad de cerrar sesión ni crear cuentas independientes.
Usabilidad y adaptabilidad: Diseñada para usuarios con nivel tecnológico medio-bajo, sin curva de aprendizaje, ejecutable en dispositivos móviles y tablets, y con vistas y permisos adaptados según el perfil del usuario.
 
Funcionalidades principales:- Gestión de empresas y locales.- Gestión completa de productos (alta, consulta, modificación y baja).- Clasificación por categorías.
- Control y actualización de stock.
- Avisos automáticos de stock bajo.
- Interfaz sencilla, accesible y con diseño responsive.
- Gestión de perfiles y permisos de usuario.
- Centralización integral de la información.

## 1.4 Objetivos del Proyecto

Objetivo general. 
- Desarrollar una aplicación web de gestión de inventario multiempresa que permita centralizar y facilitar el control de existencias de distintas empresas y almacenes desde una única plataforma.   
- Ofrecer un control ágil de productos y categorías, incorporar alertas de stock bajo para prevenir roturas de inventario y reducir errores derivados de procesos manuales.   
- Proporcionar una interfaz clara e intuitiva adaptada a usuarios de diversos niveles tecnológicos, garantizando la escalabilidad ante el incremento de locales y productos.   

Objetivos específicos.
- Claridad: Diseñar una interfaz ordenada que permita identificar rápidamente la información y acciones.   
- Usabilidad: Crear una experiencia de usuario intuitiva que no requiera formación previa.   
- Navegación: Configurar una estructura de navegación coherente para acceder velozmente a cada sección.   
- Jerarquía visual: Diferenciar claramente los elementos principales, secundarios y botones de acción.  
- Diseño responsive: Garantizar la correcta visualización y funcionamiento en ordenadores, tablets y móviles.   
- Consistencia visual: Mantener uniformidad mediante el uso coherente de colores, tipografías y componentes.   
- Feedback visual: Notificar al usuario el estado de sus acciones, cambios en el stock, alertas y errores.   
- Accesibilidad: Facilitar la lectura mediante contrastes adecuados y distribución clara.   
- Personalización: Adaptar las vistas y opciones según los permisos del perfil de usuario.  
-  Identidad visual: Proyectar una imagen profesional, fiable y moderna

## 1.5. Alcance del Proyecto
- Desarrollo técnico: Comprende el análisis, diseño e implementación funcional de StockLink para la gestión de productos, categorías, existencias, movimientos y alertas de stock.
- Gestión unificada: Inclusión del módulo multiempresa y multilocal accesible en una sola sesión.   
- Proyección: Planteado como una solución de implantación a nivel nacional adaptable a diversas PYMEs y escalable según el volumen de datos.   
- Verificación: Incluye las pruebas necesarias para validar el funcionamiento y cumplimiento de los requisitos establecidos

## 1.6 Limitaciones y exclusiones

Limitaciones
- Tiempo de desarrollo: Delimitado estrictamente al marco temporal establecido para el proyecto intermodular.   
- Recursos: Uso preferente de herramientas y servicios gratuitos, condicionando la infraestructura de despliegue.   
- Experiencia técnica: Desarrollo llevado a cabo por un equipo en fase de aprendizaje de las tecnologías utilizadas.   
- Escalabilidad real: La solución se diseña para ser escalable, pero no contempla pruebas masivas con miles de usuarios reales.  
- Despliegue: Orientado a un entorno de desarrollo y pruebas, sin despliegue comercial en producción.   
- Pruebas: Limitadas al ámbito académico con un grupo reducidos de usuarios.   

Exclusiones
- Aplicación móvil nativa: No se desarrollarán apps para Android ni iOS (se cubre mediante diseño web responsive).   
- Hardware externo: Sin integración con lectores de código de barras, impresoras de etiquetas o TPVs.   
- Sistemas externos: Sin conexión con ERPs, software contable o plataformas de proveedores.   
- Módulos comerciales: Se excluye la gestión de ventas, facturación, pedidos y clientes.   
- Recursos Humanos: Sin funcionalidades relativas a nóminas, contratos o gestión de personal.   
- Inteligencia Artificial: Sin modelos predictivos automáticos de demanda o reposición.   
- Pasarela de pagos: Sin procesamiento de pagos online ni cobro de suscripciones.   
- Internacionalización: Centrado únicamente en el mercado español (un idioma, moneda y legislación).   
- Soporte post-entrega: Sin servicio de mantenimiento o soporte técnico empresarial continuo tras finalizar la fase académica. 
