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
                       typePage={'selfcares'}
                       list = {this.context.selfcares}
                       listHeading = {'Your Most Recent Self-Care Activities'}
                       random = {false} />
                    <ActivityList
                       typePage={'gratitudes'}
                       list = {this.context.gratitudes}
                       listHeading = {`Your Most Recent Gratitudes`} 
                       random = {true}/>
                </main>
            </section>
        )
    }
}

export default MostRecent;