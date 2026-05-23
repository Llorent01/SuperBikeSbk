/* ═══════════════════════════════════════════════════
   SUPERBIKESKB — SCRIPT PREMIUM EDITION
   Cursor · Loader · Toast · Cards · Modal · Galería
   Comparador · Carrito · Checkout Premium · Pago
   Test Ride · Confirmación · Modo Oscuro · Reveal
═══════════════════════════════════════════════════ */

'use strict';

// ─────────────────────────────────────────────────
// ─────────────────────────────────────────────────
// ─────────────────────────────────────────────────
// LOADER
// ─────────────────────────────────────────────────
(function initLoader() {
  const msgs = [
    '// INICIANDO SISTEMA',
    '// CARGANDO CATÁLOGO',
    '// CALIBRANDO MOTORES',
    '// LISTO'
  ];
  const el = document.getElementById('loader-status');
  if (!el) return;
  let i = 0;
  const iv = setInterval(() => {
    i++;
    if (i < msgs.length) el.textContent = msgs[i];
    else clearInterval(iv);
  }, 700);
})();

// ─────────────────────────────────────────────────
// TOAST
// ─────────────────────────────────────────────────
function toast(mensaje, tipo = 'info', duracion = 3500) {
  const iconos = { ok:'✅', error:'❌', info:'🏍️', warning:'⚠️' };
  const container = document.getElementById('toast-container');
  const el = document.createElement('div');
  el.className = `toast toast-${tipo}`;
  el.innerHTML = `<span class="toast-icono">${iconos[tipo]}</span><span class="toast-msg">${mensaje}</span>`;
  container.appendChild(el);
  setTimeout(() => {
    el.classList.add('saliendo');
    el.addEventListener('animationend', () => el.remove(), { once: true });
  }, duracion);
}

// ─────────────────────────────────────────────────
// CATÁLOGO DE MOTOS
// ─────────────────────────────────────────────────
const imagenFallbackMoto = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22500%22 viewBox=%220 0 800 500%22%3E%3Crect width=%22800%22 height=%22500%22 fill=%22%23111115%22/%3E%3Cpath d=%22M165 315h95l58-72h134l86 72h96%22 fill=%22none%22 stroke=%22%23e8000d%22 stroke-width=%2214%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/%3E%3Ccircle cx=%22205%22 cy=%22335%22 r=%2254%22 fill=%22none%22 stroke=%22%23c9a84c%22 stroke-width=%2212%22/%3E%3Ccircle cx=%22595%22 cy=%22335%22 r=%2254%22 fill=%22none%22 stroke=%22%23c9a84c%22 stroke-width=%2212%22/%3E%3Ctext x=%22400%22 y=%22205%22 fill=%22%23eeeeee%22 font-family=%22Arial, sans-serif%22 font-size=%2232%22 font-weight=%22700%22 text-anchor=%22middle%22%3EIMAGEN PENDIENTE%3C/text%3E%3C/svg%3E';

