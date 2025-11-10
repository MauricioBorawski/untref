import {createBrowserRouter} from "react-router";
import PageLayout from "@/layouts/PageLayout";

import Home from "./Pages/Home";
import Producto from "./Pages/Producto";

export const routes = createBrowserRouter([
    {
        path: "/",
        Component: PageLayout,
        children: [
            {
                index: true, element: <Home/>
            },
        ]
    },
    {
        path: '/producto',
        Component: PageLayout,
        children: [
            {
                index: true,
                element: <p>No se ingreso ningun id</p>
            },
            {
                path: ':id',
                element: <Producto/>
            }
        ]
    },
    {
        path: '/checkout',
        Component: PageLayout,
        children: [
            {
                index: true,
                element: <p>Checkout</p>
            }
        ]
    },
    {
        path: '*',
        Component: PageLayout,
        children: [
            {
                index: true,
                element: <p>Error 404, esta pagina no existe</p>
            }
        ]
    }
]);