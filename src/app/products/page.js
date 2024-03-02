import Link from "next/link";

function ProductsList() {
    return (
        <>
            <h1>List of products!</h1>
            <ul>
                <li>
                    <Link href='products/1'>Product 1</Link>
                </li>
                <li>
                    <Link href='products/2'>Product 2</Link>
                </li>
                <li>
                    {/* The replace prop replaces the current history */}
                    <Link href='products/3' replace>Product 3</Link>
                </li>
            </ul>
            <Link href='/'>Home</Link>
        </>
    );
}

export default ProductsList;
