const mocks = {
    productos: [{
        id: 1, nombre: "Yerba Mate", precio: 1250, stock: 5,
    }, {
        id: 2, nombre: "Alfajor Jorgito", precio: 700, stock: 8,
    }, {
        id: 3, nombre: "Coca Cola", precio: 2100, stock: 12,
    }, {
        id: 4, nombre: "Pepsi", precio: 2000, stock: 9,
    }, {
        id: 5, nombre: "Medialunas", precio: 500, stock: 3,
    },], cupones: [{
        id: "BIENVENIDOS10", // tipoDescuento = 1 significa que es un descuento %
        tipoDescuento: 1, valor: 15,
    }, {
        id: "MartesLocos", // tipoDescuento = 2 significa que es un descuento fijo
        tipoDescuento: 2, valor: 3500,
    },],
};

class Producto {
    constructor({id, nombre, precio, stock}) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

class Cupones {
    constructor({id, tipoDescuento, valor}) {
        this.id = id;
        this.tipoDescuento = tipoDescuento;
        this.valor = valor;
    }
}

class Carrito {
    constructor() {
        this.items = [];
        this.total = 0;
        this.cupon = null;
    }

    agregarProducto(producto, cantidad) {
        const {stock, ...rest} = producto;
        if (stock < cantidad) {
            console.log(`Producto ${producto.nombre} - La cantidad solicitada execede al stock disponible.`);

            return;
        }
        const productoNuevo = {
            ...rest, cantidad,
        };

        this.total += productoNuevo.precio * cantidad;

        this.items.push(productoNuevo);
    }

    removerProducto(id) {
        const itemIndex = this.items.findIndex((producto) => producto.id === id);
        if (itemIndex < 0) {
            console.log(`Item con ID: ${id} no existe en el carrito`);
            return;
        }

        const itemToRemove = this.items[itemIndex];
        this.items.splice(itemIndex, 1);
        this.total -= itemToRemove.precio * itemToRemove.cantidad;
        console.log(`Item ${itemToRemove.nombre}(${itemToRemove.cantidad}) fue removido.`);
    }

    aplicarCupon(cupon) {
        if (!cupon) {
            console.log("Cupon invalido");

            return;
        }

        if (cupon.tipoDescuento === 1) {
            const porcentaje = cupon.valor / 100;

            this.total *= porcentaje;

            console.log(`Se aplico el cupon con ID: ${cupon.id} con un descuento de ${cupon.valor}%`);

            return;
        }

        if (cupon.tipoDescuento === 2) {
            this.total -= cupon.valor;

            console.log(`Se aplico el cupon con ID: ${cupon.id} con un descuento de ${cupon.valor} pesos`);
        }
    }
}

/**
 * Inicializamos Clases
 */
const carrito = new Carrito();

/**
 * Obetenemos los elementos del DOM
 */
const carritoTotal = document.getElementById("carrito-total");
const cardContainer = document.getElementById("card-container");
const carritoContainer = document.querySelector("#carrito-container");
const btnOcultar = document.getElementById("btn-ocultar");

carritoTotal.innerText = `Total $${carrito.total}`;

/**
 *
 * @param {string} tagName
 * @param {{
 *     texto: string,
 *     styles: Array<string>,
 *     hijos: Array<Element>,
 *     atributos: {[key: string]: string}
 * }} options
 * @returns {HTMLAnchorElement | HTMLElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLButtonElement | HTMLCanvasElement | HTMLTableCaptionElement | HTMLTableColElement | HTMLDataElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDialogElement | HTMLDivElement | HTMLDListElement | HTMLEmbedElement | HTMLFieldSetElement | HTMLFormElement | HTMLHeadingElement | HTMLHeadElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement | HTMLImageElement | HTMLInputElement | HTMLLabelElement | HTMLLegendElement | HTMLLIElement | HTMLLinkElement | HTMLMapElement | HTMLMenuElement | HTMLMetaElement | HTMLMeterElement | HTMLObjectElement | HTMLOListElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLParagraphElement | HTMLPictureElement | HTMLPreElement | HTMLProgressElement | HTMLScriptElement | HTMLSelectElement | HTMLSlotElement | HTMLSourceElement | HTMLSpanElement | HTMLStyleElement | HTMLTableElement | HTMLTableSectionElement | HTMLTableCellElement | HTMLTemplateElement | HTMLTextAreaElement | HTMLTimeElement | HTMLTitleElement | HTMLTableRowElement | HTMLTrackElement | HTMLUListElement | HTMLVideoElement}
 */
function crearElemento(tagName, options = {
    texto: '',
    styles: [],
    hijos: [],
    atributos: {},
}) {
    const newEl = document.createElement(tagName);

    const {atributos, hijos, texto, styles} = options;

    if (texto) {
        newEl.innerText = texto;
    }

    if (styles.length > 0) {
        newEl.classList.add(...styles);
    }

    if (hijos.length > 0) {
        newEl.append(...hijos);
    }

    if (atributos) {
        for (const [key, value] of Object.entries(atributos)) {
            newEl.setAttribute(key, value);
        }
    }

    return newEl;
}


const mostrarProductos = (productos) => {
    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];

