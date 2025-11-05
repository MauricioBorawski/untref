import {CartDropdown} from "@/components/CarritoList";

export function NavBar() {

    return (
        <header className="flex justify-between items-center px-4 py-2 border-b">
            <h1 className="text-lg font-semibold">Tienda</h1>
            <div className="flex items-center gap-2">
                <CartDropdown />
            </div>
        </header>
    )
}