import Logo from "@/icons/Logo";
import CartInformation from "@components/cart/CartInformation";
import { ShopCartProvider } from "@components/cart/ShopCartProvider";

export default function Header() {

    return (
        <header>
            <a href="/">
                <Logo
                    style={{ width: '12rem' }}
                    className="main-logo"
                />
            </a>

            <span>
                <a data-scroll href="/#about">⛄ Sobre mí</a>
                <a href="/productos">Productos</a>
                <a data-scroll href="#contact">Contacto</a>

                <ShopCartProvider>
                    <CartInformation />
                </ShopCartProvider>
            </span>
        </header>
    )
}