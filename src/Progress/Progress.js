import React, { Component } from 'react'; 
import MostRecent from '../MostRecent/MostRecent';
import VisualData from '../VisualData/VisualData';
import GoalList from '../GoalList/GoalList';

class Progress extends Component{
    render(){
        return(
            <section className="progress">
               <MostRecent/>
               <VisualData/>
               <GoalList/>
            </section>
        )
    }
}

export default Progress;