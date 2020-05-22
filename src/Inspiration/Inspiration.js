import React, { Component } from 'react';
import EntryList from '../EntryList/EntryList.js';
import FilterSortRow from '../FilterSortRow/FilterSortRow.js'
import LoveMoreContext from '../LoveMoreContext'
import RandomQuote from '../RandomQuote/RandomQuote.js'
import ButtonRow from '../ButtonRow/ButtonRow'
import Nav from '../Nav/Nav.js';

class Inspiration extends Component{
    static contextType = LoveMoreContext;
    render(){
        return(
            <div className="inspiration">
                <header>
                    <Nav
                    pageType={'interior'}
                    />
                    <h2>Inspiration</h2>
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
                    <ButtonRow
                        links ={[{'/dashboard':'Your Dashboard'},{'/daily-form':'Today\'s Care & Gratitude'},{'/past-care':'Your Past Care Entries'},{'/past-gratitude':'Your Past Gratitudes'},{'/goal-form':'Set Your Goals'}]}
                        />                  
                </main>

            </div>
        )       
    }
}

export default Inspiration;