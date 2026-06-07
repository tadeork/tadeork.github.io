# Guía de Reproducción del Proyecto: La Dualidad de la IA

Esta guía contiene las instrucciones, guía de estilos, estructura del contenido y detalles lógicos del proyecto **"Trascender el Chatbot: La Dualidad de la IA: Eficiencia Técnica frente a Costo Planetario"** para que puedas reproducirlo fielmente con cualquier otro agente.

---

## 1. Arquitectura y Estructura de Archivos

El proyecto se compone de los siguientes elementos en la raíz del espacio de trabajo:

```
├── index.html                   # Estructura semántica de las diapositivas y widgets
├── styles.css                   # Sistema de diseño editorial, layouts y animaciones
├── app.js                       # Controlador del slide deck y lógica interactiva
└── residuos_electronicos.png    # Imagen local representativa de obsolescencia física (e-waste)
```

---

## 2. Guía de Estilos y Sistema de Diseño (CSS)

El diseño del proyecto simula una **gaceta editorial o periódico físico ("Newspaper Theme")** proyectado en una sala de conferencias oscura. Los componentes clave del diseño son:

### Colores de la Paleta (Tokens CSS)
*   `--bg-canvas: #15181e;` (Gris oscuro de fondo, simulando una sala de proyección)
*   `--bg-paper: #fcfaf6;` (Papel color crema claro para las diapositivas)
*   `--bg-paper-alt: #f5f2eb;` (Tono de papel más oscuro para inputs de widgets y cajas secundarias)
*   `--text-primary: #121212;` (Tinta negra pura para títulos y elementos clave)
*   `--text-secondary: #2b2b2b;` (Tinta negra suave para texto de lectura)
*   `--text-muted: #5a5a5a;` (Gris suave para tags de categoría y metadatos)
*   `--accent-burgundy: #8c1919;` (Rojo borgoña editorial para acentos, números de métricas y botones activos)
*   `--border-dark: #121212;` (Bordes sólidos editoriales)
*   `--border-light: #e1dbcf;` (Bordes divisorios suaves)

### Tipografía (Google Fonts)
*   **Serif (Editorial/Titulares):** `'Playfair Display', Georgia, serif;` (usado en títulos de diapositivas `.slide-title`, citas, y números destacados).
*   **Sans-serif (Datos/Interfaz):** `'Inter', Arial, sans-serif;` (usado en textos descriptivos, etiquetas, tablas de datos y botones).

### Filtro de Imagen Editorial
Para mantener la estética de periódico impreso en papel, todas las imágenes deben usar un filtro de escala de grises y sepia de fondo, que revela el color original al pasar el cursor (efecto hover):
```css
filter: grayscale(0.7) sepia(0.18) contrast(1.1);
transition: all 0.2s ease;
/* Hover state */
filter: grayscale(0.2) sepia(0.08) contrast(1.0);
```

### Proporciones y Layout de Diapositiva
*   Las diapositivas están limitadas a un ancho máximo de `1100px` y un alto de `78vh` simulando una relación de aspecto widescreen (16:9).
*   Se ordenan de manera absoluta dentro de un contenedor `.deck-container` y se animan usando transiciones de CSS mediante las clases `.active` (opacidad 1, escala 1, traslación 0px), `.prev` (traslación -100px a la izquierda) y `.next` (traslación 100px a la derecha).

---

## 3. Contenido del Slide Deck (Estructura de index.html)

El mazo consta de **8 diapositivas** (`section.slide-card` con index de `0` a `7`):

### Diapositiva 1: Portada (Slide Index: 0)
*   **Título:** "Trascender el Chatbot"
*   **Subtítulo:** "La Dualidad de la IA: Eficiencia Técnica frente a Costo Planetario"
*   **Descripción:** Introducción sobre la optimización avanzada de modelos, el impacto material, la economía del silicio y el extractivismo digital.
*   **Acción:** Botón de "Iniciar Presentación".

