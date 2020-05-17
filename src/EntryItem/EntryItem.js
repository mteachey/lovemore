import React, { Component } from 'react'; 
import LoveMoreContext from '../LoveMoreContext'
import './EntryItem.css'


class EntryItem extends Component{
    static contextType = LoveMoreContext;
    
    render(){   
        
        const {content, date_modified, type, rating, typeOfResults } = this.props;
        let listItem = ''
        if(typeOfResults==='selfcares'){
            listItem = (<li key={this.props.selfcare_id} className="result-item">
            <span className="result-content">{content}</span>
            <span className="result-date">{date_modified}</span>
            <span className="result-type">Type : {type}</span>
            <span className="result-rating">Your rating : {rating}</span>
            </li> )
        }
        else if(typeOfResults === 'gratitudes'){
            listItem = (<li key={this.props.gratitude_id} className="result-item">
            <span className="result-content">{content}</span>
            <span className="result-date">{date_modified}</span>
            </li> 
            )
        }
        else if(typeOfResults === 'inspiration'){
            listItem = (<li key={this.props.inspire_id} className="result-item">
            <span className="result-content">{content}</span>
            <span className="result-type">Type : {type}</span>
            </li> )
        }
       
        return(
            listItem
        )
    }
}

export default EntryItem;