import React, { Component } from 'react'

import data from './data-pie'

import { ResponsivePie } from '@nivo/pie'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
class ChartPie extends Component {

    render() {
        return (
    <div className="chart">
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: 'purpleRed_green' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#000"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={12}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#fff"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        defs={[
            {
                id: 'medgreen',
                type: 'patternDots',
                background: '#5CBF40',
                color: 'rgba(255, 255, 255, 0.0)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lightestgreen',
                type: 'patternLines',
                background: '#FAFFD7',
                color: 'rgba(255, 255, 255, 0)',
                rotation: -45,                
                spacing: 10
            },
            {
                id: 'darkgreen',
                type: 'patternLines',
                background: '#E3ef69',
                color: 'rgba(255, 255, 255, 0)',
                rotation: -45,                
                spacing: 10
            },
            {
                id: 'lightgreen',
                type: 'patternLines',
                background: '#c4c816',
                color: 'rgba(255, 255, 255, 0)',
                rotation: -45,                
                spacing: 10
            }
        ]}
        fill={[
           /* {
                match: {
                    id: 'emotional'
                },
                id: 'medgreen'
            },
            {
                match: {
                    id: 'spiritual'
                },
                id: 'darkgreen'
            },
            {
                match: {
                    id: 'intellectual'
                },
                id: 'lightgreen'
            },
            
            {
                match: {
                    id: 'physical'
                },
                id: 'lightestgreen'
            },   */      
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                translateY: 40,
                itemWidth: 70,
                itemHeight: 18,
                itemsSpacing: 4,
                itemTextColor: '#000',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {symbolSize: 18,
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
    </div>
)}}

export default ChartPie;