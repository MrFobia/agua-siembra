---
name: Agua Siembra
description: Agua mineral del páramo de Guasca por suscripción, dibujada como una lámina de levantamiento del corte del páramo.
colors:
  ink: "#0A2632"
  petrol: "#244550"
  rock: "#4C7B84"
  sky: "#81A9AF"
  sand: "#EEE8DE"
  sand-2: "#E4DCCD"
  sand-3: "#D6CCB9"
  paper: "#F4EFE7"
  paper-field: "#F7F3EC"
  legal-ink: "#4A5F66"
  line: "rgba(10, 38, 50, .22)"
  line-strong: "rgba(10, 38, 50, .55)"
  clay: "#B96E4E"
  clay-ink: "#8E4F34"
  mustard: "#DCB253"
  lichen: "#C3D5A0"
  sage: "#92B992"
  moss: "#55836D"
  moss-2: "#4C6755"
  forest: "#142517"
  sprout: "#43B02A"
typography:
  display:
    fontFamily: "Bebas Neue, Arial Narrow, sans-serif"
    fontSize: "clamp(3.4rem, 8.4vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "0.005em"
  headline:
    fontFamily: "Bebas Neue, Arial Narrow, sans-serif"
    fontSize: "clamp(2.6rem, 5.6vw, 4.6rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "0.005em"
  title:
    fontFamily: "Bebas Neue, Arial Narrow, sans-serif"
    fontSize: "clamp(1.7rem, 2.6vw, 2.3rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "0.005em"
  lead:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(1.12rem, 1.5vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.5
    fontVariation: "\"wdth\" 85"
  body:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    fontVariation: "\"wdth\" 88"
  label:
    fontFamily: "Bebas Neue, Arial Narrow, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.06em"
  legal:
    fontFamily: "Carlito, Calibri, sans-serif"
    fontSize: "0.86rem"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  readout: "6px"
  field: "10px"
  card: "14px"
  panel: "16px"
  legend: "18px"
  plate: "22px"
  pill: "999px"
spacing:
  gutter: "16px"
  gutter-md: "32px"
  section: "clamp(88px, 11vw, 160px)"
  container: "1440px"
  container-flow: "1280px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sand}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 1.5rem 0 1.35rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.petrol}"
    textColor: "{colors.sand}"
  button-sand:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 1.5rem 0 1.35rem"
    height: "3.25rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.sand}"
    rounded: "{rounded.pill}"
    padding: "0 1.5rem 0 1.35rem"
    height: "3.25rem"
  button-mini:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 1.1rem"
    height: "2.75rem"
  input:
    backgroundColor: "{colors.paper-field}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "0 1rem"
    height: "3.2rem"
  chip:
    backgroundColor: "{colors.sand-2}"
    textColor: "{colors.petrol}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: ".3rem .65rem .2rem"
  chip-sprout:
    backgroundColor: "{colors.sprout}"
    textColor: "{colors.forest}"
    rounded: "{rounded.pill}"
  segmented:
    backgroundColor: "{colors.sand-2}"
    textColor: "{colors.petrol}"
    rounded: "{rounded.pill}"
    padding: "4px"
  segmented-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sand}"
  option-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "1rem 1.1rem"
  ink-plate:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sand}"
    rounded: "{rounded.plate}"
    padding: "clamp(1.25rem, 3vw, 2.25rem)"
---

# Design System: Agua Siembra

## Overview

**Creative North Star: "La lámina del corte del páramo"**

El sitio es una lámina de levantamiento: un corte geológico del páramo de Guasca que el visitante recorre hacia abajo (lluvia, frailejones, suelo esponja, roca, manantial, camión, cocina) y que, leído hacia arriba, es el bosque que su suscripción siembra. Todo el sistema sale de ese material: fondo arena como papel de plano, petróleo como tinta, bandas de estrato en salvias y musgos, cotas de altitud, líneas guía finas, números de lámina y leyendas. Los controles son marcadores de levantamiento: píldoras con un punto de pin, escalones de nivel, puntos de ruta.

La densidad es de lámina técnica, no de folleto: mucho aire de arena, información anclada a líneas finas y cifras grandes en Bebas que se leen como cotas. La fotografía es paisaje real de páramo colombiano y vegetación nativa (frailejones, laguna, vivero); el producto aparece recortado, apoyado sobre una línea de suelo. El movimiento es descenso vertical lento con salida suave; las líneas se dibujan, los árboles crecen desde la base, nada rebota.

