import ActivityCard from "./ActivityCard"
import OverviewCard from "./OverviewCard"
import PaymentCard from "./PaymentCard"

const Graphs = () => {
    return (
        <div className="flex flex-col items-center">
            <OverviewCard />
            <div className="grid grid-cols-2 gap-3 mt-6">
                <ActivityCard />
                <PaymentCard />
            </div>
        </div>
    )
}

export default Graphs