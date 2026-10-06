# StockLink

**StockLink** es una aplicación web de **gestión de stock e inventario multiempresa** desarrollada como proyecto intermodular de 2º de DAW.

El objetivo principal de StockLink es centralizar la gestión del inventario de diferentes empresas y locales en una única plataforma, permitiendo consultar y actualizar las existencias, organizar productos por categorías y recibir avisos cuando el stock de un artículo alcance un nivel mínimo.

La plataforma está pensada especialmente para empresas y pequeños negocios que necesitan una herramienta sencilla para controlar sus existencias sin depender de procesos manuales o de diferentes sistemas independientes.

---

## 📦 ¿Qué es StockLink?

StockLink está planteado como una solución digital para facilitar la gestión de inventarios de empresas que pueden disponer de uno o varios locales.

Los usuarios pueden gestionar sus empresas y locales desde una misma sesión, evitando la necesidad de crear cuentas independientes para cada ubicación.

El flujo principal de la aplicación es:

```text
Usuario
   ↓
Inicia sesión
   ↓
Selecciona empresa o local
   ↓
Consulta el stock
   ↓
Gestiona productos y categorías
   ↓
Actualiza las existencias
   ↓
Registra movimientos de stock
   ↓
Comprueba el estado del inventario
   ↓
Recibe avisos de stock bajo
```

La idea general de StockLink es centralizar la información del inventario y facilitar las tareas habituales relacionadas con el control de existencias.

---

## 🎯 Objetivos del proyecto

Los principales objetivos de StockLink son:

- Centralizar el stock de diferentes empresas y locales.
- Permitir gestionar varias empresas o ubicaciones desde una única sesión.
- Facilitar el alta, consulta y modificación de productos.
- Organizar los productos mediante categorías.
- Mostrar las existencias disponibles de forma clara.
- Avisar cuando un producto alcanza su stock mínimo.
- Registrar los movimientos de stock para mejorar la trazabilidad.
- Reducir errores derivados de una gestión manual del inventario.
- Evitar roturas de stock y situaciones de exceso de existencias.
- Minimizar el número de acciones necesarias para realizar operaciones habituales.
- Proporcionar una interfaz sencilla e intuitiva para usuarios con un nivel tecnológico medio-bajo.
- Adaptar la aplicación a diferentes tamaños de empresa y número de locales.
- Mantener una interfaz coherente, clara y profesional.

---

## 🏢 Gestión de empresas y locales

StockLink permite trabajar con diferentes empresas y locales desde una misma sesión.

Cada empresa puede disponer de su propia información y de sus propios productos, categorías y existencias.

Entre las principales acciones previstas se encuentran:

- Gestionar los datos de la empresa.
- Consultar las empresas disponibles para el usuario.
- Cambiar entre empresas o locales.
- Gestionar los productos asociados.
- Gestionar las categorías.
- Consultar las existencias.
- Actualizar las cantidades disponibles.
- Consultar el estado general del stock.

Esta organización permite mantener separada la información de cada empresa o local y facilitar la gestión cuando un usuario trabaja con varias ubicaciones.

---

## 📦 Gestión de productos

Cada empresa o local puede administrar los productos que forman parte de su inventario.

La información de un producto puede incluir:

- Nombre.
- Descripción.
- Categoría.
- Cantidad disponible.
- Stock mínimo.
- Estado del stock.
- Información relacionada con sus movimientos.

Los productos se organizan mediante categorías para facilitar su búsqueda y gestión.

---

## 📊 Gestión de stock

Una de las funciones principales de StockLink es controlar las cantidades disponibles de cada producto.

El usuario puede:

- Consultar las existencias actuales.
- Aumentar cantidades.
- Reducir cantidades.
- Consultar el estado del stock.
- Detectar productos con pocas existencias.
- Consultar movimientos realizados.

El sistema diferencia visualmente los diferentes estados del inventario para que el usuario pueda identificar rápidamente la situación de cada producto.

```text
Stock normal
     ↓
Stock bajo
     ↓
Stock crítico / sin existencias
```

Los estados de stock utilizan colores semánticos para facilitar su identificación visual:

- 🟢 Verde → stock correcto.
- 🟠 Ámbar → stock bajo o situación de aviso.
- 🔴 Rojo → stock crítico o sin existencias.

---

## ⚠️ Avisos de stock bajo

StockLink permite establecer un umbral mínimo para los productos.

Cuando la cantidad disponible alcanza o queda por debajo de ese límite, el sistema puede mostrar un aviso para informar al usuario.

Esto permite:

- Detectar productos que necesitan reposición.
- Reducir el riesgo de rotura de stock.
- Identificar rápidamente los productos con problemas.
- Facilitar el control diario del inventario.

---

## 🔄 Trazabilidad de movimientos

La aplicación contempla el registro de los movimientos realizados sobre el stock.

Estos movimientos permiten conocer los cambios que se producen en las existencias y mejorar la trazabilidad del inventario.

