import ProductList from "@components/product/List";
import ProductItem from "./product/Item";
import productList from "@/data/ProductRepository";
import type { Product } from "@/types/Product";

export default function Products(props: ({ excludeId?: string, similarTags?: string[], alreadyOpened?: boolean }|undefined)) {
    const similarProducts = productList
        .filter(product => product.id !== props?.excludeId)
        .filter(product => !props?.similarTags || product.tags?.some(tag => props?.similarTags?.includes(tag)));

    const unwrappedProducts: Product[] = similarProducts.map(product => {
        if (!product.showSubtypes) return [product];
        return product.subtypes?.[0].values?.map((subtype, i) => {
            return {
                id: product.id,
                availableOffert: product.availableOffert,
                name: `${product.name} | ${subtype.name}`,
                images: [product.images[i]],
                stock: product.stock,
                price: product.price + (subtype.cost ?? 0),
                tags: product.tags,
                showSubtypes: false,
                props: i
            }
        }) ?? [];
    }).flat();

    const simpleTags = similarProducts
        .map(product => product.tags?.[0])
        .filter(tag => tag)
        .sort((a, b) => {
            if (a === undefined || b === undefined) return 0;

            if (props?.similarTags?.includes(a) && !props?.similarTags?.includes(b)) return -1;
            if (!props?.similarTags?.includes(a) && props?.similarTags?.includes(b)) return 1;
            return 0;
        });
    const uniqueTags = [...new Set(simpleTags)];

    return uniqueTags.map(tag => {
        return (
            <article className="productsArticle">
                <details open={props?.alreadyOpened}>
                    <summary className="separator">
                        {tag?.toLocaleUpperCase()}
                    </summary>

                    <ProductList>
                        {
                            unwrappedProducts
                                .filter(product => product.tags?.[0] === tag)
                                .map(product => <ProductItem product={product} />)
                        }
                    </ProductList>
                </details>
            </article>
        )
    })
}
