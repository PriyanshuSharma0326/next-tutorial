import Card from "@/components/card";
import Link from "next/link";

function ArchivedNotifications() {
    return (
        <Card>
            <Link className="font-semibold text-blue-500 hover:text-blue-700 hover:underline" href='/dashboard'>Default</Link>
            <p>Archived Notifications</p>
        </Card>
    )
}

export default ArchivedNotifications;
