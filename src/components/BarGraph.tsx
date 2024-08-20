import { Chart } from "chart.js";
import { useEffect, useRef } from "react";

const BarGraph: React.FC = () => {
    const chartRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');

            if (ctx) {
                const chart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
                        datasets: [
                            {
                                label: "Spent",
                                data: [1023, 459, 890, 1392, 1023, 959, 890],
                                barThickness: 10,
                                backgroundColor: "#febf22",
                            },
                            {
                                label: "Earning",
                                data: [1230, 1394, 803, 2495, 930, 390, 800],
                                barThickness: 10,
                                backgroundColor: "#20cc50",
                                borderRadius: 3,
                            }
                        ]
                    },
                    options: {
                        plugins: {
                            legend: {
                                display: false
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                stacked: true,
                                max: 3000,
                                ticks: {
                                    callback: (value, index) => {
                                        if (index === 0) {
                                            return 0;
                                        } else if (index % 2 === 0) {
                                            let tick: string = value.toString();
                                            let editedTick: string = tick.substring(0, tick.length - 3);
                                            return `$${editedTick}K`;
                                        }
                                    }
                                },
                            },
                            x: {
                                stacked: true,
                                grid: {
                                    color: '#3d414a',
                                    lineWidth: 0.5,
                                    offset: false,
                                    tickWidth: 0,
                                },
                                border: {
                                    width: 1,
                                    color: '#3d414a',
                                    dash: [4, 4, 4, 4, 4],
                                },
                            }
                        }
                    }
                });

                return () => {
                    chart.destroy();
                }
            }
        }
    }, []);

    return (
        <div className="h-full justify-self-end">
            <canvas ref={chartRef}></canvas>
        </div>
    )
}

export default BarGraph