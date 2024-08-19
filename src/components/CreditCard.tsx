import Icon from "./Icon"

const CreditCard = () => {
    return (
        <div className="bg-bgmain flex flex-col p-3 rounded-md">
            <div className="flex flex-row items-center justify-between">
                <h3 className="text-white text-lg">Credit Card</h3>
                <div className="bg-bgsec p-2 rounded-xl">
                    <Icon icon="add" className="block text-xl text-green" />
                </div>
            </div>
            <div className="flex flex-col bg-bgsec mt-5 rounded-md p-3 space-y-5">
                <h2 className="text-xl text-white">LOGO</h2>
                <h2 className="text-xl text-white">1234 5678 9012 ****</h2>
                <div className="flex flex-row space-x-20 items-center bg-bgter rounded-md p-2">
                    <div className="flex flex-col">
                        <h4 className="text-gray-500 text-[10px]">TOTAL BALANCE</h4>
                        <p className="text-gray-300 tezt-lg">1,234,567 USD</p>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="text-gray-500 text-[10px]">EXP. DATE</h4>
                        <p className="text-gray-300 text-lg">04 / 24</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreditCard