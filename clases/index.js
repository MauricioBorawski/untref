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
      valor: 350,
    },
  ],
};

function popularCarrito() {}

function obtenerCupon() {
  return mocks.cupones[Math.floor(Math.random() * 2)];
}

class Producto {
    /**
     * id
     * nombre
     * precio
     * stock
     */
}

class Cupones {
    /**
     * id
     * tipoDescuento => 1 descuento porcentual / 2 descuento fijo
     * valor
     */
}

class Carrito {
    /**
     * items
     * total
     * cupon
     */
}

/**
 * Ejercicio de clases
 * Se debera crear una simuacion de un carrito de compras de un ecomerce.
 * Hay que agregar los atributos y metodos de las Productos, Cupones y Carrito.
 * 
 * El carrito se debera poder acceder a la lista de productos en el carrito
 * y a su valor total, que es la suma del precio de todos los productos.
 * Tambien si es que hay se debera mostrar algun cupon aplicado a la compra.
 * Los metodos del carrito deberan ser los siguientes:
 * - agregar un producto
 * - remover un producto
 * - ver el total
 * - ver la lista de productos
 * - realizar la compra
 */