### Diapositiva 2: El Shift Narrativo Corporativo (Slide Index: 1)
*   **Contenido:** El cambio de paradigma de las empresas desde la ética al lucro y la demanda de infraestructura de datos.
*   **Gráfico/Imagen:** Ilustración/foto de un Data Center (`https://images.unsplash.com/photo-1558494949-ef010cbdcc31`).
*   **Puntos Clave:** Reestructuración comercial, demanda energética masiva, disolución de equipos de seguridad y soberanía técnica.

### Diapositiva 3: Guía de Personalización de IA (Slide Index: 2)
*   **Contenido:** Explicación educativa sobre cómo adaptar la IA sin programar:
    1.  *System Instructions* (Personalidad/Reglas).
    2.  *Temperatura* (Nivel de creatividad/precisión).
    3.  *Inyección de Documentos* (Subir archivos / contextualización RAG).
*   **Gráfico/Imagen:** Espacio de trabajo de desarrollo limpio (`https://images.unsplash.com/photo-1555066931-4365d14bab8c`).

### Diapositiva 4: Creador Interactivo de Instrucciones (Slide Index: 3)
*   **Componente:** Widget de construcción de Prompts de Sistema interactivo (ver detalles de lógica más adelante).
*   **Diseño:** Dos columnas (Inputs a la izquierda, salida Markdown y botón de copiado rápido a la derecha).

### Diapositiva 5: La Huella de la Infraestructura Física (Slide Index: 4)
*   **Componente:** Calculadora interactiva de huella ecológica de IA.
*   **Gráfico/Imagen:** Referencia local a `./residuos_electronicos.png` (residuos electrónicos apilados e-waste).
*   **Métricas Estáticas:** Relación de consumo 10x de energía frente a búsquedas web comunes y evaporación promedio de agua por consulta.

### Diapositiva 6: La Burbuja Financiera / Capex (Slide Index: 5)
*   **Componente:** Simulador de Rentabilidad e inversión en infraestructura (Break-Even).
*   **Enlaces Externos:** Accesos directos editoriales a trackers y artículos de análisis financiero real.

### Diapositiva 7: Algoritmos Extractivistas (Slide Index: 6)
*   **Contenido:** Denuncia sobre las bases materiales e invisibilizadas de la IA.
*   **Puntos Clave:** Colonialismo de datos, moderación de datos precarizada y extracción minera (litio, cobalto) en el Sur Global.
*   **Gráfico/Imagen:** Imagen de oficina de moderación digital (`https://images.unsplash.com/photo-1531538606174-0f90ff5dce83`).
*   **Cita destacada:** Kate Crawford, *Atlas of AI*.

### Diapositiva 8: Referencias Bibliográficas (Slide Index: 7)
*   **Contenido:** Listado interactivo en scroll con citas completas de las fuentes utilizadas en la presentación (Reuters, CNBC, IEA, Li et al., Crawford, Couldry & Mejias, Time Magazine).

---

## 4. Lógica de Negocio y Widgets Interactivos (JS)

El archivo `app.js` encapsula las siguientes mecánicas:

### A. Controlador de Diapositivas (Navegación)
*   Escucha eventos de teclado (`ArrowLeft` y `ArrowRight`/`Space`) y botones del menú de navegación inferior.
*   Actualiza una barra superior de progreso que mide el avance relativo del mazo (`(currentSlideIndex / (totalSlides - 1)) * 100`).
*   Cambia las clases CSS `.active`, `.prev` y `.next` según el índice activo.

### B. Creador de Prompts de Sistema
*   **Fórmula de Entrada:** 4 inputs (`input-role`, `input-context`, `input-tone`, `input-format`).
*   **Fórmula de Salida:** Genera un texto formateado plano:
    ```markdown
    [ROL Y OBJETIVO]
    Actúa como: {input-role}
    
    [CONTEXTO Y REGLAS DE RESPUESTA]
    {input-context}
    
    [TONO Y ESTILO]
    Tu tono de comunicación debe ser: {input-tone}
    
    [FORMATO DE RESPUESTA]
    Organiza tus respuestas como: {input-format}
    ```
