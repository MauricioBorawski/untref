import {Card, CardHeader, CardTitle, CardContent, CardFooter, CardAction} from "@ui/card";
import {Button} from "@ui/button";
import {ProductDialog} from "@/components/ProductDialog";
import {ProductoWithImage} from "@/types";
import {Link} from "react-router";

type ProductCardProps = {
    producto: ProductoWithImage;
}

export function ProductCard({producto}: ProductCardProps) {
    return (
        <ProductDialog product={producto}>
            <Card>
                <CardHeader className="flex justify-between items-center">
                    <CardTitle>{producto.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <img src={producto.image} alt="Producto image" className="h-[156px] w-full"/>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                    <p><strong>Precio:</strong> ${producto.price}</p>
                    <CardAction>
                        <Button className="cursor-pointer">
                            <Link to={`/producto/${producto.id}`}>
                                Ver Mas
                            </Link>
                        </Button>
                    </CardAction>
                </CardFooter>
            </Card>
        </ProductDialog>
    );
}