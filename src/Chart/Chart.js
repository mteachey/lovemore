import React, { Component } from 'react'

import data from './data'
import config from './config'
import { ResponsiveBar } from '@nivo/bar'
import './Chart.css'

class Chart extends Component {

    render() {
        return (
            <div className="chart">
                <ResponsiveBar
                    data={data}
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