import React, { Component } from 'react'; 
import LoveMoreContext from '../LoveMoreContext'
import './FilterSortRow.css'

class FilterSortRow extends Component{
    static contextType = LoveMoreContext;
    render(){
       
        return(
            <section className="filter-section">
                <form>
                    <label htmlFor="search-date">Search For a Date</label>
                    <input id="search-date" name="search-date" type="date"/>
                    <label htmlFor="sort">Sort By</label>
                    <select id="sort">
                        <option value="by_date">Date</option>
                        <option value="by_rating">Rating</option>
                    </select>
                    <div className="optional-filters">
                    <label htmlFor="type_filter">Filter by Type</label>                    
                        <select id="type_filter">
                            <option value="emotional">emotional</option>
                            <option value="spiritual">spiritual</option>
                            <option value="physical">physical</option>
                            <option value="intellectual">intellectual</option>
                        </select>
                        <label htmlFor="rating_filter">Filter by Your Rating</label>
                        <select id="rating_filter">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </form>             
            </section>
        )
    }
}

export default FilterSortRow;