const motos = [
  {
    nombre: 'Yamaha R6', marca: 'Yamaha',
    precio: '$62,400,000', precioNum: 62400000, badge: null,
    imagenes: ['img/r6/r6_1.jpg','img/r6/r6_2.jpg','img/r6/r6_3.jpg','img/r6/r6_4.jpg','img/r6/r6_5.jpg','img/r6/r6_6.jpg','img/r6/r6_7.jpg','img/r6/r6_8.jpg','img/r6/r6_9.jpg','img/r6/r6_10.jpg','img/r6/r6_11.jpg'],
    detalles: { cilindrada:'599 CC', potencia:'118.4 CV', torque:'61.7 NM', peso:'190 KG', motor:'Tetracilíndrico' }
  },
  {
    nombre: 'Kawasaki ZX-10R', marca: 'Kawasaki',
    precio: '$115,990,000', precioNum: 115990000, badge: 'Más vendida',
    imagenes: ['img/zx10r/zx10r_1.jpg','img/zx10r/zx10r_2.jpg','img/zx10r/zx10r_3.jpg','img/zx10r/zx10r_4.jpg','img/zx10r/zx10r_5.jpg','img/zx10r/zx10r_6.jpg','img/zx10r/zx10r_7.jpg','img/zx10r/zx10r_8.jpg','img/zx10r/zx10r_9.jpg','img/zx10r/zx10r_10.jpg','img/zx10r/zx10r_11.jpg'],
    detalles: { cilindrada:'998 CC', potencia:'203 CV', torque:'115 NM', peso:'207 KG', motor:'Tetracilíndrico' }
  },
  {
    nombre: 'BMW S1000RR', marca: 'BMW',
    precio: '$147,000,000', precioNum: 147000000, badge: null,
    imagenes: ['img/s1000rr/s1000rr_1.jpg','img/s1000rr/s1000rr_2.jpg','img/s1000rr/s1000rr_3.jpg','img/s1000rr/s1000rr_4.jpg','img/s1000rr/s1000rr_5.jpg','img/s1000rr/s1000rr_6.jpg','img/s1000rr/s1000rr_7.jpg','img/s1000rr/s1000rr_8.jpg','img/s1000rr/s1000rr_9.jpg','img/s1000rr/s1000rr_10.jpg','img/s1000rr/s1000rr_11.jpg','img/s1000rr/s1000rr_12.jpg','img/s1000rr/s1000rr_13.jpg','img/s1000rr/s1000rr_14.jpg'],
    detalles: { cilindrada:'999 CC', potencia:'210 CV', torque:'113 NM', peso:'197 KG', motor:'Tetracilíndrico' }
  },
  {
    nombre: 'Yamaha R1', marca: 'Yamaha',
    precio: '$100,000,000', precioNum: 100000000, badge: null,
    imagenes: ['img/r1/r1_1.jpg','img/r1/r1_2.jpg','img/r1/r1_3.jpg','img/r1/r1_4.jpg','img/r1/r1_5.jpg','img/r1/r1_6.jpg','img/r1/r1_7.jpg','img/r1/r1_8.jpg','img/r1/r1_9.jpg','img/r1/r1_10.jpg','img/r1/r1_11.jpg'],
    detalles: { cilindrada:'998 CC', potencia:'200 CV', torque:'112.4 NM', peso:'199 KG', motor:'Tetracilíndrico' }
  },
  {
    nombre: 'Ducati Panigale V4R', marca: 'Ducati',
    precio: '$180,000,000', precioNum: 180000000, badge: 'Premium',
    imagenes: ['img/v4r/v4r_1.jpg','img/v4r/v4r_2.jpg','img/v4r/v4r_3.jpg','img/v4r/v4r_4.jpg','img/v4r/v4r_5.jpg','img/v4r/v4r_6.jpg','img/v4r/v4r_7.jpg','img/v4r/v4r_8.jpg','img/v4r/v4r_9.jpg','img/v4r/v4r_10.jpg','img/v4r/v4r_11.jpg','img/v4r/v4r_12.jpg','img/v4r/v4r_13.jpg','img/v4r/v4r_14.jpg'],
    detalles: { cilindrada:'999 CC', potencia:'210 CV', torque:'114.5 NM', peso:'190 KG', motor:'Tetracilíndrico' }
  },
  {
    nombre: 'Yamaha MT-09 SP', marca: 'Yamaha',
    precio: '$80,000,000', precioNum: 80000000, badge: null,
    imagenes: ['img/09/09_1.jpg','img/09/09_2.jpg','img/09/09_3.jpg','img/09/09_4.jpg','img/09/09_5.jpg','img/09/09_6.jpg','img/09/09_7.jpg','img/09/09_8.jpg','img/09/09_9.jpg','img/09/09_10.jpg','img/09/09_11.jpg'],
    detalles: { cilindrada:'890 CC', potencia:'117.3 CV', torque:'93 NM', peso:'194 KG', motor:'Tricilíndrico' }
  },
  {
    nombre: 'Honda CBR 1000RR-R Fireblade SP', marca: 'Honda',
    precio: '$160,000,000', precioNum: 160000000, badge: null,
    imagenes: ['img/fireblade/fireblade_1.jpg','img/fireblade/fireblade_2.jpg','img/fireblade/fireblade_3.jpg','img/fireblade/fireblade_4.jpg','img/fireblade/fireblade_5.jpg','img/fireblade/fireblade_6.jpg','img/fireblade/fireblade_7.jpg','img/fireblade/fireblade_8.jpg','img/fireblade/fireblade_9.jpg','img/fireblade/fireblade_10.jpg','img/fireblade/fireblade_11.jpg'],
    detalles: { cilindrada:'1000 CC', potencia:'217 CV', torque:'113 NM', peso:'201 KG', motor:'Tetracilíndrico' }
  },
  {
    nombre: 'Yamaha MT-10', marca: 'Yamaha',
    precio: '$80,000,000', precioNum: 80000000, badge: null,
    imagenes: ['img/mt10/mt10_1.jpg','img/mt10/mt10_2.jpg','img/mt10/mt10_3.jpg','img/mt10/mt10_4.jpg','img/mt10/mt10_5.jpg','img/mt10/mt10_6.jpg','img/mt10/mt10_7.jpg','img/mt10/mt10_8.jpg','img/mt10/mt10_9.jpg','img/mt10/mt10_10.jpg','img/mt10/mt10_11.jpg'],
    detalles: { cilindrada:'998 CC', potencia:'165 CV', torque:'112 NM', peso:'212 KG', motor:'Tetracilíndrico' }
  },
  {
    nombre: 'BMW S1000R', marca: 'BMW',
    precio: '$112,000,000', precioNum: 112000000, badge: null,
    imagenes: ['img/s1000r/s1000r_1.jpg','img/s1000r/s1000r_2.jpg','img/s1000r/s1000r_3.jpg','img/s1000r/s1000r_4.jpg','img/s1000r/s1000r_5.jpg','img/s1000r/s1000r_6.jpg','img/s1000r/s1000r_7.jpg','img/s1000r/s1000r_8.jpg','img/s1000r/s1000r_9.jpg','img/s1000r/s1000r_10.jpg','img/s1000r/s1000r_11.jpg'],
    detalles: { cilindrada:'999 CC', potencia:'165 CV', torque:'114 NM', peso:'199 KG', motor:'Tetracilíndrico' }
  },
  {
    nombre: 'Kawasaki Z900', marca: 'Kawasaki',
    precio: '$65,990,000', precioNum: 65990000, badge: 'Oferta',
    imagenes: ['img/z900/z900_1.jpg','img/z900/z900_2.jpg','img/z900/z900_3.jpg','img/z900/z900_4.jpg','img/z900/z900_5.jpg','img/z900/z900_6.jpg','img/z900/z900_7.jpg','img/z900/z900_8.jpg','img/z900/z900_9.jpg','img/z900/z900_10.jpg','img/z900/z900_11.jpg'],
    detalles: { cilindrada:'948 CC', potencia:'125 CV', torque:'98.6 NM', peso:'193 KG', motor:'Tetracilíndrico' }
  },
  {
    nombre: 'Kawasaki Ninja H2', marca: 'Kawasaki',
    precio: '$170,000,000', precioNum: 170000000, badge: 'Premium',
    imagenes: ['img/h2/h2_1.jpg','img/h2/h2_2.jpg','img/h2/h2_3.jpg','img/h2/h2_4.jpg','img/h2/h2_5.jpg','img/h2/h2_6.jpg','img/h2/h2_7.jpg','img/h2/h2_8.jpg','img/h2/h2_9.jpg','img/h2/h2_10.jpg','img/h2/h2_11.jpg', 'img/h2/h2_12.jpg','img/h2/h2_13.jpg','img/h2/h2_14.jpg','img/h2/h2_15.jpg'],
    detalles: { cilindrada:'998 CC', potencia:'200 CV', torque:'113.28 NM', peso:'220 KG', motor:'Tetracilíndrico' }
  },
  {
    nombre: 'Suzuki GSX-S750', marca: 'Suzuki',
    precio: '55,000,000', precioNum: 55000000, badge: null,
    imagenes: ['img/750/750_1.jpg','img/750/750_2.jpg','img/750/750_3.jpg','img/750/750_4.jpg','img/750/750_5.jpg','img/750/750_6.jpg','img/750/750_7.jpg','img/750/750_8.jpg','img/750/750_9.jpg','img/750/750_10.jpg','img/750/750_11.jpg'],
    detalles: { cilindrada:'749 CC', potencia:'112 CV', torque:'81 NM', peso:'213 KG', motor:'Tetracilíndrico' }
  },
  {
    nombre: 'Suzuki GSX-R1000', marca: 'Suzuki',
    precio: '90,000,000', precioNum: 90000000, badge: null,
    imagenes: ['img/gsx-r 1000r/gsx-r_1.jpg', 'img/gsx-r 1000r/gsx-r_2.jpg', 'img/gsx-r 1000r/gsx-r_3.jpg', 'img/gsx-r 1000r/gsx-r_4.jpg', 'img/gsx-r 1000r/gsx-r_5.jpg', 'img/gsx-r 1000r/gsx-r_6.jpg', 'img/gsx-r 1000r/gsx-r_7.jpg', 'img/gsx-r 1000r/gsx-r_8.jpg', 'img/gsx-r 1000r/gsx-r_9.jpg', 'img/gsx-r 1000r/gsx-r_10.jpg', 'img/gsx-r 1000r/gsx-r_11.jpg'],
    detalles: { cilindrada:'', potencia:'', torque:'', peso:'', motor:'' }
  },
  {
    nombre: 'Ktm Duke 990', marca: 'Ktm',
    precio: '60,000,000', precioNum: 60000000, badge: null,
    imagenes: ['img/990/990_1.jpg', 'img/990/990_2.jpg', 'img/990/990_3.jpg', 'img/990/990_4.jpg', 'img/990/990_5.jpg', 'img/990/990_6.jpg', 'img/990/990_7.jpg', 'img/990/990_8.jpg', 'img/990/990_9.jpg', 'img/990/990_10.jpg', 'img/990/990_11.jpg'],
    detalles: { cilindrada:'', potencia:'', torque:'', peso:'', motor:'' }
  }
];

