import {useParams} from "react-router";
import {ProductoWithImage} from "@/types";
import {api, productsImages} from "@/lib/utils";
import type {Producto} from "@/types";
import {Loading} from "@/components/Loading";
import {Button} from "@ui/button";
import {useCarrito} from "@/contexts/Carrito";
import {useQuery} from "@tanstack/react-query";

export default function Producto() {
    const params = useParams();
    const {addProducto} = useCarrito();
    const {data: producto, isLoading} = useQuery<ProductoWithImage | null>({
        queryKey: ['product', params.id],
        queryFn: async () => {
            const response = await api(`/productos/${params.id}`, {method: "GET"}) as { data: Producto };

            if (response) {
                const productWithImage: ProductoWithImage = {
                    ...response.data,
                    image: productsImages[Number(params.id) - 1].image,
                }

                return productWithImage;
            }

            return null;
        },
    });

    const handleBuyProduct = (producto: ProductoWithImage) => {
        addProducto(producto);
    }

    if (isLoading) return <Loading/>;

    if (!producto) return <h1>Hubo un error al intentar obtener la info del producto</h1>;

    return (
        <section className="p-4">
            <article className='p-2'>
                <div className="flex items-start gap-4 flex-col">
                    <div>
                        <h1 className="text-4xl font-semibold">{producto.name} - ${producto.price}</h1>
                        <p>Quedan: {producto.stock}</p>
                    </div>
                    <Button onClick={() => {
                        handleBuyProduct(producto);
                    }}>Comprar</Button>
                </div>
                <div className="mt-6">
                    <img src={producto.image} alt={producto.name} className="size-1/2 max-h-[500px]"/>
                </div>
                <div className="mt-4">
                    <p>{producto.description}</p>
                </div>
            </article>
        </section>
    )
}