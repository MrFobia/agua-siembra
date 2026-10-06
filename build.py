#!/usr/bin/env python3
"""Build Agua Siembra views.

dist/            -> self-contained HTML (CSS, JS and images inline) for local review
dist/backbone/   -> same pages as .blade.php for Backbone AI "Import HTML"

Backbone serves external .css/.js as text/plain with nosniff, so everything is inlined.
Links between views: pass preview ids once they exist, e.g.
    python3 build.py --index-url /preview/1200 --sub-url /preview/1201
"""
import argparse, base64, mimetypes, pathlib, re

ROOT = pathlib.Path(__file__).parent
SRC, DIST = ROOT / "src", ROOT / "dist"
PAGES = {"index.html": "index", "suscripcion.html": "suscripcion"}


def data_uri(path: pathlib.Path) -> str:
    mime = mimetypes.guess_type(path.name)[0] or ("image/webp" if path.suffix == ".webp" else "application/octet-stream")
    return f"data:{mime};base64,{base64.b64encode(path.read_bytes()).decode()}"


def build(index_url: str, sub_url: str) -> None:
    shared_css = (SRC / "shared.css").read_text()
    shared_js = (SRC / "shared.js").read_text()
    (DIST / "backbone").mkdir(parents=True, exist_ok=True)
    cache = {}
    for name, slug in PAGES.items():
        html = (SRC / name).read_text()
        html = html.replace("/*@include shared.css*/", shared_css).replace("/*@include shared.js*/", shared_js)

        def inline(m):
            rel = m.group(1)
            p = SRC / rel
            if not p.exists():
                raise SystemExit(f"missing asset {rel} in {name}")
            if rel not in cache:
                cache[rel] = data_uri(p)
            return cache[rel]

        html = re.sub(r"(?<![\w/])(assets/[\w.\-]+)", inline, html)
        local = html
        (DIST / name).write_text(local)

        blade = html
        if index_url:
            blade = re.sub(r'href="index\.html', f'href="{index_url}', blade)
        if sub_url:
            blade = re.sub(r'(["\'])suscripcion\.html', lambda m: m.group(1) + sub_url, blade)
        if "{{" in blade or "{!!" in blade:
            raise SystemExit(f"{name}: contains Blade echo syntax")
        (DIST / "backbone" / f"{slug}.blade.php").write_text(blade)
        print(f"{name}: {len(local) / 1024:.0f} KB")


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--index-url", default="")
    ap.add_argument("--sub-url", default="")
    a = ap.parse_args()
    build(a.index_url, a.sub_url)
