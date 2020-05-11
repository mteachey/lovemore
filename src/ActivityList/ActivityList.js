import React, { Component } from 'react'; 
import LoveMoreContext from '../LoveMoreContext'
import './ActivityList.css';

class ActivityList extends Component{
    static contextType = LoveMoreContext;

    render(){
       
        let results = this.props.list
        
        return(
            <section className="recent-activities">
                <main>
                    <ul className="recent-activities-list">
                         <li>{this.props.listHeading}</li>
                        {results.map(entry=> 
                            <li key={entry.id} className="recent-activities-item"><span>{entry.content}</span><span>{entry.date}</span></li>)}                        
                    </ul>
                </main>
            </section>
        )
    }
}

export default ActivityList;