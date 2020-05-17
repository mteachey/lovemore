import React, { Component } from 'react'; 
import LoveMoreContext from '../LoveMoreContext';
import { Link } from 'react-router-dom';
import './ActivityList.css';

class ActivityList extends Component{
    static contextType = LoveMoreContext;

    render(){
        let linkURL = '/'
        if(this.props.typePage ==='activity'){
         linkURL = '/past-care'
        }
        else if(this.props.typePage ==='gratitude'){
            linkURL = '/past-gratitude'
           }
       
        let results = this.props.list;
        let topThree = [ results[0], results[1], results[2]];
        /*if(this.props.typePage ==='activity')
        {   const newIndex = results.length - 1;
            console.log(`these are the results ${results[newIndex].content}`)}*/
        
        return(
            <section className="recent-activities">
                <Link className="button-link" to={linkURL}>See All</Link>
                    <ul className="recent-activities-list">
                         <li>{this.props.listHeading}</li>
                        {topThree.map((entry,i)=> 
                            <li key={i} className="recent-activities-item"><span>{entry.content}</span><span>{entry.date_modified}</span></li>)}                        
                    </ul>
            </section>
        )
    }
}

export default ActivityList;