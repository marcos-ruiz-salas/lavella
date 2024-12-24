import type { Product } from '@/types/Product';

import '@components/product/item.css';

interface ProductItemParams {
    product: Product
}

export default function ProductItem({ product }: ProductItemParams) {
    // Formatted price with two decimals and thousands separator

    const hardcodedOffert = product.availableOffert ?? 15; // Hardcoded offert
    const formattedPrice = (
        product.price - (product.price * hardcodedOffert / 100)
    ).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return (
        <a
            className="product"
            id={product.id}
            href={`/producto/${product.id}`}
        >
            <header>
                <img
                    style={{ viewTransitionName: `img-${product.id}` }}
                    src={product.images[0]}
                />

                {
                    // product.availableOffert && <p className='offert'>-{product.availableOffert}%</p>
                }
                <p className='offert'>-{hardcodedOffert}%</p> {/* Hardcoded offert */}
                {
                    product.stock === 0
                        ? <div>Fuera de stock</div>
                        : <div className='stock'>En stock</div>
                }
            </header>

            <footer>
                <span>
                    <h1>{product.name}</h1>
                </span>
                <p>{formattedPrice}€</p>
            </footer>
        </a>
    )
}
