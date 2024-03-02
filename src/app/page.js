import Link from "next/link";

function Home() {
    return (
        <>
            <h1>Welcome Home!</h1>

            <ul>
                <li>
                    <Link href='/blog'>Blog</Link>
                </li>
                <li>
                    <Link href='/products'>Products</Link>
                </li>
            </ul>
        </>
    );
}

export default Home;
