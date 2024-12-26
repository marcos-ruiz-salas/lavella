import type { Color, Product } from "@/types/Product"

import "@components/productInformation.css"
import { useEffect, useState } from "react";
import { addCartItem, cartItems } from "./cart/CartStore";

interface ProductParams {
    product: Product
}

export default function ProductInformation({ product }: ProductParams) {
    const [productQuantity, setProductQuantity] = useState<number>(1);

    const [selectedColor, setSelectedColor] = useState<Color | null>(
        product.colors?.[0] || null
    );

    useEffect(() => {
        const mainImageContainer = document.querySelector<HTMLDivElement>(".main-image-container");
        const mainImages = document.getElementsByClassName("main-image") as HTMLCollectionOf<HTMLImageElement>;
        const thumbnails = document.querySelectorAll<HTMLImageElement>(".thumbnail");

        if (!mainImageContainer || mainImages.length === 0) return;

        const zoomedImage = document.createElement("div");
        zoomedImage.classList.add("zoomed");
        mainImageContainer.appendChild(zoomedImage);

        const handleThumbnailClick = (event: Event) => {
            const thumbnail = event.currentTarget as HTMLImageElement;
            const src = thumbnail.getAttribute("src");

            if (src) {
                mainImages[0].src = src;
                zoomedImage.style.backgroundImage = `url(${src})`;
                thumbnails.forEach((t) => t.classList.remove("active"));
                thumbnail.classList.add("active");
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            const zoomer = mainImageContainer.getBoundingClientRect();
            const x = ((e.clientX - zoomer.left) / zoomer.width) * 100;
            const y = ((e.clientY - zoomer.top) / zoomer.height) * 100;

            zoomedImage.style.backgroundPosition = `${x}% ${y}%`;
            zoomedImage.style.backgroundSize = "250%";
            zoomedImage.style.opacity = "1";
        };

        const handleMouseLeave = () => {
            zoomedImage.style.opacity = "0";
        };

        // Attach event listeners
        thumbnails.forEach((thumbnail) => {
            thumbnail.addEventListener("click", handleThumbnailClick);
        });
        mainImageContainer.addEventListener("mousemove", handleMouseMove);
        mainImageContainer.addEventListener("mouseleave", handleMouseLeave);

        // Set initial zoomed image background
        zoomedImage.style.backgroundImage = `url(${mainImages[0].src})`;

        // Cleanup on unmount
        return () => {
            thumbnails.forEach((thumbnail) => {
                thumbnail.removeEventListener("click", handleThumbnailClick);
            });
            mainImageContainer.removeEventListener("mousemove", handleMouseMove);
            mainImageContainer.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [product.images]);

    const extraCost = selectedColor?.cost ?? 0;

    // Formatted price with two decimals and thousands separator
    const formatPrice = (price: number) =>
        price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    const handleColorClick = (color: Color) => setSelectedColor(color);
    const sumPrice = product.price + extraCost;

    const formattedPrice = formatPrice(sumPrice - (sumPrice * (product.availableOffert ?? 0) / 100));

    const handleClickQuantityIncrement = () => setProductQuantity(quant => quant + 1);
    const handleClickQuantityDecrement = () => setProductQuantity(quant => quant - 1);
    const handleClickOnBuyProduct = () => {
        const { id: productId } = product;

        addCartItem({
            id: productId,
            productId,
            quantity: productQuantity
        })
    };

    return <section id="product-information">
        <div className="product-images">
            {
                product.availableOffert && <p className="offert">-{product.availableOffert}%</p>
            }
            <div className="main-image-container">
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className="main-image"
                />
            </div>

            <div className="thumbnail-container">
                {
                    product.images.map((image, i) =>
                        <img
                            key={i}
                            src={image}
                            alt={`${product.name} - ${i}`}
                            className={`thumbnail${i === 0 ? " active" : ""}`}
                        />
                    )
                }
            </div>
        </div>

        <span>
            <h1>
                {product.name}
                <p>COD: {product.id}</p>
            </h1>
            <p>EUR {formattedPrice}€</p>

            <section className="cart-section">
                <span>
                    <b>Cantidad:</b>
                    <input
                        min={1}
                        type="number"
                        name="quantity"
                        value={productQuantity}
                        readOnly
                    />

                    <div className="quantity-selectors">

                        <button
                            type="button"
                            onClick={handleClickQuantityIncrement}
                            className="increment-quantity"
                            aria-label="Añadir"
                        >&#43;</button>

                        <button
                            type="button"
                            onClick={handleClickQuantityDecrement}
                            className="decrement-quantity"
                            aria-label="Substraer"
                            disabled={productQuantity === 1}
                        >&#8722;</button>
                    </div>
                </span>

                <button className="add-to-cart" onClick={handleClickOnBuyProduct}>
                    Añadir al carrito 🛒
                </button>
            </section>


            <div>
                {product.description && <span>
                    {
                        product.description.split('\n')
                            .map((paragraph, i) =>
                                paragraph.length === 0
                                    ? <br key={i} />
                                    : <p key={i}>
                                        {paragraph}
                                    </p>
                            )
                    }
                </span>}
                {
                    product.colors && (
                        <span>
                            <p>Colores disponibles:</p>

                            <ul className="colors">
                                {
                                    product.colors.map((color, i) =>
                                        <li
                                            key={i}
                                            title={color.name}
                                            style={{ backgroundColor: `${color.hex}` }}
                                            onClick={() => handleColorClick(color)}

                                            className={color.id === selectedColor?.id ? "selected" : ""}
                                        />
                                    )
                                }
                            </ul>
                        </span>
                    )
                }
            </div>
        </span>
    </section>
}
