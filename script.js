// =============================================
//  SUPERBIKESKB - SCRIPT COMPLETO
// =============================================

const motos = [
    {
        nombre: "Yamaha R6",
        marca: "Yamaha",
        precio: "$62,400,000",
        precioNum: 62400000,
        badge: null,
        imagenes: ["img/r6/r6_1.jpg", "img/r6/r6_2.jpg", "img/r6/r6_3.jpg", "img/r6/r6_4.jpg", "img/r6/r6_5.jpg", "img/r6/r6_6.jpg", "img/r6/r6_7.jpg", "img/r6/r6_8.jpg", "img/r6/r6_9.jpg", "img/r6/r6_10.jpg", "img/r6/r6_11.jpg"],
        detalles: { cilindrada: "599 CC", potencia: "118.4 CV", torque: "61.7 NM", peso: "190 KG", motor: "Tetracilíndrico" }
    },
    {
        nombre: "Kawasaki ZX-10R",
        marca: "Kawasaki",
        precio: "$115,990,000",
        precioNum: 115990000,
        badge: "Más vendida",
        imagenes: ["img/zx10r/zx10r_1.jpg", "img/zx10r/zx10r_2.jpg", "img/zx10r/zx10r_3.jpg", "img/zx10r/zx10r_4.jpg", "img/zx10r/zx10r_5.jpg", "img/zx10r/zx10r_6.jpg", "img/zx10r/zx10r_7.jpg", "img/zx10r/zx10r_8.jpg", "img/zx10r/zx10r_9.jpg", "img/zx10r/zx10r_10.jpg", "img/zx10r/zx10r_11.jpg"],
        detalles: { cilindrada: "998 CC", potencia: "203 CV", torque: "115 NM", peso: "207 KG", motor: "Tetracilíndrico" }
    },
    {
        nombre: "BMW S1000RR",
        marca: "BMW",
        precio: "$147,000,000",
        precioNum: 147000000,
        badge: null,
        imagenes: ["img/s1000rr/s1000rr_1.jpg", "img/s1000rr/s1000rr_2.jpg", "img/s1000rr/s1000rr_3.jpg", "img/s1000rr/s1000rr_4.jpg", "img/s1000rr/s1000rr_5.jpg", "img/s1000rr/s1000rr_6.jpg", "img/s1000rr/s1000rr_7.jpg", "img/s1000rr/s1000rr_8.jpg", "img/s1000rr/s1000rr_9.jpg", "img/s1000rr/s1000rr_10.jpg", "img/s1000rr/s1000rr_11.jpg", "img/s1000rr/s1000rr_12.jpg", "img/s1000rr/s1000rr_13.jpg", "img/s1000rr/s1000rr_14.jpg"],
        detalles: { cilindrada: "999 CC", potencia: "210 CV", torque: "113 NM", peso: "197 KG", motor: "Tetracilíndrico" }
    },
    {
        nombre: "Yamaha R1",
        marca: "Yamaha",
        precio: "$100,000,000",
        precioNum: 100000000,
        badge: null,
        imagenes: ["img/r1/r1_1.jpg", "img/r1/r1_2.jpg", "img/r1/r1_3.jpg", "img/r1/r1_4.jpg", "img/r1/r1_5.jpg", "img/r1/r1_6.jpg", "img/r1/r1_7.jpg", "img/r1/r1_8.jpg", "img/r1/r1_9.jpg", "img/r1/r1_10.jpg", "img/r1/r1_11.jpg"],
        detalles: { cilindrada: "998 CC", potencia: "200 CV", torque: "112.4 NM", peso: "199 KG", motor: "Tetracilíndrico" }
    },
    {
        nombre: "Ducati Panigale V4R",
        marca: "Ducati",
        precio: "$180,000,000",
        precioNum: 180000000,
        badge: "Premium",
        imagenes: ["img/v4r/v4r_1.jpg", "img/v4r/v4r_2.jpg", "img/v4r/v4r_3.jpg", "img/v4r/v4r_4.jpg", "img/v4r/v4r_5.jpg", "img/v4r/v4r_6.jpg", "img/v4r/v4r_7.jpg", "img/v4r/v4r_8.jpg", "img/v4r/v4r_9.jpg", "img/v4r/v4r_10.jpg", "img/v4r/v4r_11.jpg", "img/v4r/v4r_12.jpg", "img/v4r/v4r_13.jpg", "img/v4r/v4r_14.jpg"],
        detalles: { cilindrada: "999 CC", potencia: "210 CV", torque: "114.5 NM", peso: "190 KG", motor: "Tetracilíndrico" }
    },
    {
        nombre: "Yamaha MT-09 SP",
        marca: "Yamaha",
        precio: "$80,000,000",
        precioNum: 80000000,
        badge: null,
        imagenes: ["img/09/09_1.jpg", "img/09/09_2.jpg", "img/09/09_3.jpg", "img/09/09_4.jpg", "img/09/09_5.jpg", "img/09/09_6.jpg", "img/09/09_7.jpg", "img/09/09_8.jpg", "img/09/09_9.jpg", "img/09/09_10.jpg", "img/09/09_11.jpg"],
        detalles: { cilindrada: "890 CC", potencia: "117.3 CV", torque: "93 NM", peso: "194 KG", motor: "Tricilíndrico" }
    },
    {
        nombre: "Honda CBR 1000RR-R Fireblade SP",
        marca: "Honda",
        precio: "$160,000,000",
        precioNum: 160000000,
        badge: null,
        imagenes: ["img/fireblade/fireblade_1.jpg", "img/fireblade/fireblade_2.jpg", "img/fireblade/fireblade_3.jpg", "img/fireblade/fireblade_4.jpg", "img/fireblade/fireblade_5.jpg", "img/fireblade/fireblade_6.jpg", "img/fireblade/fireblade_7.jpg", "img/fireblade/fireblade_8.jpg", "img/fireblade/fireblade_9.jpg", "img/fireblade/fireblade_10.jpg", "img/fireblade/fireblade_11.jpg"],
        detalles: { cilindrada: "1000 CC", potencia: "217 CV", torque: "113 NM", peso: "201 KG", motor: "Tetracilíndrico" }
    },
    {
        nombre: "Yamaha MT-10",
        marca: "Yamaha",
        precio: "$80,000,000",
        precioNum: 80000000,
        badge: null,
        imagenes: ["img/mt10/mt10_1.jpg", "img/mt10/mt10_2.jpg", "img/mt10/mt10_3.jpg", "img/mt10/mt10_4.jpg", "img/mt10/mt10_5.jpg", "img/mt10/mt10_6.jpg", "img/mt10/mt10_7.jpg", "img/mt10/mt10_8.jpg", "img/mt10/mt10_9.jpg", "img/mt10/mt10_10.jpg", "img/mt10/mt10_11.jpg"],
        detalles: { cilindrada: "998 CC", potencia: "165 CV", torque: "112 NM", peso: "212 KG", motor: "Tetracilíndrico" }
    },
    {
        nombre: "BMW S1000R",
        marca: "BMW",
        precio: "$112,000,000",
        precioNum: 112000000,
        badge: null,
        imagenes: ["img/s1000r/s1000r_1.jpg", "img/s1000r/s1000r_2.jpg", "img/s1000r/s1000r_3.jpg", "img/s1000r/s1000r_4.jpg", "img/s1000r/s1000r_5.jpg", "img/s1000r/s1000r_6.jpg", "img/s1000r/s1000r_7.jpg", "img/s1000r/s1000r_8.jpg", "img/s1000r/s1000r_9.jpg", "img/s1000r/s1000r_10.jpg", "img/s1000r/s1000r_11.jpg"],
        detalles: { cilindrada: "999 CC", potencia: "165 CV", torque: "114 NM", peso: "199 KG", motor: "Tetracilíndrico" }
    },
    {
        nombre: "Kawasaki Z900",
        marca: "Kawasaki",
        precio: "$65,990,000",
        precioNum: 65990000,
        badge: "Oferta",
        imagenes: ["img/z900/z900_1.jpg", "img/z900/z900_2.jpg", "img/z900/z900_3.jpg", "img/z900/z900_4.jpg", "img/z900/z900_5.jpg", "img/z900/z900_6.jpg", "img/z900/z900_7.jpg", "img/z900/z900_8.jpg", "img/z900/z900_9.jpg", "img/z900/z900_10.jpg", "img/z900/z900_11.jpg"],
        detalles: { cilindrada: "948 CC", potencia: "125 CV", torque: "98.6 NM", peso: "193 KG", motor: "Tetracilíndrico" }
    }
];

