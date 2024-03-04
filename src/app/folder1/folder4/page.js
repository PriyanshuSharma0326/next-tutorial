import Link from "next/link";

function FolderFour() {
    return (
        <div className="p-8">
            <p>Folder Four</p>
            <Link href='/folder1/folder3'>Folder 3</Link>
        </div>
    )
}

export default FolderFour;
