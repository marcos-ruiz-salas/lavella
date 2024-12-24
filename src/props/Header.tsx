import Logo from "@/icons/Logo";
import ShopCar from "@/icons/ShopCar";

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

                <a
                    href="https://wa.me/c/34654171031"
                    target="_blank"
                ><ShopCar /></a>

            </span>
        </header>
    )
}