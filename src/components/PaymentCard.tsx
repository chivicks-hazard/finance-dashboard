import React, { useEffect, useRef } from "react";
import Icon from "./Icon";

const PaymentCard: React.FC = () => {
    const payments: { title: string, icon: string, currentAmount: number, maxAmount: number }[] = [
        {
            title: "Account",
            icon: "account",
            currentAmount: 3241,
            maxAmount: 10000
        },
        {
            title: "Software",
            icon: "software",
            currentAmount: 241,
            maxAmount: 250
        },
        {
            title: "Rent House",
            icon: "rent",
            currentAmount: 1541,
            maxAmount: 52000
        },
        {
            title: "Food",
            icon: "food",
            currentAmount: 141,
            maxAmount: 1000
        }
    ];

    // Create an array of refs using useRef and map
    const paymentRefs = useRef(payments.map(() => React.createRef<HTMLDivElement>()));

    useEffect(() => {
        payments.forEach((payment, index) => {
            const targetWidth = (payment.currentAmount / payment.maxAmount) * 100;
            let currentWidth: number = 0;
            const increment = 1;

            const interval = setInterval(() => {
                if (paymentRefs.current[index]?.current) {
                    currentWidth = Math.min(currentWidth + increment, targetWidth);
                    paymentRefs.current[index].current.style.width = `${currentWidth}%`;

                    if (currentWidth >= targetWidth) {
                        clearInterval(interval);
                    }
                }
            }, 15);
            return () => clearInterval(interval);
        });
    }, [payments]);

    return (
        <div className="bg-bgmain p-3 flex flex-col space-y-10 justify-between items-start rounded-md">
            <h5 className="text-white text-lg">Payment</h5>
            <ul className="flex flex-col space-y-6">
                {payments.map((payment, index) => (
                    <li key={index} className="flex flex-row grow space-x-5 justify-between items-start">
                        <div className="bg-bgsec p-3 rounded-xl">
                            <Icon icon={payment.icon} className="block text-2xl text-green" />
                        </div>
                        <div className="flex flex-col space-y-3 w-full">
                            <p className="grid grid-cols-2 justify-between space-x-6">
                                <span className="text-white">{payment.title}</span>
                                <span className="justify-self-end">
                                    <span className="text-white">&#x24;{payment.currentAmount}</span>
                                    <span className="text-txtsec">/&#x24;{payment.maxAmount}</span>
                                </span>
                            </p>
                            <div className="bg-bgsec w-full rounded-xl h-2">
                                <div
                                    className="bg-green w-0 h-full rounded-xl ease-in duration-1500 hover:saturate-150 payment"
                                    ref={paymentRefs.current[index]}
                                ></div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PaymentCard;
