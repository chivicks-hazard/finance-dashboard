import CreditCard from "./CreditCard"
import TransactionList from "./TransactionList"

const Transactions = () => {
    return (
        <section>
            <div className="flex flex-col">
                <CreditCard />
                <TransactionList />
            </div>
        </section>
    )
}

export default Transactions