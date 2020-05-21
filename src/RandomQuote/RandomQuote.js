import React, { Component } from 'react';
import LoveMoreContext from '../LoveMoreContext.js'


class RandomQuote extends Component{
    static contextType = LoveMoreContext;

    state = {
        dailyQuote:'',
        chooseQuoteRan:false,
     };

     chooseQuote=()=>{
       
        let numberOfQuotes = this.context.quotes.length;
        let quotePickNumber = Math.floor(Math.random() * (numberOfQuotes));
        let quote = this.context.quotes[quotePickNumber].content;
        
        this.setState({choseQuoteRan:true, dailyQuote:quote}); 
        //return quote
     }


componentDidMount(){
    this.chooseQuote()
}
    
    render(){
        return(
            <div className="quote">
                <p>{this.state.dailyQuote}</p>
            </div>
        )
    }
}

export default RandomQuote;