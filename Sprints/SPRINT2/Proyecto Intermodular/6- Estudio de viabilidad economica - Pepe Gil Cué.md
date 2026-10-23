## 7. Estudio de viabilidad económica

### 7.1 Costes de personal

Las tarifas corresponden a perfiles junior (Glassdoor España), diferenciadas por rol, igual que en el apartado 1.4.6 del Sprint 1.

| Miembro | Rol | Horas | Coste/hora | Subtotal |
| --- | --- | ---: | ---: | ---: |
| Daniel Jiménez Ramírez | Diseño UI/UX | 138 h | 14 €/h | 1.932 € |
| Pepe Gil Cué | Desarrollo Frontend | 379 h | 11 €/h | 4.169 € |
| Daniel Ortiz | SysAdmin / Control de Calidad | 179 h | 12 €/h | 2.148 € |
| **Subtotal personal** | | **696 h** | | **8.249 €** |

Las reuniones (60 h) y la contingencia (≈10 %, 69 h) ya están incluidas en las 696 h, por lo que no se suman aparte.

**Justificación de las horas.** Las horas de este estudio son las del presupuesto básico del Sprint 1 (apartado 1.4), para mantener la coherencia entre documentos. No se han fijado de forma arbitraria: se han estimado por capacidad del equipo (12 h/semana por persona, 6 en clase y 6 en casa, multiplicadas por las semanas oficiales de cada Resultado de Aprendizaje) y se han repartido en tareas según la complejidad de cada fase. Incluyen reuniones de coordinación y un 10 % de contingencia. Las horas totales salen de sumar las tareas de los seis sprints (567 h de tareas + 60 h de reuniones + 69 h de contingencia) y se contrastan con la dedicación real: 232 h por persona entre 19,4 semanas son ≈12 h/semana.

### 7.2 Infraestructura y licencias

| Concepto | Cálculo | Total |
| --- | --- | ---: |
| Hardware (amortización) | 3 portátiles × ≈75 € (800 €, 4 años de vida útil, 19,4 semanas) | 225,00 € |
| Dominio | 15 €/año | 15,00 € |
| Hosting estático | ≈3 €/mes × 12 meses | 36,00 € |
| Licencias y herramientas | VS Code, Git/GitHub, Figma (planes gratuitos), validador W3C, Lighthouse, WAVE, axe DevTools, NVDA | 0,00 € |
| Certificado SSL | Let's Encrypt | 0,00 € |
| Copias de seguridad | El código está en GitHub | 0,00 € |
| IVA (21 %) sobre producción | 51 € × 21 % | 10,71 € |
| **Subtotal infraestructura** | | **286,71 €** |

Todas las herramientas de desarrollo son gratuitas o de código abierto, por lo que no hay coste de licencias.

### 7.3 Costes indirectos y mantenimiento

El equipo trabaja de forma mixta (en clase y en casa). Se imputan los costes de forma estimada y conservadora.

| Concepto | Cálculo | Total |
| --- | --- | ---: |
| Electricidad | Portátil ≈50 W × 696 h = 34,8 kWh × 0,15 €/kWh | 5,22 € |
| Conectividad | Fibra ≈35 €/mes × 4,5 meses × 3 personas × 50 % (trabajo en casa) × 25 % (uso atribuible al proyecto) | 59,06 € |
| Soporte post-despliegue (1.er año) | 1 h/mes × 12 meses × 12 €/h | 144,00 € |
| **Subtotal indirectos y mantenimiento** | | **208,28 €** |

Supuestos: la electricidad se calcula con todas las horas del proyecto (aunque la mitad sea en clase) para no infravalorar el coste. En conectividad solo se imputa la mitad del tiempo (el trabajo en casa) y una cuarta parte de la cuota, porque la conexión también se usa para fines personales.

### 7.4 Presupuesto resumen

| Partida | Total |
| --- | ---: |
| Personal | 8.249,00 € |
| Hardware | 225,00 € |
| Software/Servicios (con IVA) | 61,71 € |
| Indirectos y mantenimiento | 208,28 € |
| Contingencias | Incluidas en las horas (≈10 %) |
| **TOTAL** | **8.743,99 €** |

- Gasto real durante el desarrollo: **0 €** (el resto es valor imputado del trabajo y de los recursos).
- Coste anual tras el lanzamiento: **205,71 €** (144 € de mantenimiento + 61,71 € de producción).

### 7.5 ROI / ahorro estimado

StockLink está pensada sobre todo para pequeñas y medianas empresas, aunque también puede usarse en empresas grandes con varios locales. Se estima el ahorro para una pyme tipo con un local que hoy controla el inventario de forma manual (papel u hojas de cálculo). Son estimaciones con supuestos explícitos, ajustables a cada empresa.

**Supuestos (por empresa):**

- Coste hora de un empleado de administración o almacén: 12 €/h.
- Control manual del inventario: ≈6 h/semana. Con StockLink: ≈2 h/semana. Ahorro: 4 h/semana.
- Menos roturas de stock, excesos y errores de recuento: se estima un ahorro del 2 % sobre un stock medio de 20.000 €.

| Concepto | Cálculo | Ahorro anual |
| --- | --- | ---: |
| Horas de gestión manual | 4 h/semana × 52 semanas × 12 €/h | 2.496 € |
| Menos roturas, excesos y errores | 2 % × 20.000 € de stock medio | 400 € |
| **Ahorro anual por empresa** | | **2.896 €** |

**Plazo de recuperación** = inversión ÷ ahorro neto anual. La inversión es el total del presupuesto (8.743,99 €) y el ahorro neto resta el coste anual de mantenimiento y producción (205,71 €).

| Escenario | Ahorro neto anual | Plazo de recuperación | ROI a 3 años |
| --- | ---: | ---: | ---: |
| 1 empresa usuaria | 2.896 − 205,71 = 2.690,29 € | ≈ 3,25 años | −7,7 % |
| 3 empresas usuarias | 3 × 2.896 − 205,71 = 8.482,29 € | ≈ 1,03 años | +191 % |

**Conclusión.** Con una sola empresa el proyecto se recupera en poco más de 3 años. Al ser una plataforma multiempresa, el coste de mantenimiento se reparte entre todos los clientes: con 3 empresas usuarias la inversión se recupera en aproximadamente un año. Como el gasto real durante el desarrollo es de 0 € (herramientas gratuitas y trabajo del equipo), el proyecto es económicamente viable y sostenible.
