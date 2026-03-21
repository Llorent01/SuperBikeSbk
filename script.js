// =============================================
//  SUPERBIKESKB - SCRIPT
// =============================================

const motos = [
  {
    nombre: "Yamaha R6",
    marca: "Yamaha",
    precio: "$62,400,000",
    precioNum: 62400000,
    imagen: "img/r6.jpg",
    detalles: { cilindrada:"599 CC", potencia:"118.4 CV", torque:"Por confirmar", peso:"190 KG", motor:"Tetracilíndrico" }
  },
  {
    nombre: "Kawasaki ZX-10R",
    marca: "Kawasaki",
    precio: "$115,990,000",
    precioNum: 115990000,
    imagen: "img/zx10r.jpg",
    detalles: { cilindrada:"998 CC", potencia:"203 CV", torque:"Por confirmar", peso:"207 KG", motor:"Tetracilíndrico" }
  },
  {
    nombre: "BMW S1000RR",
    marca: "BMW",
    precio: "$147,000,000",
    precioNum: 147000000,
    imagen: "img/s1000rr.jpg",
    detalles: { cilindrada:"999 CC", potencia:"210 CV", torque:"Por confirmar", peso:"197 KG", motor:"Tetracilíndrico" }
  },
  {
    nombre: "Yamaha R1",
    marca: "Yamaha",
    precio: "$100,000,000",
    precioNum: 100000000,
    imagen: "img/R1.jpg",
    detalles: { cilindrada:"998 CC", potencia:"200 CV", torque:"Por confirmar", peso:"199 KG", motor:"Tetracilíndrico" }
  },
  {
    nombre: "Ducati Panigale V4R",
    marca: "Ducati",
    precio: "$180,000,000",
    precioNum: 180000000,
    imagen: "img/panigale.jpg",
    detalles: { cilindrada:"999 CC", potencia:"210 CV", torque:"Por confirmar", peso:"190 KG", motor:"Tetracilíndrico" }
  },
  {
    nombre: "Yamaha MT-09 SP",
    marca: "Yamaha",
    precio: "$80,000,000",
    precioNum: 80000000,
    imagen: "img/09.jpg",
    detalles: { cilindrada:"890 CC", potencia:"117.3 CV", torque:"93 NM", peso:"194 KG", motor:"Tricilíndrico" }
  },
  {
    nombre: "Honda CBR 1000RR-R Fireblade SP",
    marca: "Honda",
    precio: "$160,000,000",
    precioNum: 160000000,
    imagen: "img/fireblade.jpg",
    detalles: { cilindrada:"1000 CC", potencia:"217 CV", torque:"Por confirmar", peso:"201 KG", motor:"Tetracilíndrico" }
  },
  {
    nombre: "Kawasaki Z900",
    marca: "Kawasaki",
    precio: "$65,990,000",
    precioNum: 65990000,
    imagen: "img/z900.jpg",
    detalles: { cilindrada:"948 CC", potencia:"125 CV", torque:"Por confirmar", peso:"193 KG", motor:"Tetracilíndrico" }
  }
];

// Estado de filtros
let marcaActiva = "todos";
let precioMax   = 200000000;
let textoBuscar = "";

// Moto abierta en modal
let motoActual = null;

// =============================================
//  RENDERIZAR CARDS
// =============================================

