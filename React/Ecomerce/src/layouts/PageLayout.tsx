import {Outlet} from "react-router";
import {NavBar} from "@/components/NavBar";
import {CarritoContextProvider} from "@/contexts/Carrito";

export default function PageLayout() {
    return (
        <CarritoContextProvider>
            <NavBar/>
            <Outlet />
        </CarritoContextProvider>
    )
}