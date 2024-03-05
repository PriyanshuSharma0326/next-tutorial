import Image from "next/image";
import Modal from "@/components/modal";
import wondersImages from "@/app/photo-feed/wonders";

export default function PhotoModal({ params }) {
    const photo = wondersImages.find(img => {
        return img.id == params.photoID
    });

    return (
        <Modal>
            <Image
                alt={photo.name}
                src={photo.src}
            />

            <div className=" bg-white p-4">
                <h2 className="text-[1.75rem] font-semibold">{photo.name}</h2>
                <h3 className="font-semibold text-[1.15rem] text-gray-500">Photo by: {photo.photographer}</h3>
                <h3 className="font-semibold text-[1.15rem] text-gray-500">Location: {photo.location}</h3>
            </div>
        </Modal>
    );
}
