import type { Color, LocalProduct, Product } from "@/types/Product";

import { createContext, useContext, useEffect, useState } from "react";

export interface ShopCartContextProps {
    localProducts: LocalProduct[];

    addToCart: (product: Product, quantity?: number, color?: Color) => void;
    removeFromCart: (productId: string) => void;
    clearCart: () => void;
}

const ShopCartContext = createContext<ShopCartContextProps | undefined>(undefined);

export function ShopCartProvider({ children }: { children: React.ReactNode }) {
    const [localProducts, setLocalProducts] = useState<LocalProduct[]>([]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedProducts = localStorage.getItem("localProducts");
            setLocalProducts(storedProducts ? JSON.parse(storedProducts) : []);
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("localProducts", JSON.stringify(localProducts));
        }
    }, [localProducts]);

    const saveToLocalStorage = (products: LocalProduct[]) => {
        localStorage.setItem("localProducts", JSON.stringify(products));
    };

    const addToCart = (product: Product, quantity: number = 1, color?: Color) => {
        const newProduct: LocalProduct = {
            id: product.id,
            color: color?.id,
            quantity
        };
        setLocalProducts((prev) => [...prev, newProduct]);
    };

    const removeFromCart = (productId: string) => {
        setLocalProducts((prev) => prev.filter((product) => product.id !== productId));
    };

    const clearCart = () => setLocalProducts([]);

    return (
        <ShopCartContext.Provider value={
            {
                localProducts,
                addToCart,
                removeFromCart,
                clearCart
            }
        }>
            {children}
        </ShopCartContext.Provider>
    );
}

export function useShopCart() {
    const context = useContext(ShopCartContext);

    if (!context) {
        throw new Error("useShopCart must be used within a ShopCartProvider");
    }
    return context;
}