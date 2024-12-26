import ShopCartIcon from "@/icons/ShopCartIcon";

import { cartItems } from "@components/cart/CartStore";
import { useState } from "react";

const getItemsLength = (items: object) => Object.keys(items).length

export default function CartHeader({ className }: { className?: string }) {
    const [productQuantity, setProductQuantity] = useState<number>(getItemsLength(cartItems.get()));

    cartItems.listen((items) => setProductQuantity(getItemsLength(items)));
    return <div className={className}>
        <a className='cart-container' href="/carrito">

            <p>+ {productQuantity}</p>
            <ShopCartIcon />
        </a>
    </div>
}