import React, { Component } from 'react'; 
import LoveMoreContext from '../LoveMoreContext'
import ActivityList from '../ActivityList/ActivityList'

class MostRecent extends Component{
    static contextType = LoveMoreContext;

    render(){
        return(
            <section className="most-recent">
                <header>
                    <h3>What's Been Happening?</h3>
                </header>
                <main>
                    <ActivityList
                       type={'activity'}
                       list = {this.context.selfcare}
                       listHeading = {'Your Most Recent Self-Care Activities'}
                       random = {false} />
                    <ActivityList
                       type={'gratitude'}
                       list = {this.context.gratitude}
                       listHeading = {`Past Gratitudes`} 
                       random = {true}/>
                </main>
            </section>
        )
    }
}

export default MostRecent;