import React from 'react'
import ReactApexChart from 'react-apexcharts';

const PieChart = ({
    width = '100%',
    height = '380px',
    text
}) => {
    const chartData = {
        series: [44, 55, 67, 83],
        options: {
            chart: {
                height: 350,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: '22px',
                        },
                        value: {
                            fontSize: '16px',
                        },
                        total: {
                            show: true,
                            label: 'Total',
                            formatter: function (w) {
                                // By default this function returns the average of all series. The below is just an example to show the use of a custom formatter function
                                return 249;
                            },
                        },
                    },
                },
            },
            labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
        },
    };
    return (
        <>
            <div id="chart" className={[`w-[${width}] h-[${height}] border border-spacing-1 p-2 rounded-lg my-4`]}>
                <h2 className='text-gray-800 text-2xl font-semibold text-start px-2 py-1'>{text}</h2>
                <ReactApexChart options={chartData.options} series={chartData.series} type="radialBar" height={height} />
            </div>
        </>
    )
}

export default PieChart