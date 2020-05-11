import React, { Component } from 'react'; 
import LoveMoreContext from '../LoveMoreContext'
import EntryItem from '../EntryItem/EntryItem.js'
import './EntryList.css'

class EntryList extends Component{
    static contextType = LoveMoreContext;

    
    
    render(){
        const { results, typeOfResults} = this.props;
        console.log(typeOfResults)
        return(
            <section className="results-list">
                <main>
                    <ul className="result-list">                      
                        {results.map(entry=> 
                        <EntryItem
                           typeOfResults = {typeOfResults}
                           key={entry.id}
                           {...entry}
                        />
                        )}
                    </ul>

                </main>
            </section>
        )
    }
}

export default EntryList;