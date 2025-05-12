
//let baseDeDatos = [];

let carrito = [];
const DOMcarrito = document.getElementById('carrito');
const DOMtotal = document.getElementById('total');
const DOMbotonVaciar = document.getElementById('boton-vaciar');
const DOMinputBuscador = document.getElementById('buscar-pal');
const DOMbotonPrecio = document.getElementById('boton-Precio');
const DOMmostrarCarrito = document.getElementById('mostrar-carrito');



const arayproductos = [{
    nombre: 'Banco dos cuerpos "Capataz"',
    img: "./assets/img/Banco dos cuerpos “Capataz”.jpg",
    alt: "banco",
    descripcion: "Asiento 1.00 x 0.40 | Respaldo 0.50 | Altura Final 0.90",
    moneda: 0,
    id: 1,
},

{
    nombre: 'Banco dos cuerpos sin apoyabrazos “Capataz”',
    img: "./assets/img/Banco dos cuerpos sin apoyabrazos “Capataz”.jpg",
    alt: "banco",
    descripcion: "Asiento 1.00 x 0.40 | Respaldo 0.50 | Altura Final 0.90",
    moneda: 0,
    id: 2,
},

{
    nombre: 'Banco dos cuerpos “Paisano”',
    img: "./assets/img/Banco dos cuerpos “Paisano”.jpg",
    alt: "banco",
    descripcion: "1.00 x 0.41 x 0.48 (Altura asiento) | 0.87 (Altura Final respaldo)",
    moneda: 0,
    id: 3,
},

{
    nombre: 'Banco un cuerpo “Patrón”',
    img: "./assets/img/Banco un cuerpo “Patrón”.jpg",
    alt: "banco",
    descripcion: "Largo 0.60 | Ancho 0.47 | Altura 0.90",
    moneda: 0,
    id: 4,
},

{
    nombre: 'Mesa Ratona “Palenque”',
    img: "./assets/img/Mesa Ratona “Palenque”.jpg",
    alt: "mesa",
    descripcion: "Largo 1.10 | Ancho 0.50 | Altura 0.45",
    moneda: 0,
    id: 5,
},

{
    nombre: 'Juego “Gallinales”',
    img: "./assets/img/Juego “Gallinales”.jpg",
    alt: "mesa",
    descripcion: "Mesa: Largo 1.40 | Ancho 0.90 | Alto 0.68",
    moneda: 0,
    id: 6,
},


{
    nombre: 'Mesa “Criolla”',
    img: "./assets/img/Mesa “Criolla”.jpg",
    alt: "mesa",
    descripcion: "Se realiza a medida",
    moneda: 0,
    id: 7,
},

{
    nombre: 'Recibidor “Puestero”',
    img: "./assets/img/Recibidor “Puestero”.jpg",
    alt: "mesa",
    descripcion: "Largo 1.00 | Ancho 0.40 | Alto 0.75",
    moneda: 0,
    id: 8,
},

{
    nombre: 'Mesa de arrime “Montura”',
    img: "./assets/img/Mesa de arrime “Montura”.jpg",
    alt: "mesa",
    descripcion: "Largo 0.36 | Ancho 0.36 | Alto 0.74",
    moneda: 0,
    id: 9,
},

{
    nombre: 'Pie de cama “Pilchas”',
    img: "./assets/img/Pie de cama “Pilchas”.jpg",
    alt: "mesa",
    descripcion: "Largo 1.10 | Ancho 0.37 | Alto 0.45",
    moneda: 0,
    id: 10,
},

{
    nombre: 'Silla “Indio”',
    img: "./assets/img/Silla “Indio”.jpg",
    alt: "silla",
    descripcion: "Largo 0.30 | Ancho 0.65 | Alto 0.90",
    moneda: 0,
    id: 11,
},

{
    nombre: 'Silla “Indio XL”',
    img: "./assets/img/Silla “Indio XL”.jpg",
    alt: "silla",
    descripcion: "Largo 0.38 | Ancho 0.80 | Alto 1.05",
    moneda: 0,
    id: 12,
},

{
    nombre: 'Silla matera “Lion”',
    img: "./assets/img/Silla matera “Lion”.jpg",
    alt: "silla",
    descripcion: "Largo 0.35 | Ancho 0.35 | Altura asiento 0.30 | Altura respaldo 0.60",
    moneda: 0,
    id: 13,
},

{
    nombre: 'Sillas “Tigre”',
    img: "./assets/img/Sillas “Tigre”.jpg",
    alt: "silla",
    descripcion: "Largo 0.35 | Ancho 0.35 | Altura asiento 0.30 | Altura respaldo 0.60",
    moneda: 0,
    id: 14,
},

{
    nombre: 'Sillas “Tigre XL”',
    img: "./assets/img/Sillas “Tigre XL”.jpg",
    alt: "silla",
    descripcion: "Largo 0.35 | Ancho 0.35 | Altura asiento 0.45 | Altura respaldo 0.65",
    moneda: 0,
    id: 15,
},

{
    nombre: 'Banco matero “Pionada”',
    img: "./assets/img/Banco matero “Pionada”.jpg",
    alt: "banco",
    descripcion: "Largo 0.40 | Ancho 0.40 | Altura 0.45",
    moneda: 0,
    id: 16,
},

{
    nombre: 'Banco “Gaucho”',
    img: "./assets/img/Banco “Gaucho”.jpg",
    alt: "banco",
    descripcion: "Largo 0.35 | Ancho 0.35 | Altura 0.45",
    moneda: 0,
    id: 17,
},

{
    nombre: 'Banco “Forastero”',
    img: "./assets/img/Banco “Forastero”.jpg",
    alt: "banco",
    descripcion: "Largo 0.40 | Ancho 0.40 | Altura 0.45",
    moneda: 0,
    id: 18,
},

{
    nombre: 'Cuerito Negro',
    img: "./assets/img/Cuerito Negro.jpg",
    alt: "cuero",
    descripcion: "",
    moneda: 0,
    id: 19,
},

{
    nombre: 'Cuerito Blanco',
    img: "./assets/img/Cuerito Blanco.jpg",
    alt: "cuero",
    descripcion: "",
    moneda: 0,
    id: 20,
},

{
    nombre: 'Juego “Troya”',
    img: "./assets/img/Juego “Troya”.jpg",
    alt: "cuero",
    descripcion: "Barra: Largo 1.10 | Ancho 0.50| Altura 1.00 \nBanquetas (X2): Largo 0.35 | Ancho 0.35 | Altura 0.75",
    moneda: 0,
    id: 21,
},

{
    nombre: 'Banqueta “Troya”',
    img: "./assets/img/Banqueta “Troya”.jpg",
    alt: "banco",
    descripcion: "Largo 0.35 | Ancho 0.35 | Altura 0.75",
    moneda: 0,
    id: 22,
},

{
    nombre: 'Biblioteca “Bellaquea”',
    img: "./assets/img/Banqueta “Troya”.jpg",
    alt: "biblioteca",
    descripcion: "Largo 1.00 | Ancho 0.30 | Altura 0.90",
    moneda: 0,
    id: 23,
},

{
    nombre: 'Cava “Bota de Potro”',
    img: "./assets/img/Cava “Bota de Potro”.jpg",
    alt: "cava",
    descripcion: "Largo 0.34 | Ancho 0.25 | Altura 0.50",
    moneda: 0,
    id: 24,
},

{
    nombre: 'Arcos de futbol “Potrero”',
    img: "./assets/img/Arcos de futbol “Potrero”.jpg",
    alt: "arco",
    descripcion: "",
    moneda: 0,
    id: 25,
},

{
    nombre: 'Perchero “Arisco”',
    img: "./assets/img/Perchero “Arisco”.jpg",
    alt: "perchero",
    descripcion: "Realizado con clavos recuperados de ferrocarril. A elección: pintados en negro u oxidados.",
    moneda: 0,
    id: 26,
},

{
    nombre: 'Abrebotellas “Chapiau”',
    img: "./assets/img/Abrebotellas “Chapiau”.jpg",
    alt: "perchero",
    descripcion: "",
    moneda: 0,
    id: 27,
},

{
    nombre: 'Porta espiral “Sortija”',
    img: "./assets/img/Porta espiral “Sortija”.jpg",
    alt: "porta espiral",
    descripcion: "",
    moneda: 0,
    id: 28,
},

];

