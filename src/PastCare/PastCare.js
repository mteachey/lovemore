import React, { Component } from 'react';
import EntryList from '../EntryList/EntryList.js';
import FilterSortRow from '../FilterSortRow/FilterSortRow.js'
import LoveMoreContext from '../LoveMoreContext'

class PastCare extends Component{
    static contextType = LoveMoreContext;
    render(){
        return(
            <div className="past-care">
                <header>
                    <h1>Your Self-Care Entries</h1>
                </header>
                <main>
                    <FilterSortRow
                        filterOptions = {'all'}    
                        pageType={'selfcares'} 
                     />
                    <EntryList
                     typeOfResults = {'selfcares'}
                     results ={this.context.selfcares}
                    />                   
                </main>

            </div>
        )       
    }
}

export default PastCare;