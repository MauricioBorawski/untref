import {type ReactNode} from "react";
import {useCarrito} from "@/contexts/Carrito";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription, DialogFooter
} from "@ui/dialog";
import {Button} from "@ui/button";
import {ProductoWithImage} from "@/types";

type ProductDialogProps = {
    product: ProductoWithImage;
    children: ReactNode;
}

export function ProductDialog(props: ProductDialogProps) {
    const {addProducto} = useCarrito();

    const {product} = props;

    const handleBuyProduct = (producto: ProductoWithImage) => {
        addProducto(producto);
    };

    return (
        <Dialog>
            <DialogTrigger>{props.children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {product.name}
                    </DialogTitle>
                    <DialogDescription>
                        {product.description}
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <img src={product.image} alt={`Imagen del producto ${product.name}`} className="w-[460px] h-[300px]"/>
                    <p><strong>Precio:</strong> ${product.price}</p>
                </div>
                <DialogFooter>
                    <Button onClick={() => handleBuyProduct(product)}>Comprar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}