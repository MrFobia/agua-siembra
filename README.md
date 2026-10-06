# Agua Siembra — propuesta web

Home + módulo de suscripción para Agua Siembra (agua mineral natural del páramo de Guasca, botellón retornable por suscripción en Bogotá). Dirección visual "Corte del páramo". HTML + Tailwind (CDN) + CSS + JS vanilla.

## Estructura

- `src/` — fuentes: `index.html`, `suscripcion.html`, `shared.css`, `shared.js`, `assets/`
- `build.py` — incrusta CSS, JS e imágenes (data URI) y genera:
  - `dist/*.html` — páginas autocontenidas para revisión local
  - `dist/backbone/*.blade.php` — vistas para "Import HTML" en Backbone AI
- `PRODUCT.md`, `DESIGN.md` — contexto de producto y sistema de diseño
- `_ref/` — brand book, fotos y catálogo del sitio actual

## Uso

```bash
python3 build.py
cd dist && python3 -m http.server 8731   # http://localhost:8731
```

Al tener los ids de preview en Backbone AI, enlazar las vistas:

```bash
python3 build.py --index-url /preview/N --sub-url /preview/M
```

Escalones de precio, depósito diferido, zonas de ruta y dispensador son propuesta para validar en el piloto.