El objetivo es poder consultar la evolución del stock y disponer de mayor información sobre las operaciones realizadas.

---

## 👤 Tipos de usuario

StockLink contempla diferentes perfiles de usuario y permisos según las funciones que deba realizar cada persona.

---

## 🎨 Identidad visual

La identidad visual de StockLink está planteada para transmitir **fiabilidad, claridad y profesionalidad**.

La aplicación dispone de una propuesta de diseño basada principalmente en dos temas: oscuro y claro.

### 🌙 Tema oscuro

| Color | Uso |
| ---------------- | ----------------------------------------------- |
| `#2F91F9` | Color principal y acciones principales |
| `#151A21` | Fondo lateral |
| `#0D1117` | Fondo principal |
| `#1B2129` | Superficies, tarjetas e inputs |
| `#E5E7EB` | Texto principal |
| `#7A8491` | Texto secundario |
| `#252C35` | Bordes y separadores |

### ☀️ Tema claro

| Color | Uso |
| ---------------- | ----------------------------------------------- |
| `#111827` | Texto principal y botones |
| `#6B7280` | Texto secundario |
| `#9CA3AF` | Placeholders y elementos auxiliares |
| `#D1D5DB` | Bordes |
| `#F3F4F6` | Fondo general |
| `#F9FAFB` | Superficies |
| `#FFFFFF` | Tarjetas e inputs |

Los colores verde, ámbar y rojo se reservan para representar los diferentes estados del stock y las alertas.

### Tipografía

- **Work Sans** → interfaz y textos principales.
- **JetBrains Mono** → elementos técnicos, métricas y determinados elementos de la identidad visual.

---

## 🖥️ Estructura general de la plataforma

StockLink se divide conceptualmente en diferentes áreas relacionadas con la gestión de las empresas y el inventario:

```text
                         StockLink
                            │
              ┌─────────────┴─────────────┐
              │                           │
          Autenticación              Gestión
              │                           │
       Login / Registro          Empresa / Local
                                          │
                          ┌───────────────┼───────────────┐
                          │               │               │
                      Productos       Categorías       Stock
                          │               │               │
                          └───────────────┼───────────────┘
                                          │
                                      Movimientos
                                          │
                                      Alertas
```

Esta estructura permite separar las diferentes funciones de la aplicación y mantener una navegación clara.

---

## 🧩 Principales pantallas

Entre las pantallas principales previstas para la aplicación se encuentran:

### 🔐 Autenticación

- Inicio de sesión.
- Registro.
- Gestión de acceso.

### 📊 Gestión

- Dashboard.
- Selección de empresa o local.
- Productos.
- Categorías.
- Stock.
- Movimientos.
- Alertas.
- Configuración y perfil.

Las pantallas y funcionalidades podrán ampliarse durante las siguientes fases del desarrollo.

---

## 📋 Metodología de trabajo

El proyecto se desarrolla utilizando una metodología basada en **Kanban adaptada a sprints**.

La gestión de tareas se realiza mediante un tablero de GitHub con diferentes estados:

```text
Pendiente → En proceso → En revisión → Finalizado
```

La comunicación del equipo se realiza mediante un grupo de WhatsApp.

El proyecto está desarrollado por un equipo de tres integrantes:

- **Daniel Jiménez Ramírez** → Scrum Master / DevOps.
- **Pepe Gil Cué** → SecOps.
- **Daniel Ortíz** → SysAdmin.

---

## 🚀 Estado del proyecto

StockLink se encuentra actualmente en fase de desarrollo.

Durante el primer sprint se trabaja principalmente en:

- Análisis del contexto.
- Definición del problema.
- Objetivos del proyecto.
- Estudio de soluciones similares.
- Requisitos iniciales.
- Viabilidad.
- Planificación.
- Diseño inicial de la interfaz.
- Identidad visual.
- Arquitectura inicial de la solución.

El desarrollo de las funcionalidades se irá incorporando progresivamente en los siguientes sprints.

---

## 📌 Resumen

**StockLink** es una aplicación web de gestión de stock multiempresa que permite centralizar el inventario de diferentes empresas y locales desde una única plataforma.

La aplicación permite gestionar productos, categorías y existencias, registrar movimientos y detectar situaciones de stock bajo mediante avisos visuales.

El proyecto busca reducir los errores de la gestión manual, evitar roturas de stock y facilitar el trabajo diario mediante una interfaz sencilla, clara y profesional.

```text
StockLink
   │
   ├── Empresas
   │    ├── Empresas / locales
   │    ├── Productos
   │    ├── Categorías
   │    ├── Stock
   │    ├── Movimientos
   │    └── Alertas
   │
   └── Usuarios
        ├── Gestor / administrador
        ├── Responsable de local
        └── Personal operativo
```

---
## COEvaluación
- Daniel Jiménez Ramírez - 100% de las tareas completadas en tiempo y forma.
- Pepe Gil Cué - 100% de las tareas completadas en tiempo y forma.
- Daniel Ortiz - 100% de las tareas completadas en tiempo y forma.