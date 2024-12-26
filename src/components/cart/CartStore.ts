import type { CartProduct } from "@/types/Product";
import { computed, map, onMount } from "nanostores";

export const cartItems = map<{ [key: string]: CartProduct | undefined }>();

export function addCartItem(cartProduct: CartProduct) {
    const { id, quantity } = cartProduct;
    const existingEntry = cartItems.get()[id];

    cartItems.setKey(id, existingEntry
        ? {
            ...existingEntry,
            quantity: existingEntry.quantity + quantity,
        } : cartProduct
    );
}

export function removeCartItem(id: string) {
    cartItems.setKey(id, undefined);
}

if (typeof window !== "undefined")
    onMount(cartItems, () => {
        const cartItemsFromStorage = localStorage.getItem("cartItems");
        if (cartItemsFromStorage) {
            const cartItemsArray = JSON.parse(cartItemsFromStorage) as CartProduct[];
            cartItemsArray.forEach((cartProduct) => {
                cartItems.setKey(cartProduct.id, cartProduct);
            });
        }

        return () => {
            const cartItemsArray = computed(cartItems, items =>
                Object.values(items).filter(Boolean));
            localStorage.setItem("cartItems", JSON.stringify(cartItemsArray.get()));
        };
    })