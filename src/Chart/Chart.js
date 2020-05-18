import React, { Component } from 'react'

//import data from './data'
import config from './config'
import { ResponsiveBar } from '@nivo/bar'
import './Chart.css'
import LoveMoreContext from '../LoveMoreContext.js'

class Chart extends Component {
static contextType = LoveMoreContext;

calculateTypeProgress=()=>{
    let progressIntellectual = 0;
    let progressEmotional =0;
    let progressPhysical = 0;
    let progressSpiritual = 0;

    this.context.selfcares.forEach(obj=>{
        if(obj.type==="intellectual"){
            progressIntellectual = progressIntellectual+1
        }
        else if(obj.type==="emotional"){
            progressEmotional = progressEmotional+1
        }
        else if(obj.type==="spiritual"){
            progressSpiritual = progressSpiritual+1
        }
        else if(obj.type==="physical"){
            progressPhysical = progressPhysical+1
        }
    })
    let progressArray = [progressIntellectual,progressEmotional, progressSpiritual,progressPhysical]
    return progressArray
}


    render() {
        let progressArray = this.calculateTypeProgress();
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