import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@ui/navigation-menu";
import {CarritoList} from "@/components/CarritoList";

export function NavBar() {

    return (
        <div className='flex flex-row items-center gap-2 p-4'>
            <h1 className="font-semibold text-2xl">UNTREF Ecomerce</h1>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Carrito</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <CarritoList/>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}