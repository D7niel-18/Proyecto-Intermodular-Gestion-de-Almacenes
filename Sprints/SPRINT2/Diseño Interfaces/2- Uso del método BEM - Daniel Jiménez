# Guía de Uso de la Metodología BEM en StockLink

Este documento detalla los estándares de convención de nombres y estructura basados en la metodología **BEM** (*Block, Element, Modifier*) aplicados en la interfaz de frontend de **StockLink**.

---

## 1. ¿Qué es BEM y por qué se utiliza en StockLink?

**BEM** es una metodología de nombrado CSS que promueve la creación de componentes modulares, reutilizables y mantenibles. Evita el acoplamiento directo con la estructura HTML y elimina los problemas de especificidad en CSS al priorizar el uso de clases simples.

En **StockLink**, el uso de BEM permite:
- **Modularidad:** Cada componente existe de manera independiente.
- **Mantenibilidad:** Facilita la identificación rápida de a qué bloque o elemento pertenece una regla de estilo.
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
