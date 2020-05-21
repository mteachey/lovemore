import React, { Component } from 'react';
import EntryList from '../EntryList/EntryList.js';
import FilterSortRow from '../FilterSortRow/FilterSortRow.js'
import LoveMoreContext from '../LoveMoreContext'
import ButtonRow from '../ButtonRow/ButtonRow'
import Nav from '../Nav/Nav.js';

class PastCare extends Component{
    static contextType = LoveMoreContext;
    render(){
        return(
            <div className="past-care">
                <header>
                <Nav
                pageType={'interior'}
                />
                    <h1>Your Self-Care Entries</h1>
                </header>
                <main>
                    <FilterSortRow
                        filterOptions = {'all'}    
                        pageType={'selfcares'} 
                     />
                    <EntryList
                     typeOfResults = {'selfcares'}
                    /> 
                    <ButtonRow
                        links ={[{'/daily-form':'Today\'s Care & Gratitude'},{'/past-care':'Your Past Care Entries'},{'/past-gratitude':'Your Past Gratitudes'},{'/goal-form':'Set Your Goals'},{'/inspiration':'Get Inspired, Get Grateful'}]}
                        />                       
                </main>

            </div>
        )       
    }
}

export default PastCare;