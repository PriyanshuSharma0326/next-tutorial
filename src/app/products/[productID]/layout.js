function ProductsDetailsLayout({ children }) {
    return (
        <div className="p-8 flex flex-col gap-4">
            {children}
            <h2>Featured Products</h2>
            {/* Carousel Here */}
        </div>
    );
}

export default ProductsDetailsLayout;
