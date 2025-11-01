import {useEffect, useState} from "react";
import type {Producto, ProductoWithImage} from "@/types";
import {api, productsImages} from "@/lib/utils";
import {Loading} from "@/components/Loading";
import {ProductCard} from "@/components/ProductCard";

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [productos, setProductos] = useState<ProductoWithImage[]>([]);

    useEffect(() => {
        async function fetchApi() {
            const response = await api('/productos', {method: 'GET'}) as {data: Producto[]};

            if (response) {
                const productWithImage: ProductoWithImage[] = response.data.map((product, index) => ({
                    ...product,
                    image: productsImages[index].image,
                }));

                setIsLoading(false);
                setProductos(productWithImage);
            }
        }

        fetchApi();
    }, []);

    if (isLoading) return <Loading/>;

    return (
        <div>
            <section>
                <div className="max-w-[1280px] p-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {
                        productos.map((producto) => (
                            <ProductCard producto={producto} />
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default Home;