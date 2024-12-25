import ProductList from "@components/product/List";
import ProductItem from "./product/Item";
import productList from "@/data/ProductRepository";

export default function Products({ excludeId, similarTags }: { excludeId?: string, similarTags?: string[] }) {
    const similarProducts = productList
        .filter(product => product.id !== excludeId)
        .filter(product => !similarTags || product.tags?.some(tag => similarTags.includes(tag)));

    const simpleTags = similarProducts
        .map(product => product.tags?.[0])
        .filter(tag => tag)
        .sort((a, b) => {
            if (a === undefined || b === undefined) return 0;

            if (similarTags?.includes(a) && !similarTags?.includes(b)) return -1;
            if (!similarTags?.includes(a) && similarTags?.includes(b)) return 1;
            return 0;
        });
    const uniqueTags = [...new Set(simpleTags)];

    return uniqueTags.map(tag => {
        return (
            <article>
                <details>
                <summary>
                    <h1
                    className="separator"
                    style={
                        {
                            margin: 0,
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }
                    }
                >{tag?.toLocaleUpperCase()}</h1>
                </summary>
                <ProductList>
                    {
                        similarProducts
                            .filter(product => product.tags?.[0] === tag)
                            .map(product => <ProductItem product={product} />)
                    }
                </ProductList>
                </details>
            </article>
        )
    })
}
