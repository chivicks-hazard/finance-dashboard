import InfoCards from "./InfoCards"
import Transactions from "./Transactions"

const InfoSection = () => {
    return (
        <section id="info">
            <div className="p-6 mt-20 bg-bgsec">
                <InfoCards />
                <div className="flex flex-row justify-center items-center pt-6">
                    <Transactions />
                </div>
            </div>
        </section>
    )
}

export default InfoSection