import React, { Component } from 'react';
import EntryList from '../EntryList/EntryList.js';
import FilterSortRow from '../FilterSortRow/FilterSortRow.js'
import LoveMoreContext from '../LoveMoreContext'
import './PastGratitude.css'
import ButtonRow from '../ButtonRow/ButtonRow'

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
                    />    
                    <ButtonRow
                        links ={[{'/daily-form':'Today\'s Care & Gratitude'},{'/past-care':'Your Past Care Entries'},{'/past-gratitude':'Your Past Gratitudes'},{'/goal-form':'Set Your Goals'},{'/inspiration':'Get Inspired, Get Grateful'}]}
                        />               
                </main>

            </div>
        )       
    }
}

export default PastGratitude;