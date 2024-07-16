
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
    img: "./assets/img/banco dos cuerpos.jpg",
    alt: "banco",
    descripcion: "Asiento 1.00 x 0.40 | Respaldo 0.50 | Altura Final 0.90",
    moneda: 0,
    id: 1,
},

{
    nombre: 'Silla matera “Lion”',
    img: "./assets/img/Silla matera.jpg",
    alt: "silla",
    descripcion: "Largo 0.35 | Ancho 0.35 | Altura 0.65",
    moneda: 0,
    id: 2,
},
{
    nombre: 'Silla “Indio”',
    img: "./assets/img/Silla.jpg",
    alt: "silla",
    descripcion: "Largo 0.30 | Ancho 0.65 | Altura 0.90",
    moneda: 0,
    id: 3,
},
{
    nombre: 'Banco matero “Pionada”',
    img: "./assets/img/Banco matero.jpg",
    alt: "banco",
    descripcion: "Largo 0.40 | Ancho 0.40 | Altura 0.45",
    moneda: 0,
    id: 4,
},
{
    nombre: 'Mesa ratona “Rastra de oro”',
    img: "./assets/img/Mesa ratona.jpg",
    alt: "mesa",
    descripcion: "Largo 1.10 | Ancho 0.50 | Altura 0.45",
    moneda: 0,
    id: 5,
}

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