// ─────────────────────────────────────────────────
// ESTADO GLOBAL
// ─────────────────────────────────────────────────
let marcaActiva  = 'todos';
let precioMax    = 200000000;
let textoBuscar  = '';
let ordenActual  = 'default';
let motoActual   = null;
let galIndice    = 0;
let comparador   = [];
let carrito      = JSON.parse(localStorage.getItem('sbk-carrito') || '[]');
let checkoutData = {};

// ─────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const fmt = n => '$' + n.toLocaleString('es-CO');
const primeraImagen = moto => (moto.imagenes && moto.imagenes[0]) || imagenFallbackMoto;
const galeriaImagenes = moto => (moto.imagenes && moto.imagenes.length) ? moto.imagenes : [''];
const genOrden = () => 'SBK-' + Date.now().toString(36).toUpperCase();

function ripple(btn) {
  const r = document.createElement('span');
  r.style.cssText = `position:absolute;border-radius:50%;background:rgba(255,255,255,.25);
    width:10px;height:10px;top:50%;left:50%;transform:translate(-50%,-50%) scale(0);
    animation:rippleAnim .5s ease forwards;pointer-events:none;`;
  if (getComputedStyle(btn).position === 'static') btn.style.position = 'relative';
  btn.style.overflow = 'hidden';
  btn.appendChild(r);
  setTimeout(() => r.remove(), 600);
}
document.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') ripple(e.target);
});
if (!document.getElementById('rippleStyle')) {
  const s = document.createElement('style');
  s.id = 'rippleStyle';
  s.textContent = '@keyframes rippleAnim{to{transform:translate(-50%,-50%) scale(20);opacity:0}}';
  document.head.appendChild(s);
}

// ─────────────────────────────────────────────────
// RENDER CARDS
// ─────────────────────────────────────────────────
function aplicarFiltros() {
  let lista = motos.filter(m => {
    const marca  = marcaActiva === 'todos' || m.marca === marcaActiva;
    const precio = m.precioNum <= precioMax;
    const texto  = m.nombre.toLowerCase().includes(textoBuscar);
    return marca && precio && texto;
  });
  if (ordenActual === 'asc')  lista.sort((a,b) => a.precioNum - b.precioNum);
  if (ordenActual === 'desc') lista.sort((a,b) => b.precioNum - a.precioNum);
  if (ordenActual === 'az')   lista.sort((a,b) => a.nombre.localeCompare(b.nombre));
  mostrarMotos(lista);
}

