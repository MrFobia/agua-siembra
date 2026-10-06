/* Agua Siembra — datos y comportamiento compartido */
var AS = (function () {
  var COP = function (n) { return "$" + Math.round(n).toLocaleString("es-CO"); };
  var NUM = function (n) { return Math.round(n).toLocaleString("es-CO"); };
  var LITROS = 20;          // botellón retornable de 20 L
  var DEPOSITO = 60000;     // por envase en circulación (precio real del primer botellón: $83.000 = $23.000 + $60.000)
  var POR_ARBOL = 10;       // 1 árbol por cada 10 botellones
  // Escalones propuestos por Backbone para el piloto
  var PLANES = [
    { id: "semilla", nombre: "Semilla", min: 1, max: 2, precio: 23000, rango: "1 a 2 al mes" },
    { id: "raiz", nombre: "Raíz", min: 3, max: 5, precio: 21500, rango: "3 a 5 al mes" },
    { id: "cauce", nombre: "Cauce", min: 6, max: 9, precio: 20500, rango: "6 a 9 al mes" },
    { id: "bosque", nombre: "Bosque", min: 10, max: Infinity, precio: 19500, rango: "10 o más al mes" }
  ];
  var CONSUMO = { casa: 55, oficina: 40, restaurante: 90 }; // litros por persona/puesto al mes
  // Zonas y días de ruta: propuesta por validar en el piloto
  var ZONAS = [
    { id: "chapinero", nombre: "Chapinero", dia: "lunes", dow: 1 },
    { id: "usaquen", nombre: "Usaquén", dia: "martes", dow: 2 },
    { id: "suba", nombre: "Suba (Niza, Colina)", dia: "martes", dow: 2 },
    { id: "barrios-unidos", nombre: "Barrios Unidos", dia: "miércoles", dow: 3 },
    { id: "teusaquillo", nombre: "Teusaquillo", dia: "miércoles", dow: 3 },
    { id: "engativa", nombre: "Engativá", dia: "jueves", dow: 4 },
    { id: "fontibon", nombre: "Fontibón", dia: "jueves", dow: 4 },
    { id: "puente-aranda", nombre: "Puente Aranda", dia: "viernes", dow: 5 },
    { id: "sabana", nombre: "Chía, Cajicá o Sopó", dia: null, dow: null },
    { id: "otra", nombre: "Otra zona", dia: null, dow: null }
  ];
  var WA = "573146941730";
  var MESES = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
  var DIAS = ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"];

  function plan(n) { for (var i = 0; i < PLANES.length; i++) if (n <= PLANES[i].max) return PLANES[i]; return PLANES[PLANES.length - 1]; }
  function sugeridos(tipo, personas) { return Math.max(1, Math.ceil(personas * (CONSUMO[tipo] || 55) / LITROS)); }
  function zona(id) { for (var i = 0; i < ZONAS.length; i++) if (ZONAS[i].id === id) return ZONAS[i]; return null; }
  function proximoDia(dow, desde) {
    if (dow == null) return null;
    var d = new Date(desde || new Date()); d.setHours(0, 0, 0, 0); d.setDate(d.getDate() + 1);
    while (d.getDay() !== dow) d.setDate(d.getDate() + 1);
    return d;
  }
  function fecha(d) { return DIAS[d.getDay()] + " " + d.getDate() + " de " + MESES[d.getMonth()]; }
  function wa(texto) { return "https://wa.me/" + WA + "?text=" + encodeURIComponent(texto); }

  function initChrome() {
    document.documentElement.classList.add("js");
    var head = document.querySelector(".site-head");
    var solidAt = head && head.hasAttribute("data-solid-after") ? parseFloat(head.getAttribute("data-solid-after")) : 0;
    function onScroll() {
      if (!head) return;
      var limit = solidAt ? window.innerHeight * solidAt : 8;
      head.classList.toggle("is-solid", window.scrollY > limit);
    }
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

    var menuBtn = document.querySelector("[data-menu-open]");
    var mnav = document.querySelector(".mnav");
    if (menuBtn && mnav) {
      var closeBtn = mnav.querySelector("[data-menu-close]");
      var open = function () { mnav.classList.add("is-open"); menuBtn.setAttribute("aria-expanded", "true"); document.body.style.overflow = "hidden"; closeBtn && closeBtn.focus(); };
      var close = function () { mnav.classList.remove("is-open"); menuBtn.setAttribute("aria-expanded", "false"); document.body.style.overflow = ""; menuBtn.focus(); };
      menuBtn.addEventListener("click", open);
      closeBtn && closeBtn.addEventListener("click", close);
      mnav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { mnav.classList.remove("is-open"); document.body.style.overflow = ""; menuBtn.setAttribute("aria-expanded", "false"); }); });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape" && mnav.classList.contains("is-open")) close(); });
    }

    var els = document.querySelectorAll("[data-reveal]");
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
      els.forEach(function (el) { io.observe(el); });
    } else { els.forEach(function (el) { el.classList.add("is-in"); }); }
  }

  /* Dibujo de especies nativas en el lenguaje de los frailejones del corte (base en 0,0) */
  function rosette(cx, cy, r, fill, n) {
    var s = r / 15, g = "", k = n || 9, step = 160 / (k - 1);
    for (var i = 0; i < k; i++) g += '<path d="M0 0q-2.4 -9 0 -15q2.4 6 0 15Z" fill="' + fill + '" transform="translate(' + cx + " " + cy + ") rotate(" + (-80 + i * step).toFixed(1) + ") scale(" + s.toFixed(2) + ')"/>';
    return g;
  }
  function tree(type, fill, trunk) {
    var t = trunk || "#244550", g = "";
    if (type === 0) { // frailejón
      g = '<path d="M-1.6 0V-28h3.2V0Z" fill="' + t + '"/>' + rosette(0, -28, 15, fill) + '<circle cx="0" cy="-29" r="2.4" fill="#C3D5A0"/>';
    } else if (type === 1) { // arbusto de páramo
      g = rosette(-9, -6, 12, fill, 7) + rosette(9, -7, 12, fill, 7) + rosette(0, -12, 15, fill) ;
    } else { // árbol nativo: tronco que se abre en tres copas
      g = '<path d="M-2 0V-30l-11 -14 2-1.6 11 12 1-10h2l1 10 11-12 2 1.6 -11 14V0Z" fill="' + t + '"/>' +
        rosette(-13, -44, 16, fill) + rosette(13, -44, 16, fill) + rosette(0, -50, 19, fill, 11);
    }
    return g;
  }
  function soil(w, h) { // franja de suelo leída desde el corte: vegetación, turba con poros, roca
    var p = "";
    for (var i = 0; i < Math.round(w / 9); i++) p += '<circle cx="' + ((i * 37) % w) + '" cy="' + (8 + (i * 13) % (h * .45)).toFixed(1) + '" r="' + (1 + (i % 3) * .45).toFixed(2) + '"/>';
    return '<rect x="0" y="0" width="' + w + '" height="' + h + '" fill="#4C7B84"/><rect x="0" y="0" width="' + w + '" height="' + (h * .55).toFixed(1) + '" fill="#4C6755"/><g fill="#C3D5A0" opacity=".45">' + p + '</g><rect x="0" y="0" width="' + w + '" height="4" fill="#92B992"/><path d="M0 0H' + w + '" stroke="#0A2632" stroke-width="1.5"/>';
  }

  return { COP: COP, tree: tree, soil: soil, NUM: NUM, LITROS: LITROS, DEPOSITO: DEPOSITO, POR_ARBOL: POR_ARBOL, PLANES: PLANES, CONSUMO: CONSUMO, ZONAS: ZONAS,
    plan: plan, sugeridos: sugeridos, zona: zona, proximoDia: proximoDia, fecha: fecha, wa: wa, initChrome: initChrome,
    reduced: function () { return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches; } };
})();
