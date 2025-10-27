import {Card, CardHeader, CardTitle, CardContent, CardFooter, CardAction} from "@ui/card";
import {Button} from "@ui/button";
import {ProductDialog} from "@/components/ProductDialog";
import {ProductoWithImage} from "@/types";

type ProductCardProps = {
    producto: ProductoWithImage;
}

export function ProductCard({producto}: ProductCardProps) {
    return (
        <Card>
            <CardHeader className="flex justify-between items-center">
                <CardTitle>{producto.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <img src={producto.image} alt="Producto image"/>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <p><strong>Precio:</strong> ${producto.price}</p>
                <CardAction>
                    <ProductDialog product={producto}>
                        <Button className="cursor-pointer">Ver mas</Button>
                    </ProductDialog>
                </CardAction>
            </CardFooter>
        </Card>
    );
}