function mostrarMotos(lista) {
  const contenedor = $('motos');
  contenedor.innerHTML = '';
  if (!lista.length) {
    contenedor.innerHTML = "<p style='color:var(--texto-soft);font-size:15px;grid-column:1/-1;padding:40px 0;font-family:var(--mono);letter-spacing:2px;'>// SIN RESULTADOS</p>";
    return;
  }
  lista.forEach(moto => {
    const badge = moto.badge ? `<div class="card-badge">${moto.badge}</div>` : '';
    const imagenCard = primeraImagen(moto);
    contenedor.innerHTML += `
      <div class="card">
        ${badge}
        <div class="card-img-wrap">
          <img src="${imagenCard}" alt="${moto.nombre}" loading="lazy">
        </div>
        <div class="card-body">
          <div class="card-marca-tag">${moto.marca.toUpperCase()}</div>
          <h3>${moto.nombre}</h3>
          <div class="card-specs-mini">
            <div class="card-spec"><span class="card-spec-label">CILINDRADA</span><span class="card-spec-val">${moto.detalles.cilindrada}</span></div>
            <div class="card-spec"><span class="card-spec-label">POTENCIA</span><span class="card-spec-val">${moto.detalles.potencia}</span></div>
            <div class="card-spec"><span class="card-spec-label">TORQUE</span><span class="card-spec-val">${moto.detalles.torque}</span></div>
          </div>
          <p class="precio">${moto.precio}</p>
          <div class="card-disponible"><span class="dot-avail"></span>DISPONIBLE</div>
          <div class="card-btns">
            <button onclick='verDetalles(${JSON.stringify(moto)})'>VER DETALLES</button>
            <button class="btn-secundario" onclick='agregarAlCarrito(${JSON.stringify(moto)})'>🛒 AGREGAR</button>
          </div>
        </div>
      </div>`;
  });
}

function renderizarFiltrosMarca() {
  const contenedor = $('filtros-marcas');
  const marcas = [...new Set(motos.map(m => m.marca).filter(Boolean))];
  contenedor.innerHTML = '<button class="filtro-btn activo" data-marca="todos">TODAS</button>';
  marcas.forEach(marca => {
    contenedor.innerHTML += `<button class="filtro-btn" data-marca="${marca}">${marca.toUpperCase()}</button>`;
  });
}

renderizarFiltrosMarca();
aplicarFiltros();

// ─────────────────────────────────────────────────
// FILTROS
// ─────────────────────────────────────────────────
$('buscar').addEventListener('keyup', e => { textoBuscar = e.target.value.toLowerCase(); aplicarFiltros(); });

$('filtros-marcas').addEventListener('click', e => {
  if (!e.target.classList.contains('filtro-btn')) return;
  document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('activo'));
  e.target.classList.add('activo');
  marcaActiva = e.target.dataset.marca;
  aplicarFiltros();
});

const slider = $('slider-precio');
slider.addEventListener('input', () => {
  precioMax = parseInt(slider.value);
  $('precio-label').textContent = fmt(precioMax);
  aplicarFiltros();
});

$('ordenar').addEventListener('change', e => { ordenActual = e.target.value; aplicarFiltros(); });

// ─────────────────────────────────────────────────
// MODAL DETALLES + GALERÍA
// ─────────────────────────────────────────────────
function verDetalles(moto) {
  motoActual = moto; galIndice = 0;
  actualizarGaleria();
  $('modal-nombre').innerText = moto.nombre;
  $('modal-precio').innerText  = moto.precio;
  $('modal-marca-badge').innerText = moto.marca ? moto.marca.toUpperCase() + ' // HIGH PERFORMANCE' : '';

  const labels = { cilindrada:'Cilindrada', potencia:'Potencia', torque:'Torque', peso:'Peso', motor:'Motor' };
  let html = '';
  for (const [key, label] of Object.entries(labels)) {
    const val  = moto.detalles[key] || '—';
    const pend = val === 'Por confirmar' || val === '—';
    html += `<div class="spec-item"><div class="spec-label">${label}</div><div class="spec-value ${pend?'pendiente':''}">${val}</div></div>`;
  }
  $('modal-specs').innerHTML = html;

  const enComp  = comparador.some(c => c.nombre === moto.nombre);
  const btnComp = document.querySelector('.btn-comparar-modal');
  btnComp.textContent = enComp ? '✔ EN COMPARADOR' : '⚖️ COMPARAR';
  btnComp.classList.toggle('activo', enComp);

  $('modal').style.display = 'flex';
}

function actualizarGaleria() {
  const imgs = galeriaImagenes(motoActual);
  const img  = $('modal-img');
  const siguienteSrc = imgs[galIndice] || imagenFallbackMoto;
  const aplicarImagen = () => {
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = siguienteSrc;
      img.style.opacity = '1';
    }, 80);
  };

  if (img.src.endsWith(siguienteSrc)) {
    img.style.opacity = '1';
  } else {
    const precarga = new Image();
    precarga.onload = aplicarImagen;
    precarga.onerror = () => {
      img.src = imagenFallbackMoto;
      img.style.opacity = '1';
    };
    precarga.src = siguienteSrc;
  }
  let dots = '';
  imgs.forEach((_, i) => { dots += `<div class="dot ${i===galIndice?'activo':''}" onclick="irAFoto(${i})"></div>`; });
  $('galeria-dots').innerHTML = dots;
}

function galeriaNav(dir) {
  const imgs = galeriaImagenes(motoActual);
  galIndice = (galIndice + dir + imgs.length) % imgs.length;
  actualizarGaleria();
}
function irAFoto(i) { galIndice = i; actualizarGaleria(); }
function cerrarModal() { $('modal').style.display = 'none'; }
$('modal').addEventListener('click', function(e) { if (e.target === this) cerrarModal(); });