// =============================================
//  ESTADO GLOBAL
// =============================================
let marcaActiva = "todos";
let precioMax = 200000000;
let textoBuscar = "";
let ordenActual = "default";
let motoActual = null;
let galIndice = 0;
let comparador = [];  // máx 2 motos

// =============================================
//  RENDER CARDS
// =============================================
function aplicarFiltros() {
    let lista = motos.filter(m => {
        const marca = marcaActiva === "todos" || m.marca === marcaActiva;
        const precio = m.precioNum <= precioMax;
        const texto = m.nombre.toLowerCase().includes(textoBuscar);
        return marca && precio && texto;
    });

    if (ordenActual === "asc") lista.sort((a, b) => a.precioNum - b.precioNum);
    if (ordenActual === "desc") lista.sort((a, b) => b.precioNum - a.precioNum);
    if (ordenActual === "az") lista.sort((a, b) => a.nombre.localeCompare(b.nombre));

    mostrarMotos(lista);
}

function mostrarMotos(lista) {
    const contenedor = document.getElementById("motos");
    contenedor.innerHTML = "";

    if (lista.length === 0) {
        contenedor.innerHTML = "<p style='color:var(--texto-suave);font-size:16px;grid-column:1/-1'>No se encontraron motos con esos filtros.</p>";
        return;
    }

    lista.forEach(moto => {
        const enComp = comparador.some(c => c.nombre === moto.nombre);
        const badge = moto.badge ? `<div class="card-badge">${moto.badge}</div>` : "";
        contenedor.innerHTML += `
      <div class="card">
        ${badge}
        <div class="card-img-wrap">
          <img src="${moto.imagenes[0]}" alt="${moto.nombre}">
        </div>
        <div class="card-body">
          <h3>${moto.nombre}</h3>
          <p class="precio">${moto.precio}</p>
          <div class="card-btns">
            <button onclick='verDetalles(${JSON.stringify(moto)})'>Ver detalles</button>
            <button class="btn-secundario" onclick='agregarAlCarrito(${JSON.stringify(moto)})'>🛒 Agregar</button>
          </div>
        </div>
      </div>
    `;
    });
}