*   **Funcionalidad de Copiado:** Utiliza `navigator.clipboard.writeText` con un fallback de `textarea` temporal para copiar el texto al portapapeles y cambia temporalmente el color del botón a rojo borgoña con la leyenda "¡Copiado!".

### C. Calculadora de Huella Ambiental de la IA
*   **Inputs:** Slider de consultas diarias (`Q`) e input de complejidad del modelo (`M` donde Ligero = `0.5`, Estándar = `1.0`, Razonamiento Profundo = `3.0`).
*   **Fórmulas Utilizadas:**
    *   **Energía Consumida:** $E = Q \times 2.9\text{ Wh} \times M$
    *   **Agua Evaporada:** $H = Q \times 15\text{ ml} \times M$
    *   **Emisión de Carbono:** $CO_2 = E \times 0.45\text{ g/Wh}$
    *   **Equivalencias Visuales:**
        *   Horas de Foco LED encendido: $E / 10\text{ W}$
        *   Kilómetros en auto equivalentes: $CO_2 / 120\text{ g/km}$
*   **Presentación:** Muestra el resultado de agua en litros si es superior a 1000 ml.

### D. Simulador de Rentabilidad e Inversión (Capex Break-Even)
*   **Input:** Slider de inversión anual en Capex ($I$ en miles de millones de USD).
*   **Fórmulas Utilizadas:**
    *   **Amortización Anual Estimada (con costos operativos añadidos):** $A = I \times 1.5$ (Amortización a 3 años de los chips más consumo de energía y red).
    *   **Suscripciones requeridas para Break-Even:** Las suscripciones estiman una tarifa estándar de $20\text{ USD/mes}$ ($240\text{ USD/año}$).
    *   **Cálculo:** $\text{Subscriptores Requeridos (en millones)} = \frac{A \times 1000}{240}$
*   **Presentación:** Si el volumen de usuarios es superior a 1000 millones, lo convierte a la nomenclatura de Billions (`B`), de lo contrario se muestra en millones (`M`).

---

## 5. Instrucciones Paso a Paso para la Reproducción Fiel

Si deseas volver a implementar este proyecto de cero:

1.  **Inicializar Estilos:** Copia el archivo `styles.css` con el bloque `:root` de variables de diseño para asegurar que los colores y tamaños de fuente mantengan la estética de la gaceta.
2.  **Preparar la Imagen Local:** Coloca la imagen de residuos en la misma carpeta raíz bajo el nombre `residuos_electronicos.png`.
3.  **Montar la Diapositiva Portada e Inyección de Dependencias (Google Fonts):** Asegúrate de inyectar las fuentes de Google en el `<head>` de tu HTML.
4.  **Generar las Diapositivas de Contenido:** Sigue la disposición por columnas `.slide-columns-with-img` (texto en un lado y figuras `.slide-figure` con leyendas y filtros del periódico en el otro).
5.  **Desarrollar los Tres Widgets:** Crea los formularios para el Prompt Builder, la calculadora de carbono y la calculadora financiera asegurando que cada control interactivo (`input`, `select`, `range`) tenga su respectivo ID enlazado con la lógica en Javascript.
6.  **Programar el Evento DomContentLoaded:** En tu archivo de script, encapsula toda la inicialización bajo `DOMContentLoaded` para evitar problemas al cargar los selectores de elementos del DOM.
7.  **Habilitar Navegación por Teclado:** Programa la navegación de las diapositivas con las flechas del teclado, exceptuando la acción de cambiar de diapositiva cuando el usuario esté escribiendo en un input o cuadro de texto (con la validación de `document.activeElement`).