// Teclado para galería
document.addEventListener('keydown', e => {
  if ($('modal').style.display !== 'flex') return;
  if (e.key === 'ArrowLeft')  galeriaNav(-1);
  if (e.key === 'ArrowRight') galeriaNav(1);
  if (e.key === 'Escape')     cerrarModal();
});

// ─────────────────────────────────────────────────
// TEST RIDE
// ─────────────────────────────────────────────────
let testruides = JSON.parse(localStorage.getItem('sbk-testruides') || '[]');

function actualizarContadorTR() {
  const el = $('tr-count');
  if (el) el.textContent = testruides.length;
}
actualizarContadorTR();

function abrirTestRide(moto) {
  cerrarModal();
  const m = moto || motoActual;
  if (m) $('tr_moto_input').value = m.nombre;
  // Fecha mínima = mañana
  const manana = new Date(); manana.setDate(manana.getDate() + 1);
  const min = manana.toISOString().split('T')[0];
  const fechaInput = document.querySelector('#form-testride [name="tr_fecha"]');
  if (fechaInput) fechaInput.min = min;
  $('modal-testride').style.display = 'flex';
}
function cerrarTestRide() { $('modal-testride').style.display = 'none'; }
$('modal-testride').addEventListener('click', function(e) { if (e.target === this) cerrarTestRide(); });

$('form-testride').addEventListener('submit', function(e) {
  e.preventDefault();
  const fd = new FormData(this);
  const registro = {
    id:        genOrden(),
    nombre:    fd.get('tr_nombre'),
    documento: fd.get('tr_documento'),
    telefono:  fd.get('tr_telefono'),
    email:     fd.get('tr_email'),
    moto:      fd.get('tr_moto'),
    fecha:     fd.get('tr_fecha'),
    hora:      fd.get('tr_hora'),
    creado:    new Date().toLocaleString('es-CO')
  };
  testruides.push(registro);
  localStorage.setItem('sbk-testruides', JSON.stringify(testruides));
  actualizarContadorTR();
  cerrarTestRide();
  this.reset();
  toast(`Test Ride agendado — ${registro.moto} el ${registro.fecha} a las ${registro.hora}`, 'ok', 5000);
});

function verTestruides() {
  if (!testruides.length) { toast('No tienes pruebas de manejo agendadas', 'info'); return; }
  let msg = testruides.map((t,i) => `${i+1}. ${t.moto} · ${t.fecha} ${t.hora}`).join('\n');
  toast(`TUS TEST RIDES:\n${msg}`, 'info', 6000);
}

// ─────────────────────────────────────────────────
// COMPARADOR
// ─────────────────────────────────────────────────
function toggleComparador(moto) {
  const idx = comparador.findIndex(c => c.nombre === moto.nombre);
  if (idx >= 0) {
    comparador.splice(idx, 1);
    toast(`${moto.nombre} eliminada del comparador`, 'info');
  } else {
    if (comparador.length >= 2) { toast('Solo puedes comparar 2 motos. Elimina una primero.', 'warning'); return; }
    comparador.push(moto);
    toast(`${moto.nombre} agregada al comparador ⚖️`, 'info');
  }
  renderizarComparadorBarra();
  if (motoActual && motoActual.nombre === moto.nombre) {
    const enComp  = comparador.some(c => c.nombre === moto.nombre);
    const btnComp = document.querySelector('.btn-comparar-modal');
    btnComp.textContent = enComp ? '✔ EN COMPARADOR' : '⚖️ COMPARAR';
    btnComp.classList.toggle('activo', enComp);
  }
}

function renderizarComparadorBarra() {
  const barra  = $('comparador-barra');
  const btnVer = $('btn-ver-comp');
  barra.classList.toggle('visible', comparador.length > 0);
  btnVer.disabled = comparador.length < 2;
  for (let i = 0; i < 2; i++) {
    const slot = $(`comp-slot-${i}`);
    if (comparador[i]) {
      slot.classList.add('lleno');
      slot.innerHTML = `<div class="comp-slot-content"><img src="${primeraImagen(comparador[i])}" alt="${comparador[i].nombre}"><span>${comparador[i].nombre}</span></div>`;
    } else {
      slot.classList.remove('lleno');
      slot.innerHTML = `<span class="comp-empty">+ MOTO ${i+1}</span>`;
    }
  }
}

function limpiarComparador() { comparador = []; renderizarComparadorBarra(); toast('Comparador limpiado', 'info'); }

