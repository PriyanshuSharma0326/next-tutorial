'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
    const [input, setInput] = useState('');

    const changeHandler = (e) => {
        setInput(e.target.value);
    }

    return (
        <div className="p-8 flex flex-col gap-12">
            <input className="border-[2px] border-gray-900 w-1/3 px-4 py-2" value={input} onChange={changeHandler} />
            
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
