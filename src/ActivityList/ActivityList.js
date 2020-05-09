import React, { Component } from 'react'; 
import LoveMoreContext from '../LoveMoreContext'
import './ActivityList.css';

class ActivityList extends Component{
    static contextType = LoveMoreContext;

    render(){

        //need to make this the most recent 3
        const selfcareObj = this.context.selfcare;
        console.log(selfcareObj);

        return(
            <section className="recent-activities">
                <header>
                    <h4>Some of Your Past Activity</h4>
                </header>
                <main>
                    <ul className="recent-activities-list">
                        <li>What you did</li>
                        {selfcareObj.map(entry=> 

                            <li key={entry.id} className="recent-activities-item">{entry.content} {entry.date}</li>)}
                        
                    </ul>

                </main>
            </section>
        )
    }
}

export default ActivityList;