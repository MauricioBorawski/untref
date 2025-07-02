const mocks = {
  productos: [
    {
      id: 1,
      nombre: "Yerba Mate",
      precio: 1250,
      stock: 5,
    },
    {
      id: 2,
      nombre: "Alfajor Jorgito",
      precio: 700,
      stock: 8,
    },
    {
      id: 3,
      nombre: "Coca Cola",
      precio: 2100,
      stock: 12,
    },
    {
      id: 4,
      nombre: "Pepsi",
      precio: 2000,
      stock: 9,
    },
    {
      id: 5,
      nombre: "Medialunas",
      precio: 500,
      stock: 3,
    },
  ],
  cupones: [
    {
      id: "BIENVENIDOS10",
      tipoDescuento: 1,
      valor: 15,
    },
    {
      id: "MartesLocos",
      tipoDescuento: 2,
      valor: 3500,
    },
  ],
};

class Producto {
  constructor({ id, nombre, precio, stock }) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}

class Cupones {
  constructor({ id, tipoDescuento, valor }) {
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
    const { stock, ...rest } = producto;
    if (stock < cantidad) {
      console.log(
        `Producto ${producto.nombre} - La cantidad solicitada execede al stock disponible.`
      );

      return;
    }
    const productoNuevo = {
      ...rest,
      cantidad,
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
    console.log(
      `Item ${itemToRemove.nombre}(${itemToRemove.cantidad}) fue removido.`
    );
  }

  aplicarCupon(cupon) {
    if (!cupon) {
      console.log("Cupon invalido");

      return;
    }

    // tipoDescuento = 1 significa que es un descuento %
    if (cupon.tipoDescuento === 1) {
      const porcentaje = cupon.valor / 100;

      this.total *= porcentaje;

      console.log(
        `Se aplico el cupon con ID: ${cupon.id} con un descuento de ${cupon.valor}%`
      );

      return;
    }

    if (cupon.tipoDescuento === 2) {
      this.total -= cupon.valor;

      console.log(
        `Se aplico el cupon con ID: ${cupon.id} con un descuento de ${cupon.valor} pesos`
      );

      return;
    }
  }
}
const cardContainer = document.getElementById("card-container");

const mostrarProductos = (productos) => {
  for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];
    const card = document.createElement("div");

    card.classList.add("card");

    cardContainer.append(card);
  }
};

function ocultarCarrito() {
  const carritoContainer = document.querySelector("#carrito-container");
  const btnOcultar = document.querySelector("#btn-ocultar");

  carritoContainer.classList.toggle("hidden");

  btnOcultar.textContent = carritoContainer.classList.contains("hidden") ? "Mostrar" : "Ocultar";
}

mostrarProductos(mocks.productos);
