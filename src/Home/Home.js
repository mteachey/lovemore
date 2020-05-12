import React, { Component } from 'react';
import About from '../About/About';
import LearnMore from '../LearnMore/LearnMore.js'
import ButtonRow from '../ButtonRow/ButtonRow.js';
//import RandomQuote from '../RandomQuote/RandomQuote.js'
import './Home.css'

class Home extends Component{
    render(){
        return(
            <div className="home">
                <header>
                    <h1>Love More Laugh More</h1>
                    <h2 className="tagline">Find the sweetness in your own heart, then you may find the sweetness in every heart.</h2>
                    
                 </header>
                 <main>                   
                     <ButtonRow
                        links ={[{'/dashboard':'Start'},{'/#about':'Learn More'}]}
                        />
                    <About/>
                    <LearnMore/>
                 </main>
                 
            </div>
        )
    }
}

export default Home;