function abrirComparadorModal() {
  if (comparador.length < 2) return;
  const [a, b] = comparador;
  const extraerNum = str => { if (!str) return NaN; const m = str.match(/[\d.]+/); return m ? parseFloat(m[0]) : NaN; };
  const campos = [
    { label:'Cilindrada', key:'cilindrada', criterio:'mayor' },
    { label:'Potencia',   key:'potencia',   criterio:'mayor' },
    { label:'Torque',     key:'torque',     criterio:'mayor' },
    { label:'Peso',       key:'peso',       criterio:'menor' },
    { label:'Motor',      key:'motor',      criterio:null    }
  ];
  const resaltar = (vA, vB, cr) => {
    const nA = extraerNum(vA), nB = extraerNum(vB);
    if (!cr || isNaN(nA) || isNaN(nB) || nA===nB) return ['',''];
    return cr==='mayor' ? (nA>nB?['mejor','']:['','mejor']) : (nA<nB?['mejor','']:['','mejor']);
  };
  const [clPA, clPB] = resaltar(String(a.precioNum), String(b.precioNum), 'menor');
  let html = `<table class="tabla-comp"><thead><tr><th>Especificación</th><th>${a.nombre}</th><th>${b.nombre}</th></tr></thead><tbody>
    <tr><td><b>Foto</b></td><td><img src="${primeraImagen(a)}" alt="${a.nombre}"></td><td><img src="${primeraImagen(b)}" alt="${b.nombre}"></td></tr>
    <tr><td><b>Precio</b></td><td class="col-precio ${clPA}">${a.precio}</td><td class="col-precio ${clPB}">${b.precio}</td></tr>`;
  campos.forEach(c => {
    const vA = a.detalles[c.key]||'—', vB = b.detalles[c.key]||'—';
    const [clA, clB] = resaltar(vA, vB, c.criterio);
    html += `<tr><td><b>${c.label}</b></td><td class="${clA}">${vA}</td><td class="${clB}">${vB}</td></tr>`;
  });
  html += `</tbody></table>`;
  $('tabla-comparador').innerHTML = html;
  $('modal-comparador').style.display = 'flex';
}

function cerrarComparadorModal() { $('modal-comparador').style.display = 'none'; }
$('modal-comparador').addEventListener('click', function(e) { if (e.target === this) cerrarComparadorModal(); });

// ─────────────────────────────────────────────────
// CARRITO
// ─────────────────────────────────────────────────
function guardarCarrito() { localStorage.setItem('sbk-carrito', JSON.stringify(carrito)); }

function agregarAlCarrito(moto) {
  const existe = carrito.find(i => i.nombre === moto.nombre);
  if (existe) { existe.cantidad++; toast(`${moto.nombre} — cantidad actualizada`, 'info'); }
  else         { carrito.push({...moto, cantidad:1}); toast(`${moto.nombre} agregada al carrito 🛒`, 'ok'); }
  guardarCarrito(); renderizarCarrito(); abrirCarrito();
  const c = $('carrito-count');
  c.style.transform = 'scale(1.7)';
  setTimeout(() => c.style.transform = 'scale(1)', 280);
}

function cambiarCantidad(nombre, delta) {
  const item = carrito.find(i => i.nombre === nombre);
  if (!item) return;
  item.cantidad += delta;
  if (item.cantidad <= 0) carrito = carrito.filter(i => i.nombre !== nombre);
  guardarCarrito(); renderizarCarrito();
}

function eliminarDelCarrito(nombre) {
  carrito = carrito.filter(i => i.nombre !== nombre);
  guardarCarrito(); renderizarCarrito();
  toast('Moto eliminada del carrito', 'info');
}

function renderizarCarrito() {
  const container = $('carrito-items');
  const countEl   = $('carrito-count');
  const totalEl   = $('carrito-total-valor');
  countEl.textContent = carrito.reduce((s,i) => s + i.cantidad, 0);
  if (!carrito.length) {
    container.innerHTML = `<div class="carrito-vacio"><span>🏍️</span><p style="font-family:var(--mono);letter-spacing:2px;">CARRITO VACÍO</p></div>`;
    totalEl.textContent = '$0'; return;
  }
  let html = '', total = 0;
  carrito.forEach(item => {
    total += item.precioNum * item.cantidad;
    html  += `<div class="carrito-item">
      <img src="${primeraImagen(item)}" alt="${item.nombre}">
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
    </div>`;
  });
  container.innerHTML = html;
  totalEl.textContent = fmt(total);
}

function abrirCarrito() {
  $('carrito-sidebar').classList.add('abierto');
  $('cart-overlay').style.display = 'block';
}
function cerrarCarrito() {
  $('carrito-sidebar').classList.remove('abierto');
  $('cart-overlay').style.display = 'none';
}
renderizarCarrito();

// ─────────────────────────────────────────────────
// INICIAR COMPRA (desde modal detalles)
// ─────────────────────────────────────────────────
function iniciarCompra(moto) {
  agregarAlCarrito(moto);
  cerrarModal();
}

// ─────────────────────────────────────────────────
// CHECKOUT PREMIUM — 3 PASOS
// ─────────────────────────────────────────────────
function irCheckoutStep(n) {
  // Validar step 2: debe tener método seleccionado
  if (n === 3) {
    const metodo = document.querySelector('input[name="metodo_pago"]:checked');
    if (!metodo) { toast('Selecciona un método de pago', 'warning'); return; }
    checkoutData.metodoPago = metodo.value;
    // Si es tarjeta, validar campos
    if (metodo.value === 'tarjeta-debito' || metodo.value === 'tarjeta-credito') {
      const num = $('card-number')?.value.replace(/\s/g,'');
      const exp = $('card-exp')?.value;
      const cvv = $('card-cvv')?.value;
      if (!num || num.length < 16) { toast('Número de tarjeta inválido', 'error'); return; }
      if (!exp || exp.length < 5)  { toast('Fecha de vencimiento inválida', 'error'); return; }
      if (!cvv || cvv.length < 3)  { toast('CVV inválido', 'error'); return; }
      checkoutData.tarjeta = { num: '****' + num.slice(-4), exp, titular: $('card-holder')?.value };
    }
    construirResumenFinal();
  }
  document.querySelectorAll('.checkout-step').forEach(s => s.classList.remove('active'));
  $(`checkout-step-${n}`)?.classList.add('active');
}

