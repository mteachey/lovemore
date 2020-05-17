import React, { Component } from 'react';
import EntryList from '../EntryList/EntryList.js';
import FilterSortRow from '../FilterSortRow/FilterSortRow.js'
import LoveMoreContext from '../LoveMoreContext'
import RandomQuote from '../RandomQuote/RandomQuote.js'

class Inspiration extends Component{
    static contextType = LoveMoreContext;
    render(){
        return(
            <div className="inspiration">
                <header>
                    <h1>Inspiration</h1>
                </header>
                <main>
                    <RandomQuote/>
                    <FilterSortRow
                       filterOptions = {'type-only'}  
                       pageType={'inspiration'}     
                     />
                    <EntryList
                     typeOfResults = {'inspiration'}
                     results ={this.context.inspiration}
                    />                   
                </main>

            </div>
        )       
    }
}

export default Inspiration;