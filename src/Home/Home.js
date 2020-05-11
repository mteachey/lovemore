import React, { Component } from 'react';
import About from '../About/About';
import LearnMore from '../LearnMore/LearnMore.js'
import ButtonRow from '../ButtonRow/ButtonRow.js';
import RandomQuote from '../RandomQuote/RandomQuote.js'
import './Home.css'

class Home extends Component{
    render(){
        return(
            <div className="home">
                <header>
                    <h1>Love More Laugh More</h1>
                    <h2>A tagline will go here</h2>
                 </header>
                 <main>
                     <RandomQuote/>
                     <ButtonRow
                        link1 = {`/dashboard`}
                        link1_lable = {`Start`}
                        link2 ={`/#about`}
                        link2_lable = {`Learn More`}
                        />
                    <About/>
                    <LearnMore/>
                 </main>
                 
            </div>
        )
    }
}

export default Home;