**Key Characteristics:**
- Arena (#EEE8DE) como papel, petróleo profundo como tinta y como lámina invertida para las zonas operativas.
- Bandas de estrato en lichen, sage, moss-2 e ink, cada una más gruesa cuanto más profunda.
- Bebas Neue en mayúsculas para enunciados, cotas, precios y controles; Archivo condensado para frases; Carlito para notas legales y pies de lámina.
- Líneas guía de 1 a 1.5 px en tinta translúcida como estructura, en lugar de cajas.
- Verde de empaque solo donde se siembra un árbol.

## Colors

Paleta del brand book 2024 aplicada como lámina: arenas cálidas de papel, petróleos como tinta, estratos vegetales y un solo verde vivo reservado para la siembra.

### Primary
- **Petróleo Profundo** (ink): tinta de todo el texto, botón primario, lámina invertida (calculadora, ficha, resumen total, cuenta, menú móvil), estrato más profundo (Bosque). También el color de selección y de los estados activos de controles.
- **Petróleo** (petrol): hover del botón primario, texto secundario sobre arena (clase muted), etiquetas de campos, fondo de la banda de restaurantes.

### Secondary
- **Roca** (rock): estrato de roca en el corte y pulgar de la barra de desplazamiento.
- **Cielo de Niebla** (sky): la gota y su marcador de altitud, texto secundario sobre petróleo, iconos de botellón en la calculadora.
- **Terracota** (clay): anillo de foco sobre arena, borde de campo inválido, capa de arcilla en el corte.
- **Terracota Oscura** (clay-ink): versión legible de la terracota para texto sobre arena (errores, dato destacado de la leyenda, sello "tu plan").
- **Mostaza** (mustard): anillo de foco sobre petróleo, chip de aviso y marcas puntuales dentro del corte. Nunca como fondo de sección.

### Tertiary (estratos)
- **Liquen** (lichen): estrato Semilla, segunda línea del titular del hero, cifras de las notas del bosque y la frase de marca sobre petróleo.
- **Salvia** (sage): estrato Raíz y vegetación del corte.
- **Musgo** (moss): capa vegetal del corte.
- **Musgo Hondo** (moss-2): estrato Cauce y fondo de bodegones de producto.
- **Bosque Nocturno** (forest): texto sobre el verde de siembra y contorno del último punto de ruta.
- **Verde Siembra** (sprout, Pantone 361C): chip de impacto, medallas logradas, último punto de la ruta, conteos de árboles.

### Neutral
- **Arena** (sand): fondo de página y de la lámina, texto sobre petróleo.
- **Arena 2** (sand-2): fondo de controles segmentados, chips, avisos, pista de la barra de desplazamiento.
- **Arena 3** (sand-3): pista vacía del rango y marcas apagadas.
- **Papel** (paper): fondo de tarjetas seleccionables (zonas, opciones, resumen).
- **Papel de Campo** (paper-field): fondo de campos de texto y selects.
- **Tinta Legal** (legal-ink): pies de lámina y notas legales sobre arena.
- **Línea** (line) y **Línea Fuerte** (line-strong): hairlines, bordes de campos y tarjetas, reglas, escalas del altímetro.

### Named Rules
**The Planted Green Rule.** El verde siembra aparece solo donde hay un árbol sembrado o contado: chips de impacto, conteos, medallas, el final de la ruta. Nunca en botones de compra genéricos ni en decoración.

**The Stratum Order Rule.** Cuando los niveles se apilan, el orden es lichen, sage, moss-2, ink de arriba abajo, y cada banda es más gruesa que la anterior. Más profundo significa más consumo y menor precio unitario.

**The Readable Clay Rule.** La terracota base es material del corte y anillo de foco; cuando la terracota lleva texto sobre arena se usa clay-ink.

## Typography

**Display Font:** Bebas Neue (con Arial Narrow)
**Body Font:** Archivo en ancho condensado (wdth 85 a 88) (con Arial Narrow)
**Label/Mono Font:** Bebas Neue para etiquetas y cifras; Carlito (con Calibri) para notas legales

**Character:** Bebas en mayúsculas habla como cota rotulada en un plano: altitudes, precios, nombres de estrato. Archivo condensado conserva la estrechez del rotulado pero se lee como frase; Carlito queda para la letra pequeña, como en el brand book.

### Hierarchy
- **Display** (400, clamp(3.4rem, 8.4vw, 6rem), 0.9): titular del hero, uno por página.
- **Headline** (400, clamp(2.6rem, 5.6vw, 4.6rem), 0.9): títulos de sección y de la leyenda del corte.
- **Title** (400, clamp(1.7rem, 2.6vw, 2.3rem), 0.95): paneles de la leyenda, títulos de paso del flujo de suscripción, títulos dentro de láminas.
- **Lead** (400, clamp(1.12rem, 1.5vw, 1.3rem), 1.5, máximo 34em): bajada bajo titulares.
- **Body** (400, 1.0625rem, 1.55, máximo 62ch): todo texto corrido.
- **Label** (400, 1.05rem, 0.06em, mayúsculas por la fuente): etiquetas de campo, valores de filas, nombres de pasos, navegación (1.2rem), botones (1.3rem).
- **Legal** (400, 0.86rem, 1.45): pies de lámina ("Lámina 1 · Corte del páramo de Guasca"), avisos de propuesta, copyright.

Cifras grandes (precio de la calculadora, total, fecha de próxima entrega) usan Bebas entre 3.2rem y 5.4rem con interlineado 0.85 y números tabulares.

### Named Rules
**The Cota Rule.** Toda cifra que se compara o cambia (precio, altitud, cantidad, total) va en Bebas con números tabulares. Las frases nunca van en Bebas; los enunciados cortos sí.

**The Plate Caption Rule.** La identificación de una lámina va debajo de ella, en Carlito, como pie de plano. Nunca arriba del título como antetítulo.

## Layout

Contenedor principal de 1440 px en el home y de 1280 px en el flujo de suscripción, con márgenes laterales de 16 px que pasan a 32 px desde md. Las secciones respiran con un padding vertical de clamp(88px, 11vw, 160px). Las composiciones son asimétricas en dos columnas (texto flexible y una lámina de 420 a 520 px que se fija con sticky en desktop); las bandas a sangre (impacto, restaurantes) parten la pantalla mitad imagen, mitad lámina petróleo con padding de 48 a 80 px.

El corte del páramo es una escena sticky de 100svh dentro de una sección de 640vh: el SVG ocupa todo, la leyenda flota abajo a la izquierda y el altímetro vive en un panel de 128 px a la derecha. Bajo 768 px el altímetro desaparece, el corte se apila y la leyenda pasa a flujo normal. Con movimiento reducido la sección colapsa a altura natural.

La tienda es una repisa de 6 columnas (3 bajo 1100 px, 2 bajo 560 px) con los productos apoyados sobre una línea de suelo de 1.5 px.

## Elevation & Depth

Sistema plano por capas tonales: arena, papel y petróleo separan los planos, y las hairlines hacen el resto. Las sombras existen solo para lo que flota sobre la lámina, siempre difusas y teñidas de petróleo, nunca negras duras ni desplazadas.

### Shadow Vocabulary
- **Marcador** (`box-shadow: 0 1px 0 rgba(10,38,50,.15), 0 8px 18px -10px rgba(10,38,50,.45)`): botones de levantamiento.
- **Leyenda flotante** (`box-shadow: 0 1px 0 var(--line), 0 30px 60px -32px rgba(10,38,50,.55)`): leyenda sobre el corte.
- **Columna de estratos** (`box-shadow: 0 1px 0 var(--line), 0 40px 80px -50px rgba(10,38,50,.6)`): la columna de planes.
- **Foco de campo** (`box-shadow: 0 0 0 4px rgba(10,38,50,.1)`): anillo suave al enfocar un input.
- **Encabezado sólido** (`box-shadow: 0 1px 0 var(--line)` con blur de 8 px): encabezado fijo sobre arena al 94 %.

### Named Rules
**The Hairline Before Shadow Rule.** Una superficie se separa primero con una línea de 1 px y un cambio de tono; la sombra larga y suave se reserva para lo que flota sobre otra escena.

## Shapes

Dos geometrías conviven: lo que se toca es redondo (píldoras de 999 px, puntos de pin y de ruta, pulgares de rango) y lo que contiene es una lámina de esquinas amplias (22 px las láminas petróleo y la columna de estratos, 18 px la leyenda, 16 px avisos y resúmenes, 14 px tarjetas seleccionables, 10 px campos, 6 px la lectura del altímetro). Los bordes son trazos de 1.5 px en tinta translúcida. El corte del hero es una curva de terreno dibujada con trazo de 2 px y marcas de cota, y las rutas son líneas punteadas de 8 px con huecos de 6 px.

## Components

### Buttons
Marcadores de levantamiento: firmes, rotulados en Bebas, con un punto de pin al inicio.
- **Shape:** píldora (999px), alto mínimo 3.25rem.
- **Primary:** tinta sobre arena con texto arena, Bebas 1.3rem con 0.05em, pin de 0.6em con halo del 30 % del color de texto.
- **Hover / Focus:** pasa a petróleo y sube 1 px; al presionar baja 1 px; foco con contorno de 2 px en terracota (mostaza sobre petróleo) a 3 px.
- **Sand:** para usar sobre fotografía o petróleo; arena con texto tinta.
- **Ghost:** transparente con borde interior de 1.5 px del color actual; en hover, velo del 10 %.
- **Mini:** píldora de 2.75rem con borde de 1.5 px, para acciones secundarias y de cuenta (atrás, pausar, saltar).
- **Link con flecha:** Bebas 1.25rem subrayado por un trazo de 1.5 px; la flecha SVG se corre 4 px en hover.

### Chips
- **Style:** píldora Bebas 1rem sobre arena 2 con texto petróleo.
- **Variants:** siembra (verde siembra con texto bosque nocturno), aviso (mostaza con tinta), cielo (sky con tinta).

### Cards / Containers
- **Corner Style:** 22px para láminas, 14 a 18px para tarjetas.
- **Background:** láminas en tinta con texto arena; tarjetas en papel con borde de línea.
- **Shadow Strategy:** ver Elevation & Depth; las tarjetas de selección no llevan sombra.
- **Border:** 1.5px de línea, línea fuerte en hover, tinta al seleccionar.
- **Internal Padding:** 1rem a 1.25rem en tarjetas; clamp(1.25rem, 3vw, 2.25rem) en láminas.
- **Filas de lámina:** pares etiqueta/valor separados por una regla de arena al 16 a 18 %, valor en Bebas a la derecha.

### Inputs / Fields
- **Style:** 3.2rem de alto, papel de campo, borde de 1.5px de línea, radio de 10px; select con chevron SVG en tinta.
- **Focus:** borde tinta y anillo suave de 4px al 10 %.
- **Error / Disabled:** borde terracota y mensaje en clay-ink a 0.92rem.
- **Segmentado:** píldora arena 2 con 4 px de padding; el segmento activo se vuelve tinta.
- **Stepper:** píldora de 3rem con borde fuerte y número en Bebas 1.7rem tabular.
- **Rango:** pista de 3 px que se llena de tinta, pulgar arena de 22 px con anillo de 3 px.
- **Opción radio:** tarjeta papel cuyo círculo se rellena con un anillo interior de 6 px de tinta.

### Navigation
Encabezado fijo, transparente con texto arena sobre el hero y sólido (arena al 94 %, blur de 8 px, hairline inferior) al bajar. Enlaces en Bebas 1.2rem con subrayado de 1.5 px que crece desde la izquierda en hover y en la página actual. En móvil, una cortina petróleo baja desde arriba con enlaces en Bebas 2.8rem.

### Altímetro
Riel vertical de 1.5 px con marcas mayores de 16 px y menores de 8 px, cotas en Bebas y una gota o punto cielo con anillo tinta que baja con el scroll; la lectura actual va en una etiqueta tinta de 6 px de radio con números tabulares.

### Columna de estratos
Los planes se apilan como estratos (ver The Stratum Order Rule) con una textura de puntos o rayado al 50 % por banda; la banda activa crece 1.6rem y muestra un sello clay-ink. Su versión compacta en el flujo usa alturas de 3.2 a 4.7rem y subraya el nombre activo.

### Perfil de pasos y ruta
Los pasos del flujo son puntos de 16 px que descienden 7 px por paso, como la gota; hecho es tinta, actual es cielo con anillo tinta. La ruta del servicio es una línea punteada con puntos huecos y un último punto en verde siembra.

### Bosque
Siluetas de árbol en SVG que crecen desde la base (scaleY) con 1.1 s de salida suave y retardos escalonados; un árbol por cada 10 botellones.

## Do's and Don'ts

### Do:
- **Do** usar arena (#EEE8DE) como fondo y petróleo profundo (#0A2632) como tinta y como lámina invertida de las zonas operativas.
- **Do** apilar niveles en el orden lichen, sage, moss-2, ink, con bandas más gruesas al bajar.
- **Do** poner cifras, cotas y precios en Bebas con números tabulares, y frases en Archivo condensado (wdth 85 a 88).
- **Do** estructurar con hairlines de 1 a 1.5 px en rgba(10, 38, 50, .22) o .55 antes que con cajas.
- **Do** animar con la curva cubic-bezier(.16, 1, .3, 1): revelados de 18 px en 0.9 s, árboles que crecen desde la base, y respetar prefers-reduced-motion.
- **Do** etiquetar los precios de propuesta como propuesta, en Carlito, debajo de la lámina que los muestra.

### Don't:
- **Don't** usar el verde siembra (#43B02A) fuera de lo que cuenta o planta árboles.
- **Don't** poner texto en la terracota base sobre arena; usar clay-ink (#8E4F34).
- **Don't** usar rebotes, resortes ni sombras negras duras o desplazadas.
- **Don't** escribir frases largas en Bebas ni usar Bebas en minúsculas.
- **Don't** colocar antetítulos sobre los títulos; el número de lámina va como pie.
- **Don't** usar fotografía de pinos o eucaliptos; el paisaje es páramo colombiano y vegetación nativa.
- **Don't** alterar el logo del brand book; se aplica como máscara en el color actual.
