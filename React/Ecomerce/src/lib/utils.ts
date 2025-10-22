import {clsx, type ClassValue} from "clsx"
import {twMerge} from "tailwind-merge"
import {BASE_URL} from "@/constants";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const productsImages = [
    {name: "Auriculares inalámbricos", image: "https://unsplash.com/photos/-F_9B9J0qQY"},
    {name: "Zapatillas deportivas", image: "https://unsplash.com/photos/TMqeI0jpnCY"},
    {name: "Reloj inteligente", image: "https://unsplash.com/photos/0y1e1F_zBe8"},
    {name: "Gafas de sol", image: "https://unsplash.com/photos/7meMmHT8Eyg"},
    {name: "Cámara digital", image: "https://unsplash.com/photos/0tC_P8uEdl8"},
    {name: "Botella reutilizable", image: "https://unsplash.com/photos/djSSiY71QzA"},
    {name: "Silla ergonómica", image: "https://unsplash.com/photos/8manzosgFms"},
    {name: "Lámpara de escritorio", image: "https://unsplash.com/photos/IgUR1iX0mqM"},
    {name: "Mochila urbana", image: "https://unsplash.com/photos/aRyDpMxBTpI"},
    {name: "Auriculares gamer", image: "https://unsplash.com/photos/-RBuVVQL8oQ"},
    {name: "Mouse inalámbrico", image: "https://unsplash.com/photos/6jYoil2GhVk"},
    {name: "Teclado mecánico", image: "https://unsplash.com/photos/v0zVlF1Y5OY"},
    {name: "Camiseta básica", image: "https://unsplash.com/photos/5QgIuuBxKwM"},
    {name: "Taza de café", image: "https://unsplash.com/photos/lYLQcWSJ1tg"},
    {name: "Smartphone", image: "https://unsplash.com/photos/JBprx9VHKrI"},
    {name: "Perfume unisex", image: "https://unsplash.com/photos/6aT8gfYf8-w"},
    {name: "Cuaderno de notas", image: "https://unsplash.com/photos/NHG_E8Lq3hc"},
    {name: "Guitarra eléctrica", image: "https://unsplash.com/photos/pHANr-CpbYM"},
    {name: "Tablet Android", image: "https://unsplash.com/photos/DbwYNr8RPbg"},
    {name: "Zapatillas urbanas", image: "https://unsplash.com/photos/y0AAqTLf3SA"}
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