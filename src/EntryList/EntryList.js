import React, { Component } from 'react'; 
import LoveMoreContext from '../LoveMoreContext'
import EntryItem from '../EntryItem/EntryItem.js'
import './EntryList.css'

class EntryList extends Component{
    static contextType = LoveMoreContext;

    render(){
        let { results, typeOfResults} = this.props;
        let page = this.context.current_display[typeOfResults].page;
        let selectedType = this.context.current_display[typeOfResults].type;
        let selectedDate = this.context.current_display[typeOfResults].date_to;
        let selectedRating = this.context.current_display[typeOfResults].rating;

       //filters for type selected
      if(selectedType !== 'all' && selectedType){         
           results = results.filter(result=>
            result.type.includes(selectedType))         
       }
       //filter for date
      if(selectedDate !== 'all' && selectedDate){         
        results = results.filter(result=>
         result.date_modified.includes(selectedDate))         
        }
        //filter for rating
      if(selectedRating !== 'all' && selectedRating){         
        
        results = results.filter(result=>
           (result.rating).toString().includes(selectedRating.toString())   
        )        
        }
       
       //pagination of results
       let numberOfResults=results.length;
        let arrayStart = ((page - 1)*20);
        let arrayEnd = (arrayStart + 20);
        let pageCurrentPageResults = [];
  
        if(arrayEnd <= numberOfResults){
            for (let i=arrayStart;i<arrayEnd; i++){
            let resultsObj = results[i];
                pageCurrentPageResults = [...pageCurrentPageResults, resultsObj]
            }
        }
        else{
            for (let i=arrayStart;i<numberOfResults; i++){
                let resultsObj = results[i];
                pageCurrentPageResults = [...pageCurrentPageResults, resultsObj]
            }
        }
        

        results = pageCurrentPageResults;
        
        return(
            <section className="results-list">
                    <ul className="result-list">                      
                        {results.map((entry,i)=> 
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