        const actionBtn = crearElemento('button', {
            texto: 'Agregar',
            atributos: {
                "data-id": producto.id,
                id: 'btn-agregar',
            }
        });
        const cardTitle = crearElemento('h2', {
            texto: producto.nombre,
        });
        const cardPrice = crearElemento('p', {
            texto: producto.id,
        });
        const cardHeader = crearElemento('div', {
            styles: ['card-header'],
            hijos: [
                cardTitle,
                cardPrice,
            ]
        });
        const cardActions = crearElemento('div', {
            styles: ['card-actions'],
            hijos: [actionBtn],
        });
        const card = crearElemento('div', {
            styles: ['card'],
            hijos: [cardHeader, cardActions],
        });

        cardContainer.append(card);
    }
};

function ocultarCarrito() {
    carritoContainer.classList.toggle("hidden");

    btnOcultar.textContent = carritoContainer.classList.contains("hidden") ? "Mostrar" : "Ocultar";
}

btnOcultar.addEventListener("click", ocultarCarrito);

mostrarProductos(mocks.productos);

// Funcionalidad Agregar al Carrito.

const agregarBtns = cardContainer.getElementsByTagName("button");
const carritoBody = document.getElementById("carrito-body");

function generarCarritoItem(producto) {
    const carritoItemName = crearElemento('p', {
        texto: producto.nombre,
    });
    const carritoItemPrecio = crearElemento('p', {
        texto: `$${producto.precio}`,
    });
    const carritoItem = crearElemento('div', {
        styles: ['carrito-item'],
        hijos: [carritoItemName, carritoItemPrecio],
    });

    return carritoItem;
}

function agregarProducto(evento) {
    const id = evento.target["data-id"];
    if (!id) {
        console.log('No se pudo obtener el ID del carrito');
        return;
    }

    const productoOriginal = mocks.productos.find((producto) => producto.id === id);

    if (!productoOriginal) {
        console.error(`El producto con ID:${id} no es valido`);

        return;
    }

    const nuevoProducto = new Producto(productoOriginal);

    console.log("Producto generado: ", nuevoProducto);

    carrito.agregarProducto(nuevoProducto, 1);

    console.log(`Producto: ${nuevoProducto} fue agregado exitosamente`);

    const carritoItem = generarCarritoItem(productoOriginal);

    carritoBody.append(carritoItem);

    carritoTotal.innerText = `Total $${carrito.total}`;
}

for (let i = 0; i < agregarBtns.length; i++) {
    const btn = agregarBtns[i];

    btn.addEventListener("click", agregarProducto);
}

// Funcionalidad de Cupon

const formularioCupon = document.getElementById("cupon-form");
// Opcion 1.
// Capturar el input.
// Una vez tengan el input van a tener que acceder a su valor.
// evento => evento.target.value.

// Opcion 2.
// Usar un FormData desde el formulario.

// Usar el evento correspondiente a los formularios.
formularioCupon.addEventListener("evento", (evento) => {
});
