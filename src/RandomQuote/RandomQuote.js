import React, { Component } from 'react';
import LoveMoreContext from '../LoveMoreContext.js'


class RandomQuote extends Component{
    static contextType = LoveMoreContext;

    chooseQuote=()=>{
        let numberOfQuotes = this.context.quotes.length;
        let quotePickNumber = Math.floor(Math.random() * (numberOfQuotes));
        let quote = this.context.quotes[quotePickNumber].content;
        return quote
    }


    render(){
        return(
            <div className="quote">
               <p>Your Daily Quote : "{this.chooseQuote()}"</p>
            </div>
        )
    }
}

export default RandomQuote;