function construirResumenFinal() {
  const total = carrito.reduce((s,i) => s + i.precioNum * i.cantidad, 0);
  const metodoLabel = {
    'tarjeta-debito':'Tarjeta Débito',
    'tarjeta-credito':'Tarjeta Crédito',
    'transferencia':'Transferencia Bancaria',
    'contraentrega':'Pago Contra Entrega',
    'financiacion':'Financiación'
  }[checkoutData.metodoPago] || checkoutData.metodoPago;

  let items = carrito.map(i => `<div class="resumen-row"><span>${i.nombre} x${i.cantidad}</span><span>${i.precio}</span></div>`).join('');
  let tarjetaInfo = '';
  if (checkoutData.tarjeta) {
    tarjetaInfo = `<div class="resumen-row"><span>Tarjeta</span><span>${checkoutData.tarjeta.num}</span></div>`;
  }

  $('resumen-final').innerHTML = `
    <div class="resumen-row"><span>NOMBRE</span><span>${checkoutData.nombre || '—'}</span></div>
    <div class="resumen-row"><span>CIUDAD</span><span>${checkoutData.ciudad || '—'}</span></div>
    ${items}
    ${tarjetaInfo}
    <div class="resumen-row"><span>MÉTODO DE PAGO</span><span>${metodoLabel}</span></div>
    <div class="resumen-row"><span>TOTAL</span><strong>${fmt(total)}</strong></div>
  `;
}

function abrirCheckout() {
  if (!carrito.length) { toast('Tu carrito está vacío. ¡Agrega una moto!', 'warning'); return; }

  // Poblar resumen en step 1
  let itemsHTML = '', total = 0;
  carrito.forEach(i => {
    total += i.precioNum * i.cantidad;
    itemsHTML += `<li><span>${i.nombre} x${i.cantidad}</span><span>${i.precio}</span></li>`;
  });
  $('checkout-resumen').innerHTML = `
    <strong>// RESUMEN DEL PEDIDO</strong>
    <ul>${itemsHTML}</ul>
    <div class="resumen-total"><span>TOTAL</span><span>${fmt(total)}</span></div>`;

  // Resetear a step 1
  document.querySelectorAll('.checkout-step').forEach(s => s.classList.remove('active'));
  $('checkout-step-1').classList.add('active');

  cerrarCarrito();
  $('modal-checkout').style.display = 'flex';
}

function cerrarCheckout() { $('modal-checkout').style.display = 'none'; }
$('modal-checkout').addEventListener('click', function(e) { if (e.target === this) cerrarCheckout(); });

$('form-checkout-datos').addEventListener('submit', function(e) {
  e.preventDefault();
  const fd = new FormData(this);
  checkoutData.nombre    = fd.get('co_nombre');
  checkoutData.telefono  = fd.get('co_telefono');
  checkoutData.email     = fd.get('co_email');
  checkoutData.ciudad    = fd.get('co_ciudad');
  checkoutData.direccion = fd.get('co_direccion');
  checkoutData.nota      = fd.get('co_nota');
  irCheckoutStep(2);
});

// ─────────────────────────────────────────────────
// MÉTODOS DE PAGO — INTERACTIVIDAD
// ─────────────────────────────────────────────────
document.querySelectorAll('.payment-option').forEach(opt => {
  opt.addEventListener('click', () => {
    const method = opt.dataset.method;
    $('form-tarjeta')?.classList.add('hidden');
    $('form-financiacion')?.classList.add('hidden');
    if (method === 'tarjeta-debito' || method === 'tarjeta-credito') {
      $('form-tarjeta')?.classList.remove('hidden');
    } else if (method === 'financiacion') {
      $('form-financiacion')?.classList.remove('hidden');
      actualizarSimulador();
    }
  });
});

// Formateo automático tarjeta
const cardNumber = $('card-number');
const cardHolder = $('card-holder');
const cardExp    = $('card-exp');
const cardCvv    = $('card-cvv');

if (cardNumber) {
  cardNumber.addEventListener('input', function() {
    let v = this.value.replace(/\D/g,'').slice(0,16);
    this.value = v.replace(/(.{4})/g,'$1 ').trim();
    const disp = $('card-number-display');
    if (disp) disp.textContent = (this.value || '•••• •••• •••• ••••').padEnd(19,'•');
  });
}
if (cardHolder) {
  cardHolder.addEventListener('input', function() {
    const disp = $('card-holder-display');
    if (disp) disp.textContent = this.value.toUpperCase() || 'NOMBRE TITULAR';
  });
}
if (cardExp) {
  cardExp.addEventListener('input', function() {
    let v = this.value.replace(/\D/g,'').slice(0,4);
    if (v.length > 2) v = v.slice(0,2) + '/' + v.slice(2);
    this.value = v;
    const disp = $('card-exp-display');
    if (disp) disp.textContent = this.value || 'MM/AA';
  });
}
if (cardCvv) {
  cardCvv.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g,'').slice(0,3);
  });
}

// ─────────────────────────────────────────────────
// SIMULADOR DE FINANCIACIÓN
// ─────────────────────────────────────────────────
function actualizarSimulador() {
  const total   = carrito.reduce((s,i) => s + i.precioNum * i.cantidad, 0);
  const pctEl   = $('sim-inicial-pct');
  const cuotaEl = $('sim-cuotas');
  if (!pctEl || !cuotaEl) return;

  const pct       = parseInt(pctEl.value);
  const cuotas    = parseInt(cuotaEl.value);
  const inicial   = Math.round(total * pct / 100);
  const restante  = total - inicial;
  const tasaMens  = 0.018; // 1.8% mensual
  const cuotaMens = restante > 0
    ? Math.round(restante * tasaMens * Math.pow(1+tasaMens, cuotas) / (Math.pow(1+tasaMens, cuotas)-1))
    : 0;
  const totalInt  = inicial + cuotaMens * cuotas;

  $('sim-total').textContent      = fmt(total);
  $('sim-inicial-val').textContent = `${pct}% — ${fmt(inicial)}`;
  $('sim-cuota').textContent      = fmt(cuotaMens);
  $('sim-total-int').textContent  = fmt(totalInt);
}

