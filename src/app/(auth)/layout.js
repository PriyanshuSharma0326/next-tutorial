'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import './styles.css';

const navLinks = [
    {
        name: 'Register',
        href: '/register'
    },
    {
        name: 'Login',
        href: '/login'
    },
    {
        name: 'Forgot Password',
        href: '/forgot-password'
    },
];

export default function AuthLayout({ children }) {
    const pathname = usePathname();

    return (
        <>
            <ul>
                {navLinks.map(link => {
                    const isActive = pathname.startsWith(link.href);

                    return (
                        <li key={link.name} className={`mr-4${isActive ? ' font-bold' : ' text-blue-500'}`}>
                            <Link href={link.href}>
                                {link.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>

            {children}
        </>
    )
}
