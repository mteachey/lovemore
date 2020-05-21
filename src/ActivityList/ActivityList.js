import React, { Component } from 'react'; 
import LoveMoreContext from '../LoveMoreContext';
import { Link } from 'react-router-dom';

class ActivityList extends Component{
    static contextType = LoveMoreContext;

    render(){
        let linkURL = '/'
        if(this.props.typePage ==='selfcares'){
         linkURL = '/past-care'
        }
        else if(this.props.typePage ==='gratitudes'){
            linkURL = '/past-gratitude'
           }
       
        let results = this.props.list;
        let sortedResults = results;
        if(results[0].date_modified){
            sortedResults = results.sort((a,b)=>
                b.date_modified > a.date_modified ? 1 : b.date_modified < a.date_modified ? -1 : 0
            );
        }
        let topThree = [ sortedResults[0], sortedResults[1], sortedResults[2]];

        //version 2
        let randomThree = [];
        if(results[0].date_modified){
            for(let i=0; i<3 ; i++){
                let newRandomResult = sortedResults[Math.floor(Math.random() * results.length)]
                randomThree.push(newRandomResult);
            }
        }

        return(
            <section className="recent-activities">
                <Link className="button-link" to={linkURL}>See All</Link>
                    <ul className="recent-activities-list">
                         <li >{this.props.listHeading}</li>
                        {topThree.map((entry,i)=> 
                            <li key={i} className="recent-activities-item"><span>{entry.content}</span><span>{entry.date_formatted}</span></li>)}                        
                    </ul>
            </section>
        )
    }
}

export default ActivityList;