$('sim-inicial-pct')?.addEventListener('input', actualizarSimulador);
$('sim-cuotas')?.addEventListener('change', actualizarSimulador);

// ─────────────────────────────────────────────────
// PROCESAR PEDIDO — CONFIRMACIÓN
// ─────────────────────────────────────────────────
function procesarPedido() {
  const total    = carrito.reduce((s,i) => s + i.precioNum * i.cantidad, 0);
  const orden    = genOrden();
  const fecha    = new Date().toLocaleString('es-CO');
  const metodoLabel = {
    'tarjeta-debito':'Tarjeta Débito',
    'tarjeta-credito':'Tarjeta Crédito',
    'transferencia':'Transferencia Bancaria',
    'contraentrega':'Pago Contra Entrega',
    'financiacion':'Financiación'
  }[checkoutData.metodoPago] || 'No especificado';

  // Guardar en localStorage
  const historial = JSON.parse(localStorage.getItem('sbk-historial') || '[]');
  historial.push({
    orden, fecha, total,
    items: carrito.map(i=>({nombre:i.nombre, cantidad:i.cantidad, precio:i.precio})),
    metodo: metodoLabel,
    cliente: { nombre:checkoutData.nombre, email:checkoutData.email }
  });
  localStorage.setItem('sbk-historial', JSON.stringify(historial));

  cerrarCheckout();

  // Mostrar confirmación
  $('orden-badge').textContent = `ORDEN # ${orden}`;
  $('confirmacion-detalles').innerHTML = `
    <div><span>Orden</span><span>${orden}</span></div>
    <div><span>Fecha</span><span>${fecha}</span></div>
    <div><span>Total</span><span>${fmt(total)}</span></div>
    <div><span>Método</span><span>${metodoLabel}</span></div>
    <div><span>Cliente</span><span>${checkoutData.nombre || '—'}</span></div>
  `;

  // Confetti
  const wrap   = $('confetti-wrap');
  wrap.innerHTML = '';
  const colores = ['#e8000d','#ff6b6b','#ffffff','#ffd700','#ff9900'];
  for (let i = 0; i < 50; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    p.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*40}%;background:${colores[Math.floor(Math.random()*colores.length)]};width:${6+Math.random()*8}px;height:${6+Math.random()*8}px;border-radius:${Math.random()>.5?'50%':'2px'};animation-delay:${Math.random()}s;animation-duration:${1.5+Math.random()}s;`;
    wrap.appendChild(p);
  }

  $('modal-confirmacion').style.display = 'flex';

  // Limpiar carrito
  carrito = [];
  guardarCarrito();
  renderizarCarrito();
  checkoutData = {};
}

function cerrarConfirmacion() { $('modal-confirmacion').style.display = 'none'; }

// ─────────────────────────────────────────────────
// MODO OSCURO
// ─────────────────────────────────────────────────
const btnTema      = $('btn-tema');
const htmlEl       = document.documentElement;
const temaGuardado = localStorage.getItem('sbk-tema') || 'dark';
htmlEl.setAttribute('data-theme', temaGuardado);
btnTema.textContent = temaGuardado === 'dark' ? '☀️' : '🌙';

function toggleTema() {
  const actual = htmlEl.getAttribute('data-theme');
  const nuevo  = actual === 'dark' ? 'light' : 'dark';
  htmlEl.setAttribute('data-theme', nuevo);
  localStorage.setItem('sbk-tema', nuevo);
  btnTema.textContent = nuevo === 'dark' ? '☀️' : '🌙';
}

// ─────────────────────────────────────────────────
// SCROLL REVEAL
// ─────────────────────────────────────────────────
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ─────────────────────────────────────────────────
// CONTADORES ANIMADOS (HERO STATS)
// ─────────────────────────────────────────────────
function animarContadores() {
  document.querySelectorAll('.stat-num[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target);
    const dur = 1800;
    const start = performance.now();
    const step = ts => {
      const progress = Math.min((ts - start) / dur, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(ease * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
  const statsObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) { animarContadores(); statsObs.disconnect(); }
  }, { threshold: .3 });
  statsObs.observe(heroStats);
}

// ─────────────────────────────────────────────────
// HEADER SCROLL EFFECT
// ─────────────────────────────────────────────────
const mainHeader = $('main-header');
window.addEventListener('scroll', () => {
  if (mainHeader) {
    if (window.scrollY > 60) mainHeader.style.boxShadow = '0 4px 30px rgba(0,0,0,.5)';
    else mainHeader.style.boxShadow = 'none';
  }
  $('btn-top').classList.toggle('visible', window.scrollY > 300);
});

// ─────────────────────────────────────────────────
// EMAILJS
// ─────────────────────────────────────────────────
(function() { try { emailjs.init('698VgG1xC6619YGAS'); } catch(e) {} })();

$('formulario').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('button[type="submit"]');
  const orig = btn.textContent;
  btn.textContent = 'ENVIANDO...'; btn.disabled = true;
  emailjs.sendForm('service_hh68bjd', 'template_cdpdqqm', this)
    .then(() => {
      toast('Mensaje enviado correctamente. ¡Pronto te contactaremos!', 'ok');
      this.reset();
    }, () => {
      toast('Error al enviar el mensaje. Intenta de nuevo.', 'error');
    })
    .finally(() => { btn.textContent = orig; btn.disabled = false; });
});
