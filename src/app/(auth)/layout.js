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
        <div className="p-8 flex flex-col gap-12">
            <ul>
                {navLinks.map(link => {
                    const isActive = pathname.startsWith(link.href);

                    return (
                        <li key={link.name} className={`text-[1.25rem] font-semibold${isActive ? ' text-red-500 underline' : ' text-blue-500'}`}>
                            <Link href={link.href}>
                                {link.name}
                            </Link>
                        </li>
                    )
                })}

                <li>
                    <Link className="text-[1.25rem] font-semibold text-gray-700 hover:underline" href='/'>
                        Back to Home
                    </Link>
                </li>
            </ul>

            {children}
        </div>
    )
}
