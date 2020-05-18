import React, { Component } from 'react'; 
import LoveMoreContext from '../LoveMoreContext'
import './FilterSortRow.css';
//import config from '../config.js'

class FilterSortRow extends Component{
    static contextType = LoveMoreContext;

     nextPage=(direction)=>{
        console.log(`nextpage ran ${direction}`)
        this.context.updateCurrentPage(this.props.pageType, direction)
     }


     updateType=(typeSelected)=>{
        this.context.updateTypeSelected(this.props.pageType, typeSelected);
        //updatePageResults(type, this.props.pageType)
        console.log(`updateType ran ${typeSelected}`)
     }

    render(){
        let filter = '';
        if(this.props.filterOptions==='date-only'){
            filter = (
             <form className="filter-sort-control" onSubmit={e => this.handleSubmitDate(e)}>
                <div>
                    <label htmlFor="search-date">Search For a Date</label>
                    <input id="search_date" name="search_date" type="date"/>
                </div>
                <button type="submit">Search</button>
            </form>
            )
        }
        else if(this.props.filterOptions==='next20-only'){
            filter =  (
            
                <div>
                 <button onClick={e => this.nextPage('forward')}>Next 20</button>
                 <button onClick = {e =>this.nextPage('back')}>Back</button>
                 <button onClick = {e =>this.nextPage('reset')}>Reset</button>
                </div>
            
            )}
        else if(this.props.filterOptions==='type-only'){
            filter =  (
                <div>
                <label htmlFor="type_filter">Filter by Type</label>                    
                    <select id="type_filter"
                    onChange={e=>this.updateType(e.target.value)}
                    >
                        <option value="emotional">emotional</option>
                        <option value="spiritual">spiritual</option>
                        <option value="physical">physical</option>
                        <option value="intellectual">intellectual</option>
                    </select>
                </div>
            )}
        else if(this.props.filterOptions==='all')
            {  filter = (
                <div>
                <button  onClick={e => this.nextPage('forward')}>Next 20</button>
                <button onClick = {e =>this.nextPage('back')}>Back</button>
                <button onClick = {e =>this.nextPage('reset')}>Reset</button>
               
                <form className="filter-sort-control">
                    <div>
                        <label htmlFor="search-date">Search For a Date</label>
                        <input id="search-date" name="search-date" type="date"/>
                    </div>
                    <div>
                        <label htmlFor="sort">Sort By</label>
                        <select id="sort">
                            <option value="by_date">Date</option>
                            <option value="by_rating">Rating</option>
                        </select>
                    </div>
                    <div>
                    <label htmlFor="type_filter">Filter by Type</label>                    
                        <select id="type_filter"
                        onChange={e=>this.updateType(e.target.value)}
                        >
                            <option value="emotional">emotional</option>
                            <option value="spiritual">spiritual</option>
                            <option value="physical">physical</option>
                            <option value="intellectual">intellectual</option>
                        </select>
                    </div>
                    <div>
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
                </div>)
            }
    
        return(    
                   filter
        )
    }
}

export default FilterSortRow;