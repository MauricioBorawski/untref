import {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction} from "@ui/card";
import {Button} from "@ui/button";
import {ProductoWithImage} from "@/types";

type ProductCardProps = {
    producto: ProductoWithImage;
}

export function ProductCard({producto}: ProductCardProps) {
    return (
        <Card>
            <CardHeader className="flex justify-between items-center">
                <div>
                    <CardTitle>{producto.name}</CardTitle>
                    <CardDescription>{producto.description}</CardDescription>
                </div>
                <p><strong>Precio:</strong> {producto.price}</p>
            </CardHeader>
            <CardContent>
                <img src={producto.image} alt="Producto image" />
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <p><strong>Stock:</strong> {producto.stock}</p>
                <CardAction>
                    <Button className="cursor-pointer">Comprar</Button>
                </CardAction>
            </CardFooter>
        </Card>
    );
}