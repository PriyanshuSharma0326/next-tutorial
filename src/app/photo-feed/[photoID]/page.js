'use client';

import Image from "next/image";
import wondersImages from "../wonders"

function PhotoDetail({ params }) {
    const photo = wondersImages.find(img => {
        return img.id == params.photoID
    });

    return (
        <div className="container mx-auto my-10">
            <div className="w-1/2 mx-auto flex flex-col gap-4">
                <h1 className="text-center text-3xl font-bold">{photo?.name}</h1>

                <Image 
                    src={photo?.src} 
                    alt={photo?.name} 
                    className="w-full"
                />

                <p className="font-semibold text-[1.15rem]">Photo By: {photo.photographer}</p>
                <p className="font-semibold text-[1.15rem]">Location: {photo.location}</p>
            </div>
        </div>
    )
}

export default PhotoDetail;
