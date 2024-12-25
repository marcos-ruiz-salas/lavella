import type { Product, SubType } from "@/types/Product"

import "@components/productInformation.css"
import { useEffect, useState } from "react";

interface ProductParams {
    product: Product
}

export default function ProductInformation({ product }: ProductParams) {
    const [selectedSubtypes, setSelectedSubtypes] = useState<Record<string, string>>({});
    const [selectedSubtypeUrl, setSelectedSubtypeUrl] = useState<number>(0);

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
        zoomedImage.style.backgroundImage = `url(${mainImages[selectedSubtypeUrl].src})`;

        // Cleanup on unmount
        return () => {
            thumbnails.forEach((thumbnail) => {
                thumbnail.removeEventListener("click", handleThumbnailClick);
            });
            mainImageContainer.removeEventListener("mousemove", handleMouseMove);
            mainImageContainer.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [product.images]);

    useEffect(() => product.subtypes?.forEach(({ id, values }) => {
        setSelectedSubtypes((prevState) => ({
            ...prevState,
            [id]: values?.[0]?.id ?? ""
        }));

        if (!product.showSubtypes) return;
        const firstSubtype = product.subtypes?.[0];
        if (!firstSubtype) return;

        const urlParams = new URLSearchParams(window.location.search);
        const selectedParam = urlParams.get("selected");

        const selectedUrl = selectedParam ? parseInt(selectedParam) : 0;
        const selectedSubtype = firstSubtype.values?.[selectedUrl];
        if (selectedSubtype) {
            setSelectedSubtypeUrl(selectedUrl);
            setSelectedSubtypes((prevState) => ({
                ...prevState,
                [firstSubtype.id]: selectedSubtype.id
            }));
        }
    }), []);

    const extraCost = Object.entries(selectedSubtypes).reduce((acc, [subTypeKey, subTypeValue]) => {

        const subtype = product.subtypes?.find(({ id }) => id === subTypeKey);
        const selectedSubtype = subtype?.values.find(({ id }) => id === subTypeValue);

        return acc + (selectedSubtype?.cost ?? 0);
    }, 0);

    // Formatted price with two decimals and thousands separator
    const formatPrice = (price: number) =>
        price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    const handleSubtypeClick = (key: string, value: string) =>
        setSelectedSubtypes((prevState) => ({
            ...prevState,
            [key]: value
        }));

    const computedPrice = product.price + extraCost;
    const formattedPrice = formatPrice(computedPrice - (computedPrice * (
        product.availableOffert ?? 0) / 100
    ));

    return <section id="product-information">
        <div className="product-images">
            {
                product.availableOffert && <p className="offert">-{product.availableOffert}%</p>
            }
            <div className="main-image-container">
                <img
                    // style={{ viewTransitionName: `img_${product.id}` }}
                    src={product.images[selectedSubtypeUrl]}
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
                            className={`thumbnail${i === selectedSubtypeUrl ? " active" : ""}`}
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
            <div>
                {
                    product.description && <span>
                    {
                        product.description.split('\n')
                            .map((paragraph, i) =>
                                paragraph.length === 0
                                    ? <br key={i} />
                                    : <p key={i} className="description">
                                        {paragraph}
                                    </p>
                            )
                    }
                    </span>
                }
                {
                    product.subtypes && (
                        product.subtypes.map(({ id: key, name, values }, index) => {
                            return <span key={index}>

                                <p>
                                    {name}
                                </p>
                                <ul className={`${key} subtype`}>
                                    {
                                        values.map((value, j) => {
                                            const selectedValue = selectedSubtypes[key];

                                            return <li
                                                key={j}

                                                title={value.name}
                                                style={value.hex ? { backgroundColor: value.hex } : undefined}

                                                onClick={() => handleSubtypeClick(key, value.id)}
                                                className={value.id === selectedValue ? "selected" : ""}>

                                                {value.name}
                                            </li>
                                        })
                                    }
                                </ul>
                            </span>
                        })
                    )
                }
            </div>
        </span>
    </section>
}
