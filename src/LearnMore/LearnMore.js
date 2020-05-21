import React, { Component } from 'react';
import ButtonRow from '../ButtonRow/ButtonRow'
import Nav from '../Nav/Nav.js';

class LearnMore extends Component{
    render(){
        return(
            <section className="learn-more" id="learn-more">
                <header>
                    <h2>How do I use Love More Laugh More?</h2>
                </header>
                <main>
                    <p>*this section will include screenshots of the different screens/UIs once they are complete*</p>
                    <p>We would start with either setting your goals for the month or looking at ideas of inspiration.</p>
                    <p>Decide how many times a week (and month) you want to show youself some love and care in the areas of emotional, spiritual, intellectual, and physical well-being. It is completely up to you how you consider giving yourself these different types of self-care and how often.</p>
                    <p>Then, set aside a few minutes each day (that's all it should take!) to complete your daily form. In the daily form, is a space to record your self-care activity (or activities) for the day and to rate them so you can refer back to them to find the activities you get the most out  of. There is also a space to write three things you are grateful for and to record your overall mood and energy-level for the day.</p>
                    <p>Your dashboard will display your most recent self-care activites and gratitude entries, some fun graphs so you can easily see your progress, and a list of your goals.</p>
                    <p>You can also see and filter all of your past self-care activities and past gratitide entries.</p>
                </main>
            </section>
        )
    }
}

export default LearnMore;