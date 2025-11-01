import {useCarrito} from "@/contexts/Carrito";
import {Item, ItemGroup, ItemTitle, ItemContent, ItemDescription, ItemFooter, ItemActions} from "@ui/item";
import {Button} from "@ui/button";
import {Tooltip, TooltipContent, TooltipTrigger} from "@ui/tooltip";
import {ArrowDown01, ArrowUp01} from "lucide-react";
import {ProductoWithImage} from "@/types";

export function CarritoList() {
    const {carrito, removeProducto, sortProductos} = useCarrito();

    if (carrito.length === 0) return <CarritoEmpty/>;

    return (
        <div>
            <div className="flex flex-row items-center gap-2">
                <Tooltip>
                    <TooltipTrigger>
                        <Button size='icon' onClick={() => sortProductos('Desc')}>
                            <ArrowDown01/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        Menor Precio
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger>
                        <Button size='icon' onClick={() => sortProductos('Asc')}>
                            <ArrowUp01/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        Mayor Precio
                    </TooltipContent>
                </Tooltip>
            </div>
            <ItemGroup>
                {carrito.map((producto) => (
                    <CarritoItem producto={producto} removeProducto={removeProducto}/>
                ))}
            </ItemGroup>
        </div>
    );
}

function CarritoEmpty() {
    return (
        <Item>
            <ItemContent>
                <ItemTitle>No hay productos en el carrito</ItemTitle>
                <ItemDescription>Agregue productos al carrito</ItemDescription>
            </ItemContent>
        </Item>
    );
}

function CarritoItem({producto, removeProducto}: {
    producto: ProductoWithImage,
    removeProducto: (producto: ProductoWithImage) => void
}) {
    return (<Item>
        <ItemContent>
            <ItemTitle>{producto.name}</ItemTitle>
            <ItemDescription>${producto.price}</ItemDescription>
            <ItemFooter>
                <ItemActions>
                    <Button onClick={() => removeProducto(producto)}>
                        Remover
                    </Button>
                </ItemActions>
            </ItemFooter>
        </ItemContent>
    </Item>)
}