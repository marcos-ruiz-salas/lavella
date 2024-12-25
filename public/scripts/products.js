const products = document.querySelectorAll('.product');
products.forEach((product) => {
    const { id } = product;

    product.addEventListener('click', () => {
        // Redirect to: producto/id
        window.location.href = `/producto/${id}`;
    });
});