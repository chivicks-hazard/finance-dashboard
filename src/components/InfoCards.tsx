import Icon from "./Icon"

const InfoCards = () => {
    const cards: {title: string, amount: number, icon: string}[] = [
        {
            title: "Balance",
            amount: 44000,
            icon: "wallet"
        },
        {
            title: "Income",
            amount: 50000,
            icon: "income"
        },
        {
            title: "Expenses",
            amount: 30000,
            icon: "expense"
        },
        {
            title: "Savings",
            amount: 20000,
            icon: "savings"
        }
    ]

    return (
        <section id="infoCards">
            <div className="grid grid-cols-4 gap-x-4">
                {cards.map((card, key) => {
                    return (
                        <div key={key} className="py-4 bg-bgmain flex flex-row justify-center items-center rounded-xl space-x-12">
                            <div className="bg-bgsec p-3 rounded-xl">
                                <Icon icon={card.icon} className="block text-2xl text-green" />
                            </div>
                            <div className="flex flex-col space-y-4">
                                <h3 className="text-txtsec font-medium">{card.title}</h3>
                                <p className="text-3xl text-white">&#x24; {card.amount}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default InfoCards