import Link from "next/link";
import Image from "next/image";

import wondersImages from "./wonders";

function PhotoFeed() {
    return (
        <main className="container mx-auto flex flex-col gap-6">
            <h1 className="text-center text-3xl font-bold my-4">Wonders of the World</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {wondersImages.map(({ id, src, name,  }) => {
                    return (
                        <Link key={id} href={`/photo-feed/${id}`}>
                            <Image 
                                alt={name} 
                                src={src} 
                                className="w-full object-cover aspect-square border-[3px] rounded-2xl border-gray-800"
                            />
                        </Link>
                    )
                })}
            </div>
        </main>
    )
}

export default PhotoFeed;
