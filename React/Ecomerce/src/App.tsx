import Home from "./Pages/Home";
import {NavBar} from "@/components/NavBar";
import {CarritoContextProvider} from "@/contexts/Carrito";

function App() {
    return (
        <CarritoContextProvider>
            <NavBar/>
            <Home/>
        </CarritoContextProvider>
    )
}

export default App;