aplicarFiltros();

// =============================================
//  FILTROS
// =============================================
document.getElementById("buscar").addEventListener("keyup", e => {
    textoBuscar = e.target.value.toLowerCase();
    aplicarFiltros();
});

document.getElementById("filtros-marcas").addEventListener("click", e => {
    if (!e.target.classList.contains("filtro-btn")) return;
    document.querySelectorAll(".filtro-btn").forEach(b => b.classList.remove("activo"));
    e.target.classList.add("activo");
    marcaActiva = e.target.dataset.marca;
    aplicarFiltros();
});

const slider = document.getElementById("slider-precio");
const precioLbl = document.getElementById("precio-label");
slider.addEventListener("input", () => {
    precioMax = parseInt(slider.value);
    precioLbl.textContent = "$" + precioMax.toLocaleString("es-CO");
    aplicarFiltros();
});

document.getElementById("ordenar").addEventListener("change", e => {
    ordenActual = e.target.value;
    aplicarFiltros();
});

// =============================================
//  MODAL DETALLES + GALERÍA
// =============================================
function verDetalles(moto) {
    motoActual = moto;
    galIndice = 0;

    actualizarGaleria();

    document.getElementById("modal-nombre").innerText = moto.nombre;
    document.getElementById("modal-precio").innerText = moto.precio;

    const labels = { cilindrada: "Cilindrada", potencia: "Potencia", torque: "Torque", peso: "Peso", motor: "Motor" };
    let html = "";
    for (const [key, label] of Object.entries(labels)) {
        const val = moto.detalles[key] || "—";
        const pend = val === "Por confirmar" || val === "—";
        html += `<div class="spec-item"><div class="spec-label">${label}</div><div class="spec-value ${pend ? "pendiente" : ""}">${val}</div></div>`;
    }
    document.getElementById("modal-specs").innerHTML = html;

    // Estado del botón comparar
    const enComp = comparador.some(c => c.nombre === moto.nombre);
    const btnComp = document.querySelector(".btn-comparar-modal");
    btnComp.textContent = enComp ? "✔ En comparador" : "⚖️ Comparar";
    btnComp.classList.toggle("activo", enComp);

    document.getElementById("modal").style.display = "flex";
}

