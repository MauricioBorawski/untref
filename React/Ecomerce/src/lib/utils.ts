import {clsx, type ClassValue} from "clsx"
import {twMerge} from "tailwind-merge"
import {BASE_URL} from "@/constants";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const productsImages = [
    {
        name: "Auriculares inalámbricos",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    },
    {
        name: "Zapatillas deportivas",
        image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1978"
    },
    {
        name: "Reloj inteligente",
        image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    },
    {
        name: "Gafas de sol",
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1028"
    },
    {
        name: "Cámara digital",
        image: "https://images.unsplash.com/photo-1628557451528-c87b894beed6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1965"
    },
    {
        name: "Botella reutilizable",
        image: "https://images.unsplash.com/photo-1631863552008-f6491c3c9062?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627"
    },
    {
        name: "Silla ergonómica",
        image: "https://images.unsplash.com/photo-1761167899925-33ee9a55f9db?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627"
    },
    {
        name: "Lámpara de escritorio",
        image: "https://images.unsplash.com/photo-1624434207357-34e782936956?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    },
    {
        name: "Mochila urbana",
        image: "https://images.unsplash.com/photo-1585314614250-d213876625e1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1228"
    },
    {
        name: "Auriculares gamer",
        image: "https://images.unsplash.com/photo-1632247541401-3d4a8d516595?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764"
    },
    {
        name: "Mouse inalámbrico",
        image: "https://images.unsplash.com/photo-1584541728894-dbcae08f94ac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735"
    },
    {
        name: "Teclado mecánico",
        image: "https://images.unsplash.com/photo-1607164944554-0a0ddd9ff6a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
    },
    {
        name: "Camiseta básica",
        image: "https://images.unsplash.com/photo-1760998881286-14ff52aaf833?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    },
    {
        name: "Taza de café",
        image: "https://images.unsplash.com/photo-1758640265844-5da0c0a4b896?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1228"
    },
    {
        name: "Smartphone",
        image: "https://images.unsplash.com/photo-1760088348194-a5ac70a8aa9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
    },
    {
        name: "Perfume unisex",
        image: "https://images.unsplash.com/photo-1761384409444-2f8359d67a69?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
    },
    {
        name: "Cuaderno de notas",
        image: "https://images.unsplash.com/photo-1577976655502-85300c5ca2cb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332"
    },
    {
        name: "Guitarra eléctrica",
        image: "https://images.unsplash.com/photo-1587017234728-932c80f3e56f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688"
    },
    {
        name: "Tablet Android",
        image: "https://images.unsplash.com/photo-1706290238473-746c299efcaa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
    },
    {
        name: "Zapatillas urbanas",
        image: "https://images.unsplash.com/photo-1761575074219-053f3305d5b4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764"
    }
];

type Options = {
    method?: "GET" | "POST" | "PUT" | "DELETE";
    headers?: Array<{ [key: string]: string }>;
}

const apiKey: string = import.meta.env.VITE_API_KEY;

export async function api(endpoint: string, {method, headers}: Options) {
    return await fetch(BASE_URL + endpoint, {
        method: method,
        headers: {
            'authorization': apiKey,
        },
    })
        .then(res => res.json())
}