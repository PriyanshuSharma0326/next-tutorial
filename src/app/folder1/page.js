import Link from "next/link";

function FolderOne() {
    return (
        <div className="p-8">
            <p>Folder One</p>
            <Link href='/folder1/folder2'>Folder 2</Link>
        </div>
    )
}

export default FolderOne;
