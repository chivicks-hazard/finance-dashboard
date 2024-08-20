import BarGraph from "./BarGraph"
import Icon from "./Icon"

const ActivityCard = () => {
    return (
        <div className="bg-bgmain p-3 flex flex-col space-y-20 justify-center rounded-md">
            <div className="flex flex-row justify-between space-x-20">
                <h5 className="text-white text-lg">Activity</h5>
                <div className="flex flex-row space-x-5 text-txtsec">
                        <p className="text-sm inline-flex flex-row items-center space-x-2">
                            <Icon icon="circle" className="text-green" />
                            <span>Earning</span>
                        </p>
                        <p className="text-sm inline-flex flex-row items-center space-x-2">
                            <Icon icon="circle" className="text-yellow" />
                            <span>Spent</span>
                        </p>
                    </div>
            </div>

            {/* The Bar Graph */}
            <BarGraph />
        </div>
    )
}

export default ActivityCard