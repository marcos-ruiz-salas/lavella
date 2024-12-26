export interface Product {
    id: string;
    name: string;
    images: string[];

    stock: number;
    price: number;

    colors?: Color[];
    description?: string;
    availableOffert?: number;

    tags?: string[];
}

export interface Color {
    id: string;
    name: string;
    hex: string;
    cost?: number;
}

export interface CartProduct {
    id: string;
    color?: string;

    productId: string;
    quantity: number;
}