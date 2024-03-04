function DashboardLayout({ children, users, revenue, notifications, login }) {
    // These props are slots for the dashboard route and
    // can be arranged with the help of layout.js 
    
    // Parallel routing helps in independent route handling

    const auth = true;

    return (
        <div className="p-8 flex flex-col gap-8">
            {auth ? 
                <>
                    <div>{children}</div>

                    <div className="flex gap-4">
                        <div className="flex flex-col gap-4">
                            <div>{users}</div>
                            <div>{revenue}</div>
                        </div>
                        <div className="flex">{notifications}</div>
                    </div>
                </> : <div className="flex">{login}</div>
            }
        </div>
    )
}

export default DashboardLayout;
