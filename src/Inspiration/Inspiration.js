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
                    <ButtonRow
                        links ={[{'/daily-form':'Today\'s Care & Gratitude'},{'/past-care':'Your Past Care Entries'},{'/past-gratitude':'Your Past Gratitudes'},{'/goal-form':'Set Your Goals'},{'/inspiration':'Get Inspired, Get Grateful'}]}
                        />                  
                </main>

            </div>
        )       
    }
}

export default Inspiration;