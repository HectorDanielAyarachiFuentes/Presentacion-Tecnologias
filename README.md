# 📊 Presentación de Trabajos Prácticos — Tecnologías de la Información para la Gestión (TIG 2026)

**Universidad Nacional del Comahue — CURZAS**  
*Licenciatura en Recursos Humanos*  
**Viedma, Río Negro — Año 2026**

---

## 👥 Equipo Expositor y Autores

* **Héctor Daniel Ayarachi Fuentes** — Tec. Sup. en Recursos Humanos (Legajo: CURZA-8284 • DNI: 35.492.138)
* **Andrea Alejandra Díaz** — Estudiante Lic. en Recursos Humanos (Legajo: CURZA-7229 • DNI: 27.786.409)

> **Colaboradores en Actividad 6 (Hospital Catriel):** *Ileana Avendaño* y *Lucas Curaqueo*.

---

## 🎯 Propósito del Proyecto

Aplicación web interactiva para la exposición de **5 minutos** cronometrados sobre las tres prácticas desarrolladas durante el cursado para completar y sistematizar la **Wiki de Cátedra de Tecnologías de la Información para la Gestión**:

1. **Actividad 6: Mapeo Sistémico en el Hospital de Catriel (TGS)**  
   Aplicación de la Teoría General de Sistemas (Bertalanffy) al proceso de selección e ingreso de profesionales de la salud bajo las Leyes Provinciales N° 1904 (Carrera Hospitalaria) y N° 1844. Análisis del impacto del entorno petrolero, carestía habitacional, circuito secuencial de 6 etapas y retroalimentación correctiva para evitar la fuga de talentos.

2. **Actividad 8: Diagnóstico y Rediseño de Información en Ecomoda S.A.**  
   Diagnóstico organizacional a partir de 5 preguntas clave de gestión: silos de datos aislados en la PC de Betty, balances adulterados en disquetes y Microsoft Paint, comunicación informal vía «Radio Pasillo» del Cuartel y órdenes en moto con Freddy Contreras, sobrecarga laboral de 14 h/día (burnout), favoritismo en RRHH (Saúl Gutiérrez) y creación de la empresa pantalla *Terramoda Ltda.*  
   Propuesta de rediseño integral bajo tres miradas (Tecnológica con ERP Cloud y Dashboard directivo, Organizacional con pantallas táctiles para Doña Inés y alfabetización digital, y Administrativa con política Cero Papel y mérito objetivo) más 3 requerimientos automáticos de control presupuestario y nómina.

3. **Actividad 9: Pirámide Organizacional y Tipos de Sistemas (TPS, MIS, DSS)**  
   Alineación de sistemas de información por niveles jerárquicos:
   * **Nivel Operativo (Base) ➔ TPS:** Terminales táctiles, código de barras y reloj biométrico para erradicar registros manuales extenuantes (humanización del trabajo).
   * **Nivel Táctico / Medio (Centro) ➔ MIS / SIG:** Reportes de desvío presupuestario, mermas textiles de colecciones (Hugo Lombardi) y control objetivo de ausentismo.
   * **Nivel Estratégico (Cúspide) ➔ DSS / ESS:** Tablero interactivo con simulación «What-If» para la Junta Directiva y trazabilidad inmutable que vuelve imposible el fraude corporativo de Terramoda.
   * **Integración y Principio GIGO:** Flujo ascendente donde datos limpios garantizan decisiones ejecutivas certeras.

---

## 🚀 Características Técnicas de la Aplicación

* **Temporizador Oficial de 5 Minutos (05:00):** Alertas visuales a los 03:30 (amarillo) y 04:30 (rojo) para el control estricto del tiempo de exposición.
* **Esquemas Isométricos Vectoriales Animados (SVG):** Ilustraciones 3D interactivas con animaciones CSS/SVG de flujos de datos, servidores en nube, órbitas sociotécnicas y pirámide escalonada.
* **Modal Lightbox / Zoom:** Al hacer clic en cualquier esquema o video, se abre una ventana modal de alta resolución para visualizar los detalles y diagramas en pantalla completa.
* **Teleprompter / Guion del Orador Integrado:** Panel deslizable con el guion conversacional y directo adaptado para Héctor y Alejandra.
* **Ficha de Respaldo Metodológico (Tecla M):** Marco teórico (Bertalanffy, Laudon, Longo), leyes aplicables (1904, 1844, 25.326) y preguntas frecuentes de defensa oral.
* **Atajos de Teclado:**
  * `←` / `→` o `Espacio`: Navegar filminas
  * `T`: Iniciar / pausar cronómetro
  * `R`: Reiniciar cronómetro
  * `D`: Modo texto ampliado
  * `N`: Abrir / cerrar notas del orador
  * `M`: Abrir / cerrar respaldo metodológico
  * `Esc`: Cerrar modales y ampliaciones

---

## 📂 Estructura del Repositorio

```text
Presentacion-Tecnologias/
├── index.html                           # Estructura principal de la presentación web
├── css/
│   └── styles.css                       # Sistema de diseño, grid, tipografías y animaciones
├── js/
│   ├── app.js                           # Lógica interactiva, atajos, cronómetro y renderers
│   └── scene3d.js                       # Configuración y módulos auxiliares
├── data/
│   ├── catedra_data.js                  # Datos institucionales y estructura de la cátedra
│   ├── presentacion_data.js             # Contenidos completos, guiones y metadatos de las 6 filminas
│   ├── Actividad 6 - Mapeo Sistemico Hospital Catriel-1.pdf
│   ├── Actividad 8 - Diagnostico y Rediseño de Informacion Organizacional - Ecomoda-2.pdf
│   └── Actividad 9 - Piramide Organizacional y Tipos de SI - Ecomoda-3.pdf
└── assets/
    ├── CURZAS.png                       # Escudo oficial de la institución
    ├── gifs/
    │   ├── 1.mp4                        # Video animado de carátula
    │   └── 2.mp4                        # Video animado de Actividad 6
    └── svg/
        ├── slide3_ecomoda_caos.svg      # Diagrama isométrico animado de silos y caos
        ├── slide4_ecomoda_rediseno.svg  # Diagrama isométrico animado de ERP Cloud
        ├── slide5_ecomoda_piramide.svg  # Pirámide isométrica 3D escalonada (TPS, MIS, DSS)
        └── slide6_conclusiones.svg      # Diagrama de arquitectura sociotécnica (4 nodos)
```

---

## 💻 Cómo Ejecutar el Proyecto

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/HectorDanielAyarachiFuentes/Presentacion-Tecnologias.git
   cd Presentacion-Tecnologias
   ```
2. Abrir el archivo `index.html` en cualquier navegador web moderno (Google Chrome, Edge, Firefox, Safari).  
   *No requiere servidores backend ni instalación de paquetes adicionales.*
