import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const verticalLinePlugin = {
    id: 'verticalLinePlugin',
    afterDraw: (chart: any) => {
        if (chart.tooltip._active && chart.tooltip._active.length) {
            const ctx = chart.ctx;
            ctx.save();

            const activePoint = chart.tooltip._active[0];
            const x = activePoint.element.x;
            const yAxis = chart.scales.y;
            const datasetIndex = activePoint.datasetIndex;
            const dataset = chart.data.datasets[datasetIndex];

            // Draw a vertical line on hover
            ctx.beginPath();
            ctx.moveTo(x, yAxis.top);
            ctx.lineTo(x, yAxis.bottom);
            ctx.setLineDash([5, 5]);
            ctx.lineWidth = 1;
            ctx.strokeStyle = dataset.borderColor; // Customize the color here
            ctx.stroke();
            ctx.restore();
        }
    }
}

const LineGraph: React.FC = () => {
    const chartRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');

            if (ctx) {
                const chart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', "Aug", "Sep", "Oct", "Nov", "Dec"],
                        datasets: [
                            {
                                label: 'Income',
                                data: [210, 420, 165, 259, 292, 380, 328, 110, 420, 158, 257, 422],
                                borderColor: "#20cc50",
                                borderWidth: 2,
                                fill: false,
                                tension: 0.4,
                                pointStyle: false
                            },
                            {
                                label: 'Expenses',
                                data: [280, 160, 270, 135, 425, 322, 230, 410, 120, 315, 425, 249],
                                borderColor: "#febf22",
                                borderWidth: 2,
                                fill: false,
                                tension: 0.4,
                                pointStyle: false
                            }
                        ]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true,
                                max: 500,
                                ticks: {
                                    callback: (value, index) => {
                                        if (index === 0) {
                                            return 0;
                                        } else if (index % 2 === 0) {
                                            return '$' + value;
                                        }
                                    }
                                },
                                grid: {
                                    color: '#3d414a',
                                    lineWidth: 0.5
                                },
                                border: {
                                    dash: [5, 5, 5, 5, 5, 5],
                                }
                            },
                            x: {
                                border: {
                                    width: 1,
                                    color: '#3d414a'
                                }
                            }
                        },
                        plugins: {
                            legend: {
                                display: false
                            },
                            tooltip: {
                                callbacks: {
                                    label: function (context) {
                                        return `${context.dataset.label}: $${context.raw}`
                                    }
                                }
                            }
                        }
                    },
                    plugins: [verticalLinePlugin]
                });

                return () => {
                    chart.destroy();
                }
            }
        }

    }, [])

    return (
        <div className='w-full'>
            <canvas ref={chartRef} className="w-full"></canvas>
        </div>
    )
};

export default LineGraph;
