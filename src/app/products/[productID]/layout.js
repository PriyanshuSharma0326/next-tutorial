'use client';

function getRandomInt(count) {
    return Math.floor(Math.random() * count);
}

function ProductsDetailsLayout({ children }) {
    const random = getRandomInt(2);

    if(random == 1) {
        throw new Error('Error loading product!');
    }

    return (
        <div className="p-8 flex flex-col gap-4">
            {children}
            <h2>Featured Products</h2>
            {/* Carousel Here */}
        </div>
    );
}

export default ProductsDetailsLayout;
