import React, { Component } from 'react'

//import data from './data'
import config from './config'
import { ResponsiveBar } from '@nivo/bar'
import './Chart.css'
import LoveMoreContext from '../LoveMoreContext.js';
import { CreateProgressArray } from '../Functions/CreateProgressArray'

class Chart extends Component {
static contextType = LoveMoreContext;

    render() {
        let array = this.context.selfcares;
        let progressArray=[];
        if(array!==0)
        { progressArray = CreateProgressArray(array);
        }
        let goals = this.context.goals;
        let progressData = [
            {
                "type":"E",
                "progress":progressArray[1],
                "goal":Number(goals.emotional),
            },
            {
                "type":"S",
                "progress":progressArray[2],
                "goal":Number(goals.spiritual),
            },
            {
                "type":"I",
                "progress":progressArray[0],
                "goal":Number(goals.intellectual),
            },
            {
                "type":"P",
                "progress":progressArray[3],
                "goal":Number(goals.physical),
            }
        ]

        return (
            <div className="chart">
                <ResponsiveBar
                    data={progressData}
                    keys={config.keys}
                    indexBy="type"
                    margin={config.margin}
                    padding={0.1}
                    colors="nivo"
                    colorBy="id"
                    defs={config.defs}
                    fill={config.fill}
                    borderColor="inherit:darker(1.6)"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={config.axisBottom}
                    axisLeft={config.axisLeft}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor="inherit:darker(1.6)"
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    legends={config.legends}
                />
            </div>
        )
    }
}

export default Chart;