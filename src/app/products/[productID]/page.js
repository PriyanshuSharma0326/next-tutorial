export const generateMetadata = async ({ params }) => {
    // Making this function async is a choice
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`iPhone ${params.productID}`)
        }, 100)
    })

    return {
        title: `Product ${title}`,
    };
};

function ProductsDetails({ params }) {
    return (
        <h1>Product ID: {params.productID}</h1>
    );
}

export default ProductsDetails;
