'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";

function OrderProduct() {
    const router = useRouter();

    const handleClick = () => {
        console.log('Placing your order');
        router.push('/');
    }

    return (
        <div className="p-8 flex flex-col gap-6">
            <h1 className="text-[2rem] font-semibold">Order Product Page</h1>

            <button onClick={handleClick} className="w-fit px-4 py-2 font-semibold rounded-md text-white bg-green-500 hover:bg-green-700">Place Order</button>
            
            <Link className="text-[1.25rem] font-semibold text-blue-700 hover:underline" href='/'>
                Back to Home
            </Link>
        </div>
    )
}

export default OrderProduct;
