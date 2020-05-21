import React, { Component } from 'react'; 
import Chart from '../Chart/Chart.js';
import ChartPie from '../Chart/ChartPie.js';
import ChartLine from '../Chart/ChartLine.js';

class VisualData extends Component{
    render(){
        return(
            <section className="visual-data">
                    <Chart/>
                    <ChartPie/>
                    <ChartLine/>
            </section>
        )
    }
}

export default VisualData;