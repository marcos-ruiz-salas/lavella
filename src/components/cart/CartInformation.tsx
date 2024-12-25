import ShopCartIcon from "@/icons/ShopCartIcon";

import { useShopCart } from "@components/cart/ShopCartProvider";
import { useEffect } from "react";

export default function CartInformation() {
    const { localProducts } = useShopCart();

    let productsCount: number = 0;
    useEffect(() => {
        productsCount = localProducts.length
    }, [localProducts]);

    return <a href="/carrito">
        <p>+ {productsCount}</p>
        <ShopCartIcon />
    </a>
}