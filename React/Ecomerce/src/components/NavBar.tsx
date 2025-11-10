import {Link} from "react-router";
import {CartDropdown} from "@/components/CarritoList";

export function NavBar() {

    return (
        <header className="flex justify-between items-center px-4 py-2 border-b">
            <Link to='/'>
                <h1 className="text-lg font-semibold">UNTREF Ecomerce</h1>
            </Link>
            <div className="flex items-center gap-2">
                <CartDropdown/>
            </div>
        </header>
    )
}