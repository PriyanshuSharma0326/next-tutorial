function DashboardLayout({ children, users, revenue, notifications }) {
    // Helps in independent route handling
    return (
        <div className="p-8">
            <div>{children}</div>

            <div className="flex">
                <div className="flex flex-col gap-4">
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>
                <div className="flex">{notifications}</div>
            </div>
        </div>
    )
}

export default DashboardLayout;
