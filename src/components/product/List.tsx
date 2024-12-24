import '@components/product/list.css';

interface ProductListParams {
    children: JSX.Element | JSX.Element[],
}

export default function ProductList({ children }: ProductListParams) {
    return (
        <section id="product-list">
            {children}
        </section>
    )
}