const DOMitems = document.getElementById('items');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Para que la animación se aplique solo una vez
        }
    });
});



function filtrarProductos() {
    const Productos = Array.from(document.querySelectorAll('#items .producto .infoProducto .nombreProducto'));
    Productos.forEach(producto => {
        let productoNode = producto.parentElement.parentElement;
        if (producto.innerText.toLowerCase().includes(DOMinputBuscador.value.toLowerCase())) {
            productoNode.style.display = "flex";
            setTimeout(() => {
                observer.observe(productoNode); // Observar el producto cuando coincide con la búsqueda
            }, 100); // Añade un pequeño retraso para que la animación se vea bien
        } else {
            productoNode.classList.remove('visible');
            setTimeout(() => {
                productoNode.style.display = 'none';
            }, 500); // Espera el tiempo de la animación antes de ocultar el elemento
        }
    });
}


/**Dibuja todos los productos a partir de la base de datos*/
function renderizarProductos() {
    const DOMitems = document.getElementById('items');
    DOMitems.innerHTML = '';

    arayproductos.forEach((info) => {
        const miNodo = document.createElement('div');
        miNodo.classList.add('producto');

        const miNodoImagen = document.createElement('div');
        miNodoImagen.classList.add('imagenProducto');
        const imagen = document.createElement('img');
        imagen.src = info.img;
        miNodoImagen.appendChild(imagen);

        const miNodoInfo = document.createElement('div');
        miNodoInfo.classList.add('infoProducto', 'card-body'); // Asegúrate de incluir 'card-body' si es necesario

        const miNodoNombre = document.createElement('p');
        miNodoNombre.classList.add('nombreProducto', 'card-title'); // Agregar la clase 'card-title'
        miNodoNombre.textContent = info.nombre;

        const miNodoDescripcion = document.createElement('p');
        miNodoDescripcion.classList.add('descripcionProducto'); // Agregar la clase aquí
        miNodoDescripcion.textContent = info.descripcion;;

        /*
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.textContent = `$${info.moneda}`;*/

        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('botonPrecio');
        miNodoBoton.textContent = 'Consultar precio';
        miNodoBoton.addEventListener('click', () => {
            const mensaje = `Hola Jaguar Overo, me gustaria saber el precio ${info.nombre}`;
            const url = `https://api.whatsapp.com/send?phone=5491157493973&text=${encodeURIComponent(mensaje)}`;
            window.open(url, '_blank');
        });

        miNodoInfo.appendChild(miNodoNombre);
        miNodoInfo.appendChild(miNodoDescripcion);
        //miNodoInfo.appendChild(miNodoPrecio);
        miNodoInfo.appendChild(miNodoBoton);

        miNodo.appendChild(miNodoImagen);
        miNodo.appendChild(miNodoInfo);

        DOMitems.appendChild(miNodo);

        // Añade la clase 'visible' después de un pequeño retraso para la animación
        setTimeout(() => observer.observe(miNodo), 100)
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderizarProductos();
    DOMinputBuscador.addEventListener('keyup', filtrarProductos);
});


/* animacion*/
/*
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Para que la animación se aplique solo una vez
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    renderizarProductos();
    const productos = document.querySelectorAll('.producto');
    productos.forEach(producto => {
        observer.observe(producto);
    });
});
*/


/**Evento para añadir un producto al carrito de la Precio*/

/*BORRAR PARA SACAR

function anyadirProductoAlCarrito(e) {
// Anyadimos el Nodo a nuestro carrito
carrito.push(e.target.getAttribute('marcador'))
arayproductos[e.target.getAttribute('marcador') - 1];
renderizarProductos();
// Actualizamos el carrito 
renderizarCarrito();
// Actualizamos el LocalStorage
guardarCarritoEnLocalStorage();
$.jGrowl("¡Agregado al carrito!", {
    life: 1000
});
}
/**
* Dibuja todos los productos guardados en el carrito
*/

/*BORRAR PARA SACAR

function renderizarCarrito() {
// Vaciamos todo el html
DOMcarrito.innerText = '';
// Quitamos los duplicados
const carritoSinDuplicados = [...new Set(carrito)];
// Generamos los Nodos a partir de carrito
carritoSinDuplicados.forEach((item) => {
    // Obtenemos el item que necesitamos de la variable base de datos
    const miItem = arayproductos.filter((itemBaseDatos) => {
        // ¿Coincide las id? Solo puede existir un caso
        return itemBaseDatos.id === parseInt(item);
    });
    // Cuenta el número de veces que se repite el producto
    const numeroUnidadesItem = carrito.reduce((total, itemId) => {
        // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
        return itemId === item ? total += 1 : total;
    }, 0);
    // Creamos el nodo del item del carrito
    const miNodo = document.createElement('li');
    miNodo.classList.add('list-group-item', 'text-right');
    miNodo.innerText = `${numeroUnidadesItem} x ${miItem[0].nombre} - $${miItem[0].moneda}`;
    // Boton de borrar
    const miBoton = document.createElement('button');
    miBoton.classList.add('btn', 'btn-danger');
    miBoton.innerText = 'X';
    miBoton.style.marginLeft = '1rem';
    miBoton.dataset.item = item;
    miBoton.addEventListener('click', borrarItemCarrito);
    // Mezclamos nodos
    miNodo.appendChild(miBoton);
    DOMcarrito.appendChild(miNodo);
});
// Renderizamos el precio total en el HTML
DOMtotal.innerText = calcularTotal();
}

BORRAR PARA SACAR*/

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);
DOMinputBuscador.addEventListener('keyup', filtrarProductos);
DOMbotonPrecio.addEventListener('click', alertaPrecio);
DOMmostrarCarrito.addEventListener('click', mostrarCarrito);



// Inicio
cargarCarritoDeLocalStorage();
renderizarProductos();
renderizarCarrito();
