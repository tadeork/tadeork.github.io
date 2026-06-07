# Trascender el Chatbot: La Dualidad de la IA

Una presentación web interactiva que aborda la dualidad de la Inteligencia Artificial: desde su **eficiencia técnica y personalización avanzada** hasta sus **costos ecológicos latentes, viabilidad económica y dinámicas de extractivismo digital**.

Este mazo de diapositivas está diseñado como una gaceta digital o periódico impreso premium, combinando contenido crítico-educativo con simuladores y widgets dinámicos e interactivos en tiempo real.

---

## 📸 Captura del Proyecto

El proyecto incluye gráficos y recursos visuales locales optimizados como la representación del hardware de IA y su obsolescencia:

![Residuos Electrónicos Apilados](./residuos_electronicos.png)

---

## ✨ Características Principales

1. **Diseño Editorial Premium ("Newspaper Theme"):** 
   Inspirado en periódicos físicos clásicos y gacetas de investigación científica. Utiliza una tipografía sofisticada con serifas (`Playfair Display`) combinada con fuentes claras para lectura técnica (`Inter`), layouts limpios y filtros fotográficos estilo imprenta (sepia/escala de grises que revelan su color original en hover).
   
2. **Motor de Diapositivas Nativo (Slide Deck Engine):** 
   Desarrollado completamente en JavaScript de vainilla sin frameworks pesados. Cuenta con soporte para navegación mediante teclado (flechas direccionales e inicio de presentación), indicadores táctiles (dots) y una barra de progreso superior de lectura.

3. **Creador de Instrucciones de Personalización (System Instructions):** 
   Widget interactivo para estructurar directrices personalizadas para asistentes de IA (rol, contexto, tono y formato) con funcionalidad de copiado rápido al portapapeles en un solo clic.

4. **Calculadora de Huella Ambiental de IA:** 
   Simulador paramétrico que estima la energía (Wh), la evaporación de agua dulce (ml/litros) y las emisiones equivalentes de carbono ($CO_2$) según la cantidad de consultas diarias y la complejidad del modelo utilizado. Ofrece equivalencias prácticas de consumo de la vida diaria (horas de encendido de focos LED y kilómetros recorridos en automóvil).

5. **Simulador de Rentabilidad Financiera (Capex Break-Even):** 
   Visualizador macroeconómico basado en la inversión anual en infraestructura (servidores y clústeres de GPU) que estima la amortización del hardware y el volumen de usuarios mensuales exigidos para lograr el punto de equilibrio.

---

## 🛠️ Tecnologías Utilizadas

*   **HTML5:** Marcado semántico para accesibilidad y SEO.
*   **CSS3 (Vanilla):** Variables nativas (Tokens de diseño), Grid, Flexbox y transiciones optimizadas para simular un mazo widescreen 16:9.
*   **JavaScript (ES6):** Manipulación dinámica del DOM, validaciones de teclado y API de portapapeles nativa (`Clipboard API`).

---

## 📂 Estructura del Repositorio

*   [`index.html`](./index.html): Estructura semántica de las diapositivas y los formularios de los widgets.
*   [`styles.css`](./styles.css): Diseño visual, variables de color (borgoña, crema, carbón) y animaciones de slide.
*   [`app.js`](./app.js): Control y navegación del slide deck junto a los algoritmos de cálculo.
*   [`residuos_electronicos.png`](./residuos_electronicos.png): Asset de alta calidad generado localmente que muestra hardware obsoleto.
*   [`guia_reproduccion.md`](./guia_reproduccion.md): Documento técnico sumamente detallado con las fórmulas lógicas, paleta de colores y pasos exactos para reproducir este mismo proyecto con otros agentes.

---

## 🚀 Instalación y Uso Local

Este proyecto no requiere instalación de dependencias ni procesos de compilación complejos. Al estar escrito en tecnologías web puras, puedes ejecutarlo localmente de inmediato:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tadeork/charla-ia-ze.git
   ```
2. Entra al directorio:
   ```bash
   cd charla-ia-ze
   ```
3. Abre el archivo `index.html` en tu navegador web de preferencia o sírvelo mediante un servidor estático ligero:
   * **Usando Python:**
     ```bash
     python3 -m http.server 8000
     ```
     Luego abre `http://localhost:8000` en tu navegador.
   * **Usando Node.js / npm:**
     ```bash
     npx serve .
     ```

---

## ✍️ Autores

Creado en colaboración interactiva por **Antigravity** (AI Coding Assistant) y **Tadeork**.
