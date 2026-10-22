## 2.3. Estudio de soluciones existentes

### ¿En qué consiste?

Se ha realizado un análisis comparativo de mercado (benchmarking) para identificar qué alternativas existen actualmente a StockLink y por qué nuestra propuesta aporta un valor diferencial frente a ellas. Este análisis amplía el benchmarking ya realizado en el Sprint 1, añadiendo los aspectos de coste, curva de aprendizaje, usabilidad, capacidad multiplataforma y extensibilidad que pide este apartado.

### Identificación de software competidor

Se han seleccionado tres alternativas reales del mercado, todas ellas soluciones comerciales SaaS especializadas en gestión de inventario:

1. **Zoho Inventory**
2. **inFlow Inventory**
3. **Sortly**

### Análisis comparativo

**Coste de implantación**

- Zoho Inventory ofrece un plan gratuito permanente y planes de pago desde unos 29 €/mes facturados anualmente, hasta unos 249 €/mes en el plan Enterprise.
- inFlow Inventory no tiene plan gratuito: sus planes de pago arrancan en torno a 129 €/mes y suben hasta varios cientos de euros al mes en los planes más altos.
- Sortly tiene un plan gratuito permanente y planes de pago desde unos 24 €/mes facturados anualmente, hasta 149-299 €/mes según el volumen de artículos y usuarios.

**Curva de aprendizaje**

Zoho Inventory e inFlow Inventory se consideran intuitivas para usuarios sin experiencia previa en gestión de inventario, aunque Zoho puede resultar algo más compleja de configurar al integrarse con todo el ecosistema Zoho (facturación, CRM, etc.). Sortly destaca especialmente por un proceso de incorporación y flujos de trabajo simplificados, siendo la más sencilla de las tres para empezar a usar desde cero.

**Usabilidad de la interfaz gráfica**

Las tres ofrecen interfaces web modernas. Zoho e inFlow están centradas en el inventario con paneles de control y tablas de datos; Sortly destaca por un enfoque mucho más visual, organizando el inventario en carpetas y subcarpetas con fotos de cada producto, lo que la hace especialmente cómoda para usuarios con poca experiencia técnica.

**Capacidad multiplataforma**

- inFlow funciona en Windows y como aplicación web, con apps móviles para iPhone y Android, pero no está disponible en Mac.
- Zoho Inventory es accesible desde navegador web (agnóstico de sistema operativo) y cuenta con apps para Android e iOS.
- Sortly funciona en móvil, escritorio o tablet mediante sincronización en la nube, con apps nativas para iOS y Android. Ninguna de las tres ofrece aplicación de escritorio nativa para Linux.

**Extensibilidad**

Zoho se integra bien con el resto de su propio ecosistema (Zoho Books, Zoho CRM) y con plataformas de ecommerce. inFlow ofrece integraciones con contabilidad y más de 35 plataformas de ecommerce. Sortly tiene integraciones más limitadas (principalmente QuickBooks), centrándose más en ser una herramienta independiente y autocontenida.

**Limitaciones detectadas**

- Zoho: interfaz funcional pero algo genérica; puede resultar excesiva para una pyme que solo necesita controlar stock.
- inFlow: sin plan gratuito, coste de entrada más alto, y no cubre Mac de forma nativa.
- Sortly: los límites de artículos únicos son el principal obstáculo (el plan Ultra se queda en 2.000 artículos), y los permisos de usuario no son muy detallados.
- Ninguna de las tres ofrece gestión real de varias **empresas** independientes desde una misma sesión, que es el problema central que resuelve StockLink.

### Matriz comparativa

| Parámetro | Zoho Inventory | inFlow Inventory | Sortly | StockLink |
|---|---|---|---|---|
| Precio | Gratis – 249 €/mes | Sin gratis, desde 129 €/mes | Gratis – 149/299 €/mes | Sin coste de licencia (proyecto propio) |
| Multiplataforma | Web, Android, iOS | Windows, Web, Android, iOS (no Mac) | Web, Android, iOS | Web responsive (cualquier SO con navegador) |
| Experiencia de usuario | Buena, algo genérica | Muy buena | Muy visual y sencilla | Simple, pensada para 3 perfiles de usuario |
| Generación de informes | Sí (compras/ventas) | Sí (órdenes, stock) | Limitada (reports básicos) | Básica (alertas y stock por empresa/local) |
| Soporte de periféricos | Lectores de código de barras | Lectores de código de barras | Escaneo QR/código de barras por móvil | No contemplado (fuera de alcance, ver exclusiones) |
| Gestión multiempresa real | No | No | No | Sí (diferencial del proyecto) |

### Justificación de la propuesta

Ninguna de las tres soluciones analizadas resuelve de forma sencilla el caso de uso central de StockLink: una pyme con varios negocios independientes que necesita gestionarlos todos desde una única cuenta. Zoho e inFlow están pensadas para una sola empresa con varios almacenes, con un coste de entrada que puede no compensar a un negocio pequeño; Sortly, aunque es la más accesible y visual de las tres, limita rápidamente el número de artículos gestionables y tiene permisos poco detallados. StockLink se posiciona así en un hueco que ninguna cubre bien: la sencillez de uso de una herramienta ligera, combinada con una gestión multiempresa real pensada específicamente para pymes pequeñas con varios locales, sin coste de licencia ni los límites de artículos o usuarios que imponen estas plataformas comerciales.
