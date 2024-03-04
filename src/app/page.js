import Link from "next/link";

const navLinks = [
    {
        name: 'Blog',
        href: '/blog'
    },
    {
        name: 'Products',
        href: '/products'
    },
    {
        name: 'Login',
        href: '/login'
    },
    {
        name: 'About',
        href: '/about'
    },
    {
        name: 'Documents',
        href: '/docs'
    },
    {
        name: 'Order Product',
        href: '/order-product'
    },
    {
        name: 'Profile',
        href: '/profile'
    },
    {
        name: 'Dashboard',
        href: '/dashboard',
    }
];

function Home() {
    return (
        <div className="p-8">
            <h1 className="text-[1.75rem]">Welcome Home!</h1>

            <ul className="py-4">
                {navLinks.map(link => {
                    return (
                        <li key={link.name} className="font-bold text-blue-500 hover:text-blue-800 hover:underline text-[1.25rem]">
                            <Link href={link.href}>{link.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Home;
