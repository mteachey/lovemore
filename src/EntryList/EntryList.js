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
        //console.log(`this is the current selectedType ${this.context.current_display[typeOfResults]}`);
        console.log(`this is the sT ${selectedType}`);
       
       // let date_to = this.context.current_display[typeOfResults].date_to;
       // let date_from = this.context.current_display[typeOfResults].date_from;

       //filters for type selected
      if(selectedType !== 'all' && selectedType){
          
           results = results.filter(result=>
            result.type.includes(selectedType))
           
       }
       
       //pagination of results
       /* let numberOfResults=results.length;
        console.log(`this is the page ${page}`);
        let arrayStart = ((page - 1)*20);
        console.log(arrayStart);
        let arrayEnd = (arrayStart + 20);
        let pageCurrentPageResults = []
  
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
        results = pageCurrentPageResults;*/
        
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