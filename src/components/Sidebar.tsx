import Icon from "./Icon"

const Sidebar = () => {
    const dashboardLinks: {link: string, icon: string}[] = [
        {
            link: "Dashboard",
            icon: "home"
        },
        {
            link: "Transactions",
            icon: "transactions"
        },
        {
            link: "Wallet",
            icon: "wallet"
        },
        {
            link: "Analytics",
            icon: "analytics"
        },
        {
            link: "Personal",
            icon: "personal"
        },
        {
            link: "Message",
            icon: "message"
        },
        {
            link: "Settings",
            icon: "settings"
        }
    ]

    return (
        <section id="sidebar">
            <div className="fixed top-0 bottom-0 p-5 bg-bgmain w-2/12">
                <h1 className="text-white text-3xl p-2 mb-10">Penta</h1>
                <ul className="text-white space-y-5">
                    {dashboardLinks.map((link, key) => {
                        return (
                            <li className={`flex flex-row space-x-2 p-2 text-lg ${key === 0 ? "text-green" : ""}`}>
                                <Icon icon={link.icon} className="mt-1" /> <span>{link.link}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Sidebar