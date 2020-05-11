import React, { Component } from 'react'; 
import Progress from '../Progress/Progress';
import ButtonRow from '../ButtonRow/ButtonRow'
import RandomQuote from '../RandomQuote/RandomQuote.js'
import './Dashboard.css'


class Dashboard extends Component{
    render(){
        return(
            <div className="dashboard">
                <header>
                    <h1>Your Laugh More Love More Dashboard</h1>
                    <RandomQuote/>
                </header>
                <main>
                    <Progress/>
                    <ButtonRow
                      link1={`/daily-form`}
                      link1_lable={`Today's Care and Gratitude`}
                      link2={`/past-care`}
                      link2_lable={`Your Past Care Entries`}
                      link3={`/past-gratitudde`}
                      link3_lable={`Your Past Gratitudes`}
                      link4={`/goal-form`}
                      link4_lable={`Set Your Goals`}
                      link5={`/inspiration`}
                      link5_lable={`Get Inspired`}
                    />
                </main>
            </div>
        )
    }
}

export default Dashboard;