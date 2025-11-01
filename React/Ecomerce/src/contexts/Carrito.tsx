import {createContext, useContext, useState} from "react";
import type {ProductoWithImage} from "@/types";

interface CarritoContextProviderProps {
    children: React.ReactNode;
}

interface CarritoContext {
    carrito: ProductoWithImage[];
    addProducto: (producto: ProductoWithImage) => void;
    removeProducto: (producto: ProductoWithImage) => void;
    removeAllProductos: () => void;
    sortProductos: (type: 'Desc' | 'Asc') => void;
}

export const CarritoContext = createContext<CarritoContext | null>(null);

const useCarritoContext: () => CarritoContext = () => {
    const [carrito, setCarrito] = useState<ProductoWithImage[]>([]);

    function addProducto(producto: ProductoWithImage) {
        setCarrito(prev => ([
            ...prev, producto
        ]));
    }

    function removeProducto(producto: ProductoWithImage) {
        setCarrito(prev => (
            prev.filter((productoCarrito) => productoCarrito.id
                !== producto.id)
        ))
    }

    function removeAllProductos() {
        setCarrito([]);
    }

    function sortProductos(type: 'Desc' | 'Asc') {
        setCarrito(
            prev => prev.sort((productoA, productoB) => {
                return type === 'Asc' ?
                    productoB.price - productoA.price :
                    productoA.price - productoB.price;
            })
        )
    }

    return {
        carrito,
        addProducto,
        removeProducto,
        removeAllProductos,
        sortProductos
    }
};

export const useCarrito = () => {
    const context = useContext(CarritoContext);

    if (!context) throw new Error("A Provider is needed for Carrito Context");

    return context;
}

export const CarritoContextProvider = ({children}: CarritoContextProviderProps) => {
    const {carrito, addProducto, removeProducto, removeAllProductos, sortProductos} = useCarritoContext();

    return (
        <CarritoContext.Provider value={{carrito, addProducto, removeProducto, removeAllProductos, sortProductos}}>
            {children}
        </CarritoContext.Provider>
    )
};
