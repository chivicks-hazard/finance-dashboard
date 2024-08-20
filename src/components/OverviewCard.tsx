import Icon from "./Icon"
import LineGraph from "./LineGraph"

const OverviewCard = () => {
    return (
        <div className="bg-bgmain p-3 flex flex-col space-y-5 w-full justify-center rounded-md">
            <div className="flex flex-row justify-between space-x-40 items-center">
                <h4 className="text-white text-xl">Overview</h4>
                <div className="flex space-x-5">
                    <div className="flex flex-row space-x-5 text-txtsec">
                        <p className="text-sm inline-flex flex-row items-center space-x-2">
                            <Icon icon="circle" className="text-yellow" />
                            <span>Income</span>
                        </p>
                        <p className="text-sm inline-flex flex-row items-center space-x-2">
                            <Icon icon="circle" className="text-green" />
                            <span>Expenses</span>
                        </p>
                    </div>
                    <select name="range" id="range" className="bg-bgmain text-txtsec p-1 rounded-md border-2 border-bgsec">
                        <option value="monthly">Monthly</option>
                    </select>
                </div>
            </div>

            {/* The Line Graph */}
            <LineGraph />
        </div>
    )
}

export default OverviewCard