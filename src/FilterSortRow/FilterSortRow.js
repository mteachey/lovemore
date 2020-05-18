import React, { Component } from 'react'; 
import LoveMoreContext from '../LoveMoreContext'
import './FilterSortRow.css';
import PaginationButtons from '../PaginationButtons/PaginationButtons.js'
//import config from '../config.js'

class FilterSortRow extends Component{
    static contextType = LoveMoreContext;

     updateType=(typeSelected)=>{
        this.context.updateTypeSelected(this.props.pageType, typeSelected);
        //updatePageResults(type, this.props.pageType)
        console.log(`updateType ran ${typeSelected}`)
     }

     updateRating=(ratingSelected)=>{
        this.context.updateRatingSelected(this.props.pageType, ratingSelected);
        //updatePageResults(type, this.props.pageType)
        
     }

    handleSubmitDate=(e)=>{
        e.preventDefault()
        const {search_date} = e.target;
      /*  console.log(search_date.value);
        let month = search_date.value.slice(5,7);
        let day = search_date.value.slice(8,10);
        let year = search_date.value.slice(0,4);
        console.log(month, day, year);*/
        this.context.updateDateSelected(this.props.pageType,search_date.value)
    }

    render(){
        let filter = '';
        if(this.props.filterOptions==='date-only'){
            filter = (
                <div>
                    <PaginationButtons 
                    pageType={this.props.pageType}
                    />
                    <form className="filter-sort-control" onSubmit={e => this.handleSubmitDate(e)}>        
                        <label htmlFor="search_date">Search For a Date</label>
                        <input id="search_date" name="search_date" type="date"/>
                        <button type="submit">Search</button>
                    </form>
                    <button onClick = {e => this.context.updateDateSelected(this.props.pageType,'all')}>All Dates</button>
                </div>
            )
        }
        else if(this.props.filterOptions==='type-only'){
            filter =  (

                <div>
                    <PaginationButtons 
                        pageType={this.props.pageType}
                        />
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
                <div className="filter-sort-control">
                 <PaginationButtons
                 pageType={this.props.pageType}/>
                    <div >
                    <form className="filter-sort-control" onSubmit={e => this.handleSubmitDate(e)}>        
                        <label htmlFor="search_date">Search For a Date</label>
                        <input id="search_date" name="search_date" type="date"/>
                        <button type="submit">Search</button>
                    </form>
                    <button onClick = {e => this.context.updateDateSelected(this.props.pageType,'all')}>All Dates</button>
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
                        <select id="rating_filter"
                        onChange={e=>this.updateRating(e.target.value)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                
                </div>)
            }
    
        return(    
                   filter
        )
    }
}

export default FilterSortRow;