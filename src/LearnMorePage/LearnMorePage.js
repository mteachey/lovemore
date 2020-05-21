import React, { Component } from 'react';
import LoveMoreContext from '../LoveMoreContext'
import About from '../About/About'
import LearnMore from '../LearnMore/LearnMore'
import ButtonRow from '../ButtonRow/ButtonRow'
import Nav from '../Nav/Nav.js';

class LearnMorePage extends Component{
    static contextType = LoveMoreContext;
    render(){
        return(
            <div className="past-gratitude">
                <header>
                <Nav
                pageType={'interior'}
                />
                    <h1>Love More Laugh More</h1>
                </header>
                <main>
    
                    <About/>
                    <LearnMore/>
                    <ButtonRow
                        links ={[{'/daily-form':'Today\'s Care & Gratitude'},{'/past-care':'Your Past Care Entries'},{'/past-gratitude':'Your Past Gratitudes'},{'/goal-form':'Set Your Goals'},{'/inspiration':'Get Inspired, Get Grateful'}]}
                        />               
                </main>

            </div>
        )       
    }
}

export default LearnMorePage;