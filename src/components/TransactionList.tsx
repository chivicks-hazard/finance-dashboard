import image from "../assets/images/man-two.jpg"

const TransactionList = () => {
    return (
        <div className="bg-bgmain mt-5 px-3 pt-3 pb-6 h-full rounded-md">
            <div className="flex flex-row justify-between">
                <h4 className="text-white text-xl">Recent Transactions</h4>
                <a href="#" className="text-green">See All</a>
            </div>
            <ul className="flex flex-col mt-2 space-y-4">
                <li className="flex flex-row justify-between items-center border-b border-b-bgsec pb-4">
                    <div className="flex flex-row space-x-3">
                        <img src={image} alt="fake" className="rounded-md w-10" />
                        <div className="flex flex-col">
                            <h5 className="text-sm text-txtsec">Transfers from</h5>
                            <p className="text-md text-white">Jenny Wilson</p>
                        </div>
                    </div>
                    <span className="text-sm text-green">&#x2b; 54.00</span>
                </li>
                <li className="flex flex-row justify-between items-center border-b border-b-bgsec pb-4">
                    <div className="flex flex-row space-x-3">
                        <img src={image} alt="fake" className="rounded-md w-10" />
                        <div className="flex flex-col">
                            <h5 className="text-sm text-txtsec">Transfers from</h5>
                            <p className="text-md text-white">Jenny Wilson</p>
                        </div>
                    </div>
                    <span className="text-sm text-green">&#x2b; 54.00</span>
                </li>
                <li className="flex flex-row justify-between items-center border-b border-b-bgsec pb-4">
                    <div className="flex flex-row space-x-3">
                        <img src={image} alt="fake" className="rounded-md w-10" />
                        <div className="flex flex-col">
                            <h5 className="text-sm text-txtsec">Transfers from</h5>
                            <p className="text-md text-white">Jenny Wilson</p>
                        </div>
                    </div>
                    <span className="text-sm text-green">&#x2b; 54.00</span>
                </li>
                <li className="flex flex-row justify-between items-center border-b border-b-bgsec pb-4">
                    <div className="flex flex-row space-x-3">
                        <img src={image} alt="fake" className="rounded-md w-10" />
                        <div className="flex flex-col">
                            <h5 className="text-sm text-txtsec">Transfers from</h5>
                            <p className="text-md text-white">Jenny Wilson</p>
                        </div>
                    </div>
                    <span className="text-sm text-green">&#x2b; 54.00</span>
                </li>
            </ul>
        </div>
    )
}

export default TransactionList