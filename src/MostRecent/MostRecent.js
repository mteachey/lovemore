import React, { Component } from 'react'; 
import ActivityList from '../ActivityList/ActivityList'

class MostRecent extends Component{
    render(){
        return(
            <section className="most-recent">
                <header>
                    <h3>Some of Your Past Activity</h3>
                </header>
                <main>
                    <ActivityList />
                </main>
            </section>
        )
    }
}

export default MostRecent;