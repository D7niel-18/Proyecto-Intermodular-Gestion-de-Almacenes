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
