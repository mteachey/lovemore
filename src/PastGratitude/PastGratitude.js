import React, { Component } from 'react';
import EntryList from '../EntryList/EntryList.js';
import FilterSortRow from '../FilterSortRow/FilterSortRow.js'
import LoveMoreContext from '../LoveMoreContext'
import './PastGratitude.css'

class PastGratitude extends Component{
    static contextType = LoveMoreContext;
    render(){
        return(
            <div className="past-gratitude">
                <header>
                    <h1>Your Gratitude Entries</h1>
                </header>
                <main>
    
                    <FilterSortRow  
                      filterOptions = {'date-only'}  
                      pageType={'gratitudes'}                
                     />
                    <EntryList
                     typeOfResults = {'gratitudes'}
                     results ={this.context.gratitude}
                    />                   
                </main>

            </div>
        )       
    }
}

export default PastGratitude;