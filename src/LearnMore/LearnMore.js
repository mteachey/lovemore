import React, { Component } from 'react';
import goalform from '../images/ss-goal-form-ui.jpg'
import dailyform from '../images/ss-daily-form-ui.jpg'
import inspiration from '../images/ss-inspiration-ui.jpg'
import dashboard from '../images/ss-dashboard.jpg'
import pastcare from '../images/ss-past-care.jpg'



class LearnMore extends Component{
    render(){
        return(
            <section className="learn-more" id="learn-more">
                <header>
                    <h2>How do I use Love More Laugh More?</h2>
                </header>
                <main>
                    <div>
                        <div>
                            <p>We would start with either setting your goals for the month or looking at ideas of inspiration.</p>
                            <p>Decide how many times a week (and month) you want to show youself some love and care in the areas of emotional, spiritual, intellectual, and physical well-being. It is completely up to you how you consider giving yourself these different types of self-care and how often.</p>
                        </div>
                    <img src={goalform} alt="screenshot of the goal form"/>
                    </div>
                    <div>
                    <p>If you need some inspiration for ways to give yourself some care in any of the four areas, we got you. Check out our Inspiration page. You can even filter it by type of self care. We will continually be adding more ideas to the list, so check back often.</p>
                    <img src={inspiration} alt="screenshot of the inspiration page"/>
                    </div>
                    <div>
                    <p>Then, set aside a few minutes each day (that's all it should take!) to complete your daily form. In the daily form, is a space to record your self-care activity (or activities) for the day and to rate them so you can refer back to them to find the activities you get the most out  of. There is also a space to write three things you are grateful for and to record your overall mood and energy-level for the day.</p>
                    <img src={dailyform} alt="screenshot of the daily form"/>
                    </div>
                    <div>
                    <p>Your dashboard will display your most recent self-care activites and gratitude entries, some fun graphs so you can easily see your progress, and a list of your goals.</p>
                    <img src={dashboard} alt="screenshot of the dashboard page"/>
                    </div>
                    <div>
                    <p>You can also see and filter all of your past self-care activities and past gratitide entries. You can filter by date to see what you did the same day in years past, by type, and by your rating.</p>
                    <img src={pastcare} alt="screenshot of the past self-care page"/>
                    </div>
                    
                </main>
            </section>
        )
    }
}

export default LearnMore;