import React, { Component } from 'react';
import EntryList from '../EntryList/EntryList.js';
import FilterSortRow from '../FilterSortRow/FilterSortRow.js'
import LoveMoreContext from '../LoveMoreContext'
import ButtonRow from '../ButtonRow/ButtonRow'
import Nav from '../Nav/Nav.js';

class PastGratitude extends Component{
    static contextType = LoveMoreContext;
    render(){
        return(
            <div className="past-gratitude">
                <header>
                <Nav
                pageType={'interior'}
                />
                    <h2>Your Gratitude Entries</h2>
                </header>
                <main>
    
                    <FilterSortRow  
                      filterOptions = {'date-only'}  
                      pageType={'gratitudes'}                
                     />
                    <EntryList
                     typeOfResults = {'gratitudes'}
                    />    
                    <ButtonRow
                        links ={[{'/dashboard':'Your Dashboard'},{'/daily-form':'Today\'s Care & Gratitude'},{'/past-care':'Your Past Care Entries'},{'/goal-form':'Set Your Goals'},{'/inspiration':'Get Inspired, Get Grateful'}]}
                        />               
                </main>

            </div>
        )       
    }
}

export default PastGratitude;