import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'


const SolvesGraph = ({ solves })  => {

    const formatData = (solves) => {
        return solves.map( (solve) => {
            return [solve['date'], solve['time']]
        })
    }

    const chartOptions = {
        chart: {
            type: 'scatter'
        },
        title: null,
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                day: '%e of %b'
            }
        },
        yAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                second: '%S.%Ls',
                millisecond: '%S.%Ls'
            },
            title: {
                text: 'time'
            }
        },
        series: [{
            name: "cube solved",
            data: formatData(solves)
        }]
    }    

    return (
        <HighchartsReact
            highcharts={Highcharts}
            constructorType={'chart'}
            options={chartOptions}
        />
    )
}

export default SolvesGraph