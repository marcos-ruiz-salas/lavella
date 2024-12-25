export interface Product {
    id: string;
    name: string;
    images: string[];

    stock: number;
    price: number;

    description?: string;
    availableOffert?: number;

    showSubtypes?: boolean;
    subtypes?: SubTypeKey[];
    tags?: string[];

    props?: any;
}


export interface SubTypeKey {
    id: string;
    name: string;
    values: SubType[];
}

export interface SubType {
    id: string;
    name: string;
    hex?: string;
    cost?: number;
}