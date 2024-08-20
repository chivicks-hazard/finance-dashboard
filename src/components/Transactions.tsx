import CreditCard from "./CreditCard"
import TransactionList from "./TransactionList"

const Transactions = () => {
    return (
        <section>
            <div className="flex flex-col space-y-10">
                <CreditCard />
                <TransactionList />
            </div>
        </section>
    )
}

export default Transactions