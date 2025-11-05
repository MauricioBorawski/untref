import {forwardRef} from "react";
import {useCarrito} from "@/contexts/Carrito";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import {Button} from "@/components/ui/button"
import type {ProductoWithImage} from "@/types";
import {ShoppingCart, Trash2, ArrowUp, ArrowDown} from "lucide-react"

export function CartDropdown() {
    const {carrito, removeProducto, sortProductos} = useCarrito();


    const total = carrito.reduce((acc, product) => acc + product.price, 0);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <CarritoRenderButton carrito={carrito}/>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56 p-2">
                <DropdownMenuLabel>Tu carrito</DropdownMenuLabel>
                <CarritoSortButtons sortProductos={sortProductos}/>
                <DropdownMenuSeparator/>
                <CarritoBody carrito={carrito} removeProducto={removeProducto}/>
                <DropdownMenuSeparator/>
                <div className="flex justify-between px-2 py-1 text-sm font-medium">
                    <span>Total:</span>
                    <span>${total}</span>
                </div>
                <Button className="w-full mt-2">Ir al checkout</Button>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

const CarritoRenderButton = forwardRef<
    HTMLButtonElement,
    { carrito: ProductoWithImage[] }
>(({carrito}, ref) => {
    return (
        <Button ref={ref} variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5"/>
            {carrito.length > 0 && (
                <span
                    className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {carrito.length}
        </span>
            )}
        </Button>
    )
})

export function CarritoSortButtons({sortProductos}: { sortProductos: (type: 'Asc' | 'Desc') => void }) {
    return (
        <div className="flex flex-col justify-between items-center gap-2 px-2 pb-2">
            <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1 w-full"
                onClick={() => {
                    sortProductos('Desc')
                }}
            >
                <ArrowUp className="h-4 w-4"/>
                <span>Menor precio</span>
            </Button>

            <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1 w-full"
                onClick={() => {
                    sortProductos('Asc')
                }}
            >
                <ArrowDown className="h-4 w-4"/>
                <span>Mayor precio</span>
            </Button>
        </div>
    )
}

function EmptyCarrito() {
    return (
        <DropdownMenuItem disabled>El carrito está vacío</DropdownMenuItem>
    )
}

function CarritoBody({carrito, removeProducto}: {
    carrito: ProductoWithImage[],
    removeProducto: (product: ProductoWithImage) => void
}) {
    if (carrito.length === 0) return <EmptyCarrito/>

    return (
        carrito.map(item => (
            <DropdownMenuItem
                key={item.id}
                className="flex justify-between carrito-center gap-2"
            >
                <span>{item.name}</span>
                <div className="flex carrito-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    ${item.price}
                  </span>
                    <Button size='icon' onClick={() => removeProducto(item)}>
                        <Trash2
                            className="h-4 w-4 hover:text-destructive cursor-pointer"
                        />
                    </Button>
                </div>
            </DropdownMenuItem>
        ))
    );
}
