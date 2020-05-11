import React, { Component } from 'react';
import EntryList from '../EntryList/EntryList.js';
import FilterSortRow from '../FilterSortRow/FilterSortRow.js'
import LoveMoreContext from '../LoveMoreContext'

class Inspiration extends Component{
    static contextType = LoveMoreContext;
    render(){
        return(
            <div className="past-care">
                <header>
                    <h1>Your Self-Care Entries</h1>
                </header>
                <main>
                    <FilterSortRow
                     
                     />
                    <EntryList
                     typeOfResults = {'Inspiration'}
                     results ={this.context.inspiration}
                    />                   
                </main>

            </div>
        )       
    }
}

export default Inspiration;