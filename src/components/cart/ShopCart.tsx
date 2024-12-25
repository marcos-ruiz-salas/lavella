import type { Color, LocalProduct, Product } from "@/types/Product";

import ShopCartIcon from "@/icons/ShopCartIcon";
import { createContext, useState } from "react";

export default function ShopCart() {
    const localProducts = [];

    return localProducts.length > 0
        ? <></>
        : <>
            <p>¡Tu carrito está vacío! 😢</p>
            <p>¡Añade productos para continuar! 🛍️</p>

            <a href="https://wa.me/c/34654171031" target="_blank"><ShopCartIcon /></a>
        </>
}