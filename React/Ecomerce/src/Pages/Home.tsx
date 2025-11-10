import {useQuery} from "@tanstack/react-query";
import {api, productsImages} from "@/lib/utils";
import {Loading} from "@/components/Loading";
import {ProductCard} from "@/components/ProductCard";

import type {Producto, ProductoWithImage} from "@/types";

function Home() {
    const {data: productos, isLoading} = useQuery<ProductoWithImage[] | null>({
        queryKey: ['products'],
        queryFn: async () => {
            const response = await api('/productos', {method: "GET"}) as { data: Producto[] };

            if (response) {
                const productsWithImage: ProductoWithImage[] = response.data.map(
                    (product, index) => ({
                        ...product,
                        image: productsImages[index].image,
                    })
                );

                return productsWithImage;
            }

            return null;
        }
    });

    if (isLoading) return <Loading/>;

    if (!productos) return <h1>Hubo un error solicitando los productos.</h1>

    return (
        <div>
            <section>
                <div className="max-w-[1280px] p-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {
                        productos.map((producto) => (
                            <ProductCard producto={producto} key={producto.id}/>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default Home;