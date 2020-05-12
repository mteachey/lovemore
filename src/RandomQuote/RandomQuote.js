import React, { Component } from 'react';
import LoveMoreContext from '../LoveMoreContext.js'


class RandomQuote extends Component{
    static contextType = LoveMoreContext;

    chooseQuote=()=>{
        let numberOfQuotes = this.context.quotes.length;
        let quotePickNumber = Math.floor(Math.random() * (numberOfQuotes));
        let quote = this.context.quotes[quotePickNumber].content;
        console.log(quotePickNumber)
        return quote
    }


    render(){
        return(
            <div className="quote">
               <p>"{this.chooseQuote()}"</p>
            </div>
        )
    }
}

export default RandomQuote;