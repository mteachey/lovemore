import React, { Component } from 'react'; 
import LoveMoreContext from '../LoveMoreContext'
import './EntryItem.css'

class EntryItem extends Component{
    static contextType = LoveMoreContext;

    

    
    
    render(){   
        
        return(
        <li key={this.props.id} className="result-item">
            <span className="result-content">{this.props.content}</span>
            <span className="result-date">{this.props.date}</span>
            <span className="result-type">Type : {this.props.type}</span>
            <span className="result-rating">Your rating : {this.props.rating}</span>
        </li>  
        )
    }
}

export default EntryItem;