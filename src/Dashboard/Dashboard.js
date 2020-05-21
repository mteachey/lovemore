import React, { Component } from 'react'; 
import Progress from '../Progress/Progress';
import ButtonRow from '../ButtonRow/ButtonRow'
import RandomQuote from '../RandomQuote/RandomQuote.js'
import './Dashboard.css';
import Nav from '../Nav/Nav.js';


class Dashboard extends Component{
    render(){
        return(
            <div className="dashboard">
                <header>
                <Nav
                pageType={'interior'}
                />
                    <h1>Your Laugh More Love More Dashboard</h1>
                   <RandomQuote/>
                </header>
                <main>
                    <Progress/>
                    <ButtonRow
                        links ={[{'/daily-form':'Today\'s Care & Gratitude'},{'/past-care':'Your Past Care Entries'},{'/past-gratitude':'Your Past Gratitudes'},{'/goal-form':'Set Your Goals'},{'/inspiration':'Get Inspired, Get Grateful'}]}
                        />
                </main>
            </div>
        )
    }
}

export default Dashboard;