import {ReactNode} from "react";
import {
    Dialog,
    DialogTrigger,
    DialogClose,
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
    const {product} = props;

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
                    <img src={product.image} alt={`Imagen del producto ${product.name}`} />
                    <p><strong>Precio:</strong> ${product.price}</p>
                </div>
                <DialogFooter>
                    <Button>Comprar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}