import { ResponsiveLine } from '@nivo/line'
import React, { Component } from 'react';
import { CreateMoodEnergyData } from '../Functions/CreateMoodEnergyData'
import LoveMoreContext from '../LoveMoreContext.js';

import data from './data-line'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
class ChartLine extends Component {
    static contextType = LoveMoreContext;

    render() {
        let array = this.context.moods;
        let lineData=data;
        let moodEnergyData=[];
        if(array[0].date_formatted)
        { moodEnergyData = CreateMoodEnergyData(array);
            lineData = moodEnergyData;
        }
        


        return (
    <div className="chart chart-line">
    <ResponsiveLine
        data={lineData}
        margin={{ top: 30, right: 30, bottom: 90, left: 60 }}
        xScale={{ type: 'point'}}
        yScale={{ type: 'linear', min: '0', max: '5', stacked: false, reverse: false }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'day',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'your rating',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        colors={{ scheme: 'purpleRed_green' }}
        pointSize={2}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        defs={[
            {
                id: 'medgreen',
                borderColor: '#5CBF40',
            },
        ]}
        stroke={[
            {
                 match: {
                     id: 'mood'
                 },
                 id: 'medgreen'
            }]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 10,
                translateY: 80,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 100,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        />
        </div>
    )}}
    
    export default ChartLine;