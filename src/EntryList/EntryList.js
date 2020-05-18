import React, { Component } from 'react'; 
import LoveMoreContext from '../LoveMoreContext'
import EntryItem from '../EntryItem/EntryItem.js'
import './EntryList.css'

class EntryList extends Component{
    static contextType = LoveMoreContext;

    render(){
        let {typeOfResults} = this.props;
        let results = this.context[typeOfResults];
        let page = this.context.current_display[typeOfResults].page;
        let selectedType = this.context.current_display[typeOfResults].type;
        let selectedDate = this.context.current_display[typeOfResults].date_to;
        let selectedRating = this.context.current_display[typeOfResults].rating;
        let sortedResults = results;
        if(results[0].date_modified){
            sortedResults = results.sort((a,b)=>
                b.date_modified > a.date_modified ? 1 : b.date_modified < a.date_modified ? -1 : 0
            );
        }
          
        //filters for type selected
        if(selectedType !== 'all' && selectedType){         
            sortedResults = sortedResults.filter(result=>
                result.type.includes(selectedType))         
        }
        //filter for date
        if(selectedDate !== 'all' && selectedDate){         
            sortedResults = sortedResults.filter(result=>
            result.date_modified.includes(selectedDate))         
            }
            //filter for rating
        if(selectedRating !== 'all' && selectedRating){         
            sortedResults = sortedResults.filter(result=>
            (result.rating).toString().includes(selectedRating.toString())   
            )        
        }
       
       //pagination of results
        let numberOfResults=sortedResults.length;
        let arrayStart = ((page - 1)*20);
        let arrayEnd = (arrayStart + 20);
        let pageCurrentPageResults = [];
  
        if(arrayEnd <= numberOfResults){
            for (let i=arrayStart;i<arrayEnd; i++){
            let resultsObj = sortedResults[i];
                pageCurrentPageResults = [...pageCurrentPageResults, resultsObj]
            }
        }
        else{
            for (let i=arrayStart;i<numberOfResults; i++){
                let resultsObj = sortedResults[i];
                pageCurrentPageResults = [...pageCurrentPageResults, resultsObj]
            }
        }
        

        sortedResults = pageCurrentPageResults;
        
        return(
            <section className="results-list">
                    <ul className="result-list">                      
                        {sortedResults.map((entry,i)=> 
                        <EntryItem
                           typeOfResults = {typeOfResults}
                           key={i}
                           {...entry}
                        />
                        )}
                    </ul>
            </section>
        )
    }
}

export default EntryList;