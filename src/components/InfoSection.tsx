import Graphs from "./Graphs"
import InfoCards from "./InfoCards"
import Transactions from "./Transactions"

const InfoSection = () => {
    return (
        <section id="info">
            <div className="p-6 mt-20 bg-bgsec">
                <InfoCards />
                <div className="flex flex-row justify-between items-start pt-6">
                    <Graphs />
                    <Transactions />
                </div>
            </div>
        </section>
    )
}

export default InfoSection