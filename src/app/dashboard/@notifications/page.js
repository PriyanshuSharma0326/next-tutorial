import Card from "@/components/card";
import Link from "next/link";

function DefaultNotifications() {
    return (
        <Card>
            <Link className="font-semibold text-blue-500 hover:text-blue-700 hover:underline" href='/dashboard/archived'>Archived</Link>
            <p>Default Notifications</p>
        </Card>
    )
}

export default DefaultNotifications;
