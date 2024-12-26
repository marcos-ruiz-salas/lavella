import type { Color, CartProduct, Product } from "@/types/Product";

import ShopCartIcon from "@/icons/ShopCartIcon";
import { useState } from "react";
import { cartItems } from "./CartStore";

export default function ShopCart() {
    const [products, setProducts] = useState(cartItems.get())
    cartItems.listen(setProducts)

    if (products === undefined) return <p>Cargando productos...</p>
    const productEntries = Object.values(products) ?? [];

    if (productEntries.length === 0)
        return <section>
            <p>¡Tu carrito está vacío! 😢</p>
            <p>¡Añade productos para continuar! 🛍️</p>
        </section>

    return <section>
        <ul>{
            productEntries
                .filter(value => value !== undefined)
                .map(({ quantity, id }) =>
                    <li key={id}>
                        <p>{quantity}</p>
                    </li>
                )
        }</ul>
        <a href="https://wa.me/c/34654171031" target="_blank"><ShopCartIcon /></a>
    </section>
}