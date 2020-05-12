import React, { Component } from 'react'; 
import LoveMoreContext from '../LoveMoreContext'
import './EntryItem.css'

class EntryItem extends Component{
    static contextType = LoveMoreContext;
    
    render(){   
        
        const {content, date, type, rating, typeOfResults } = this.props;
        console.log(`this is the ${typeOfResults}`);
        let listItem = ''
        if(typeOfResults==='Self-Care'){
            listItem = (<li key={this.props.id} className="result-item">
            <span className="result-content">{content}</span>
            <span className="result-date">{date}</span>
            <span className="result-type">Type : {type}</span>
            <span className="result-rating">Your rating : {rating}</span>
            </li> )
        }
        else if(typeOfResults === 'Gratitude'){
            listItem = (<li key={this.props.id} className="result-item">
            <span className="result-content">{content}</span>
            <span className="result-date">{date}</span>
            </li> )
        }
        else if(typeOfResults === 'Inspiration'){
            listItem = (<li key={this.props.id} className="result-item">
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