function actualizarGaleria() {
    const imgs = motoActual.imagenes;
    const img = document.getElementById("modal-img");

    img.style.opacity = "0";
    setTimeout(() => {
        img.src = imgs[galIndice];
        img.style.opacity = "1";
    }, 200);

    // Dots
    let dots = "";
    imgs.forEach((_, i) => {
        dots += `<div class="dot ${i === galIndice ? "activo" : ""}" onclick="irAFoto(${i})"></div>`;
    });
    document.getElementById("galeria-dots").innerHTML = dots;
}

function galeriaNav(dir) {
    const total = motoActual.imagenes.length;
    galIndice = (galIndice + dir + total) % total;
    actualizarGaleria();
}

function irAFoto(i) {
    galIndice = i;
    actualizarGaleria();
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

document.getElementById("modal").addEventListener("click", function (e) {
    if (e.target === this) cerrarModal();
});

// =============================================
//  COMPARADOR
// =============================================
function toggleComparador(moto) {
    const idx = comparador.findIndex(c => c.nombre === moto.nombre);

    if (idx >= 0) {
        comparador.splice(idx, 1);
    } else {
        if (comparador.length >= 2) {
            alert("Solo puedes comparar 2 motos a la vez. Elimina una primero.");
            return;
        }
        comparador.push(moto);
    }

    renderizarComparadorBarra();

    // Actualizar botón en modal si está abierto
    if (motoActual && motoActual.nombre === moto.nombre) {
        const enComp = comparador.some(c => c.nombre === moto.nombre);
        const btnComp = document.querySelector(".btn-comparar-modal");
        btnComp.textContent = enComp ? "✔ En comparador" : "⚖️ Comparar";
        btnComp.classList.toggle("activo", enComp);
    }
}

function renderizarComparadorBarra() {
    const barra = document.getElementById("comparador-barra");
    const btnVer = document.getElementById("btn-ver-comp");

    barra.classList.toggle("visible", comparador.length > 0);
    btnVer.disabled = comparador.length < 2;

    for (let i = 0; i < 2; i++) {
        const slot = document.getElementById(`comp-slot-${i}`);
        if (comparador[i]) {
            slot.classList.add("lleno");
            slot.innerHTML = `
        <div class="comp-slot-content">
          <img src="${comparador[i].imagenes[0]}" alt="${comparador[i].nombre}">
          <span>${comparador[i].nombre}</span>
        </div>
      `;
        } else {
            slot.classList.remove("lleno");
            slot.innerHTML = `<span class="comp-empty">+ Moto ${i + 1}</span>`;
        }
    }
}

function limpiarComparador() {
    comparador = [];
    renderizarComparadorBarra();
}

function abrirComparadorModal() {
    if (comparador.length < 2) return;

    const [a, b] = comparador;

    // Extrae el primer número de un string como "118.4 CV" → 118.4
    function extraerNum(str) {
        if (!str) return NaN;
        const match = str.match(/[\d.]+/);
        return match ? parseFloat(match[0]) : NaN;
    }

    // Campos con su criterio: "mayor" = más es mejor, "menor" = menos es mejor
    const campos = [
        { label: "Cilindrada", key: "cilindrada", criterio: "mayor" },
        { label: "Potencia", key: "potencia", criterio: "mayor" },
        { label: "Torque", key: "torque", criterio: "mayor" },
        { label: "Peso", key: "peso", criterio: "menor" }, // menos peso = mejor
        { label: "Motor", key: "motor", criterio: null }  // no comparable
    ];

    function resaltar(vA, vB, criterio) {
        const nA = extraerNum(vA);
        const nB = extraerNum(vB);
        if (criterio === null || isNaN(nA) || isNaN(nB) || nA === nB) return ["", ""];
        if (criterio === "mayor") return nA > nB ? ["mejor", ""] : ["", "mejor"];
        if (criterio === "menor") return nA < nB ? ["mejor", ""] : ["", "mejor"];
        return ["", ""];
    }

    // Fila de precio — menor precio es mejor
    const [clPrecioA, clPrecioB] = resaltar(
        String(a.precioNum), String(b.precioNum), "menor"
    );

    let html = `
    <table class="tabla-comp">
      <thead>
        <tr>
          <th>Especificación</th>
          <th>${a.nombre}</th>
          <th>${b.nombre}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Foto</b></td>
          <td><img src="${a.imagenes[0]}" alt="${a.nombre}"></td>
          <td><img src="${b.imagenes[0]}" alt="${b.nombre}"></td>
        </tr>
        <tr>
          <td><b>Precio</b></td>
          <td class="col-precio ${clPrecioA}">${a.precio}</td>
          <td class="col-precio ${clPrecioB}">${b.precio}</td>
        </tr>
  `;

    campos.forEach(c => {
        const vA = a.detalles[c.key] || "—";
        const vB = b.detalles[c.key] || "—";
        const [clA, clB] = resaltar(vA, vB, c.criterio);
        html += `<tr><td><b>${c.label}</b></td><td class="${clA}">${vA}</td><td class="${clB}">${vB}</td></tr>`;
    });

    html += `</tbody></table>`;

    document.getElementById("tabla-comparador").innerHTML = html;
    document.getElementById("modal-comparador").style.display = "flex";
}

function cerrarComparadorModal() {
    document.getElementById("modal-comparador").style.display = "none";
}

document.getElementById("modal-comparador").addEventListener("click", function (e) {
    if (e.target === this) cerrarComparadorModal();
});

// =============================================
//  CARRITO
// =============================================
let carrito = JSON.parse(localStorage.getItem("sbk-carrito") || "[]");

function guardarCarrito() {
    localStorage.setItem("sbk-carrito", JSON.stringify(carrito));
}

function agregarAlCarrito(moto) {
    const existe = carrito.find(i => i.nombre === moto.nombre);
    if (existe) { existe.cantidad++; }
    else { carrito.push({ ...moto, cantidad: 1 }); }
    guardarCarrito();
    renderizarCarrito();
    abrirCarrito();

    const count = document.getElementById("carrito-count");
    count.style.transform = "scale(1.6)";
    setTimeout(() => count.style.transform = "scale(1)", 250);
}

function cambiarCantidad(nombre, delta) {
    const item = carrito.find(i => i.nombre === nombre);
    if (!item) return;
    item.cantidad += delta;
    if (item.cantidad <= 0) carrito = carrito.filter(i => i.nombre !== nombre);
    guardarCarrito();
    renderizarCarrito();
}

function eliminarDelCarrito(nombre) {
    carrito = carrito.filter(i => i.nombre !== nombre);
    guardarCarrito();
    renderizarCarrito();
}

function renderizarCarrito() {
    const container = document.getElementById("carrito-items");
    const countEl = document.getElementById("carrito-count");
    const totalEl = document.getElementById("carrito-total-valor");

    countEl.textContent = carrito.reduce((s, i) => s + i.cantidad, 0);

    if (carrito.length === 0) {
        container.innerHTML = `<div class="carrito-vacio"><span>🏍️</span><p>Tu carrito está vacío.<br>¡Agrega una moto!</p></div>`;
        totalEl.textContent = "$0";
        return;
    }

    let html = "", total = 0;
    carrito.forEach(item => {
        total += item.precioNum * item.cantidad;
        html += `
      <div class="carrito-item">
        <img src="${item.imagenes[0]}" alt="${item.nombre}">
        <div class="carrito-item-info">
          <h4>${item.nombre}</h4>
          <span>${item.precio}</span>
          <div class="carrito-item-qty">
            <button class="qty-btn" onclick="cambiarCantidad('${item.nombre}',-1)">−</button>
            <span class="qty-num">${item.cantidad}</span>
            <button class="qty-btn" onclick="cambiarCantidad('${item.nombre}',1)">+</button>
          </div>
        </div>
        <button class="btn-eliminar" onclick="eliminarDelCarrito('${item.nombre}')">🗑️</button>
      </div>
    `;
    });

    container.innerHTML = html;
    totalEl.textContent = "$" + total.toLocaleString("es-CO");
}

function abrirCarrito() {
    document.getElementById("carrito-sidebar").classList.add("abierto");
    document.getElementById("cart-overlay").style.display = "block";
}

function cerrarCarrito() {
    document.getElementById("carrito-sidebar").classList.remove("abierto");
    document.getElementById("cart-overlay").style.display = "none";
}

renderizarCarrito();

// =============================================
//  CHECKOUT
// =============================================
function abrirCheckout() {
    if (carrito.length === 0) { alert("Tu carrito está vacío."); return; }

    // Resumen dentro del checkout
    let itemsHTML = "";
    let total = 0;
    carrito.forEach(i => {
        total += i.precioNum * i.cantidad;
        itemsHTML += `<li><span>${i.nombre} x${i.cantidad}</span><span>${i.precio}</span></li>`;
    });

    document.getElementById("checkout-resumen").innerHTML = `
    <strong>📋 Resumen del pedido</strong>
    <ul>${itemsHTML}</ul>
    <div class="resumen-total"><span>Total</span><span>$${total.toLocaleString("es-CO")}</span></div>
  `;

    cerrarCarrito();
    document.getElementById("modal-checkout").style.display = "flex";
}

function cerrarCheckout() {
    document.getElementById("modal-checkout").style.display = "none";
}

document.getElementById("modal-checkout").addEventListener("click", function (e) {
    if (e.target === this) cerrarCheckout();
});

document.getElementById("form-checkout").addEventListener("submit", function (e) {
    e.preventDefault();
    cerrarCheckout();
    mostrarConfirmacion();
});

// =============================================
//  CONFIRMACIÓN ANIMADA
// =============================================
function mostrarConfirmacion() {
    // Limpiar carrito
    carrito = [];
    guardarCarrito();
    renderizarCarrito();

    // Generar confetti
    const wrap = document.getElementById("confetti-wrap");
    wrap.innerHTML = "";
    const colores = ["#d60000", "#ff6666", "#ffffff", "#ffcc00", "#ff9900"];
    for (let i = 0; i < 40; i++) {
        const p = document.createElement("div");
        p.className = "confetti-piece";
        p.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 40}%;
      background: ${colores[Math.floor(Math.random() * colores.length)]};
      width: ${6 + Math.random() * 8}px;
      height: ${6 + Math.random() * 8}px;
      border-radius: ${Math.random() > .5 ? "50%" : "2px"};
      animation-delay: ${Math.random() * 1}s;
      animation-duration: ${1.5 + Math.random() * 1}s;
    `;
        wrap.appendChild(p);
    }

    document.getElementById("modal-confirmacion").style.display = "flex";
}

function cerrarConfirmacion() {
    document.getElementById("modal-confirmacion").style.display = "none";
}

// =============================================
//  MODO OSCURO
// =============================================
const btnTema = document.getElementById("btn-tema");
const htmlEl = document.documentElement;
const temaGuardado = localStorage.getItem("sbk-tema") || "light";
htmlEl.setAttribute("data-theme", temaGuardado);
btnTema.textContent = temaGuardado === "dark" ? "☀️" : "🌙";

function toggleTema() {
    const actual = htmlEl.getAttribute("data-theme");
    const nuevo = actual === "dark" ? "light" : "dark";
    htmlEl.setAttribute("data-theme", nuevo);
    localStorage.setItem("sbk-tema", nuevo);
    btnTema.textContent = nuevo === "dark" ? "☀️" : "🌙";
}

// =============================================
//  SCROLL REVEAL
// =============================================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// =============================================
//  BOTÓN VOLVER ARRIBA
// =============================================
const btnTop = document.getElementById("btn-top");
window.addEventListener("scroll", () => {
    btnTop.classList.toggle("visible", window.scrollY > 300);
});

// =============================================
//  EMAILJS
// =============================================
(function () { emailjs.init("698VgG1xC6619YGAS"); })();

document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs.sendForm("service_hh68bjd", "template_cdpdqqm", this)
        .then(() => {
            alert("✅ Mensaje enviado correctamente. ¡Pronto te contactaremos!");
            this.reset();
        }, () => {
            alert("❌ Error al enviar. Por favor intenta de nuevo.");
        });
});