function mostrarMotos(lista) {
  const contenedor = document.getElementById("motos");
  contenedor.innerHTML = "";

  if (lista.length === 0) {
    contenedor.innerHTML = "<p style='color:var(--texto-suave);font-size:16px;grid-column:1/-1;'>No se encontraron motos con esos filtros.</p>";
    return;
  }

  lista.forEach(moto => {
    const card = `
      <div class="card">
        <div class="card-img-wrap">
          <img src="${moto.imagen}" alt="${moto.nombre}">
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
    contenedor.innerHTML += card;
  });
}

function aplicarFiltros() {
  const resultado = motos.filter(m => {
    const coincideMarca  = marcaActiva === "todos" || m.marca === marcaActiva;
    const coincidePrecio = m.precioNum <= precioMax;
    const coincideTexto  = m.nombre.toLowerCase().includes(textoBuscar);
    return coincideMarca && coincidePrecio && coincideTexto;
  });
  mostrarMotos(resultado);
}

mostrarMotos(motos);

// =============================================
//  BUSCADOR
// =============================================

document.getElementById("buscar").addEventListener("keyup", e => {
  textoBuscar = e.target.value.toLowerCase();
  aplicarFiltros();
});

// =============================================
//  FILTROS POR MARCA
// =============================================

document.getElementById("filtros-marcas").addEventListener("click", e => {
  if (!e.target.classList.contains("filtro-btn")) return;
  document.querySelectorAll(".filtro-btn").forEach(b => b.classList.remove("activo"));
  e.target.classList.add("activo");
  marcaActiva = e.target.dataset.marca;
  aplicarFiltros();
});

// =============================================
//  FILTRO POR PRECIO (SLIDER)
// =============================================

const slider = document.getElementById("slider-precio");
const precioLabel = document.getElementById("precio-label");

slider.addEventListener("input", () => {
  precioMax = parseInt(slider.value);
  precioLabel.textContent = "$" + precioMax.toLocaleString("es-CO");
  aplicarFiltros();
});

// =============================================
//  MODAL
// =============================================

function verDetalles(moto) {
  motoActual = moto;
  document.getElementById("modal-img").src    = moto.imagen;
  document.getElementById("modal-img").alt    = moto.nombre;
  document.getElementById("modal-nombre").innerText = moto.nombre;
  document.getElementById("modal-precio").innerText = moto.precio;

  const labels = { cilindrada:"Cilindrada", potencia:"Potencia", torque:"Torque", peso:"Peso", motor:"Motor" };
  let specsHTML = "";
  for (const [key, label] of Object.entries(labels)) {
    const valor = moto.detalles[key] || "—";
    const isPendiente = valor === "Por confirmar" || valor === "—";
    specsHTML += `
      <div class="spec-item">
        <div class="spec-label">${label}</div>
        <div class="spec-value ${isPendiente ? "pendiente" : ""}">${valor}</div>
      </div>
    `;
  }
  document.getElementById("modal-specs").innerHTML = specsHTML;
  document.getElementById("modal").style.display  = "flex";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

document.getElementById("modal").addEventListener("click", function(e) {
  if (e.target === this) cerrarModal();
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
  if (existe) {
    existe.cantidad++;
  } else {
    carrito.push({ ...moto, cantidad: 1 });
  }
  guardarCarrito();
  renderizarCarrito();
  abrirCarrito();

  // Animación en el contador
  const count = document.getElementById("carrito-count");
  count.style.transform = "scale(1.5)";
  setTimeout(() => count.style.transform = "scale(1)", 250);
}

function cambiarCantidad(nombre, delta) {
  const item = carrito.find(i => i.nombre === nombre);
  if (!item) return;
  item.cantidad += delta;
  if (item.cantidad <= 0) {
    carrito = carrito.filter(i => i.nombre !== nombre);
  }
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
  const countEl   = document.getElementById("carrito-count");
  const totalEl   = document.getElementById("carrito-total-valor");

  const totalItems = carrito.reduce((s, i) => s + i.cantidad, 0);
  countEl.textContent = totalItems;

  if (carrito.length === 0) {
    container.innerHTML = `
      <div class="carrito-vacio">
        <span>🏍️</span>
        <p>Tu carrito está vacío.<br>¡Agrega una moto!</p>
      </div>
    `;
    totalEl.textContent = "$0";
    return;
  }

  let html = "";
  let total = 0;

  carrito.forEach(item => {
    total += item.precioNum * item.cantidad;
    html += `
      <div class="carrito-item">
        <img src="${item.imagen}" alt="${item.nombre}">
        <div class="carrito-item-info">
          <h4>${item.nombre}</h4>
          <span>${item.precio}</span>
          <div class="carrito-item-qty">
            <button class="qty-btn" onclick="cambiarCantidad('${item.nombre}', -1)">−</button>
            <span class="qty-num">${item.cantidad}</span>
            <button class="qty-btn" onclick="cambiarCantidad('${item.nombre}', 1)">+</button>
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

function checkout() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }
  const resumen = carrito.map(i => `• ${i.nombre} x${i.cantidad} — ${i.precio}`).join("\n");
  alert("✅ ¡Pedido recibido!\n\n" + resumen + "\n\nUn asesor se pondrá en contacto contigo pronto.");
  carrito = [];
  guardarCarrito();
  renderizarCarrito();
  cerrarCarrito();
}

// Inicializar carrito al cargar
renderizarCarrito();

// =============================================
//  MODO OSCURO
// =============================================

const btnTema = document.getElementById("btn-tema");
const html    = document.documentElement;

// Guardar preferencia
const temaGuardado = localStorage.getItem("sbk-tema") || "light";
html.setAttribute("data-theme", temaGuardado);
btnTema.textContent = temaGuardado === "dark" ? "☀️" : "🌙";

function toggleTema() {
  const actual = html.getAttribute("data-theme");
  const nuevo  = actual === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", nuevo);
  localStorage.setItem("sbk-tema", nuevo);
  btnTema.textContent = nuevo === "dark" ? "☀️" : "🌙";
}

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

(function() {
  emailjs.init("698VgG1xC6619YGAS");
})();

document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();
  emailjs.sendForm("service_hh68bjd", "template_cdpdqqm", this)
    .then(() => {
      alert("✅ Mensaje enviado correctamente. ¡Pronto te contactaremos!");
      this.reset();
    }, () => {
      alert("❌ Error al enviar el mensaje. Por favor intenta de nuevo.");
    });
});