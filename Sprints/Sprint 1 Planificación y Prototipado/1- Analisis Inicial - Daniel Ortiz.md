# Sprint 1 - Análisis inicial

## 1. Análisis inicial

### Identificación del público objetivo

El análisis del público objetivo se ha realizado teniendo en cuenta que la aplicación está destinada a la gestión de stock de diferentes empresas y locales, por lo que sus usuarios presentan perfiles, necesidades y contextos de uso distintos. Identificar estos perfiles permite orientar las decisiones de diseño hacia una experiencia sencilla, clara e intuitiva.

- **Administrador/gerente multiempresa:** propietario o responsable que gestiona uno o varios locales desde la misma cuenta. Necesita una visión global y desglosada del stock, cambiar de negocio sin perder contexto, y acceder a informes que le ayuden a decidir compras y reposición. Usa la aplicación principalmente desde ordenador, con nivel tecnológico medio.

- **Encargado de local/almacén:** responsable del día a día de un local, que recibe mercancía, ajusta inventario y registra ventas. Necesita consultar y actualizar el stock de forma rápida, con avisos claros ante niveles bajos. Trabaja desde el propio local, a menudo con interrupciones, usando tablet o móvil además de ordenador.

- **Personal operativo:** realiza tareas puntuales (recuento, entrada de pedidos) bajo supervisión, con acceso limitado a lo esencial. Requiere procesos visuales, con el mínimo de pasos posible, desde dispositivos móviles.

### Objetivos principales de la interfaz

- **Centralizar el stock** de varias empresas/locales en una sola sesión, con navegación clara entre ellos.
- **Visibilidad en tiempo real** (existencias, alertas de stock bajo).
- **Minimizar clics** para registrar movimientos de stock.
- **Escalar bien** tanto para 1 local como para 10.
- **Jerarquía visual clara y color funcional** (alertas, estados).
- **Transmitir fiabilidad y profesionalidad.**

### Benchmarking: referencias de sitios similares

- **Zoho Inventory:** software de gestión de inventario pensado para pymes y comercios con venta multicanal. Permite ver las existencias en tiempo real, gestionar varios almacenes y controlar proveedores con órdenes de compra. Destaca por sus avisos cuando el stock de un producto es bajo y porque conecta bien el stock con las compras y las ventas. Como punto débil, su interfaz es funcional pero bastante genérica.

- **inFlow Inventory:** software específico de gestión de inventario y almacenes, no es un ERP completo. Está pensado para pymes de retail, distribución y fabricación. Permite gestionar stock en varias ubicaciones, escanear códigos de barras desde el móvil, asignar pedidos a empleados y controlar permisos según el rol de cada usuario. Se valora mucho por su interfaz sencilla e intuitiva. Como debilidad, algunos usuarios dicen que el proceso de primeros pasos (onboarding) podría mejorar.

- **Sortly:** aplicación de gestión de inventario muy visual y sencilla, pensada para negocios pequeños que gestionan stock en varias ubicaciones (almacenes, furgonetas, obras). Organiza el inventario en carpetas y subcarpetas por ubicación, permite escanear códigos QR, avisa cuando el stock es bajo y da permisos distintos según el usuario. Se valora por sincronizar todo en tiempo real. Como debilidad, sus permisos no son muy detallados (cuesta restringir el acceso a datos concretos).

#### Qué nos diferencia de estas herramientas

Las tres aplicaciones analizadas resuelven bien el problema de una empresa con varios almacenes, pero ninguna está pensada para gestionar varias empresas distintas desde la misma cuenta. Ahí es donde nuestro proyecto aporta algo diferente:

- **Multiempresa de verdad, no solo multialmacén.** El usuario puede cambiar entre negocios completamente distintos, con sus propios productos, stock y usuarios, sin cerrar sesión ni tener que crear varias cuentas. Zoho, inFlow y Sortly separan almacenes dentro de una misma empresa, pero no permiten gestionar empresas distintas desde el mismo sitio.
- **Pensado para pymes con varios locales pequeños**, mientras que Zoho e inFlow están más orientados a negocios medianos o grandes, y Sortly está pensado más para controlar objetos o activos que para gestionar stock comercial.
- **Interfaz adaptada a los distintos perfiles de usuario** (administrador, encargado, operativo), con vistas y permisos pensados para cada uno, en vez de una interfaz igual para todos. Esto soluciona el problema de permisos poco detallados que tiene Sortly.
- **Diseño sencillo**, evitando la complejidad típica de un ERP y la sensación de interfaz genérica que tiene Zoho.

En resumen, no intentamos competir en funciones básicas de inventario, que ya están bien resueltas por estas herramientas, sino en resolver algo que ninguna cubre bien: una pyme con varios negocios independientes, que hoy necesitaría varias cuentas o herramientas distintas, y que con nuestra aplicación lo gestiona todo desde un único sitio.
