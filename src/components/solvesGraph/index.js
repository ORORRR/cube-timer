import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { msToTime } from '../../utils/time'


const SolvesGraph = ({ solves })  => {

    const formatData = (solves) => {
        return solves.map( (solve, i) => {
            return {
                y: solve['time'], 
                x: i+1, 
                date: solve['date'], 
                scramble: solve['scramble']
            }
        })
    }

    const chartOptions = {
        chart: {
            type: 'scatter'
        },
        title: null,
        xAxis: {
            type: 'linear'
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
        }],
        tooltip: {
            formatter: function() {
                return 'time : <b>' + msToTime(this.y)+ '</b>s<br/> date :<b>' +  Highcharts.dateFormat('%e of %b',
                    new Date( this.point.options.date)) + '</b> <br/> scramble : <b>'+ this.point.options.scramble.join(' ') +'</b>';
                
            }
        }
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