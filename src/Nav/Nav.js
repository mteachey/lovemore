import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
//import { HashLink as Link } from 'react-router-hash-link';

class Nav extends Component{
    render(){
        let List;
        if (this.props.pageType === 'interior'){
         List = (
            <nav className="main-nav nav">
            <ul>
                <button className="nav-link-interior" onClick={this.props.gotoLearnMore}>Learn More</button>
                <li><NavLink to={`/dashboard`}>Dashboard</NavLink></li>
                <li><NavLink to={`/daily-form`}>Daily Form</NavLink></li>
               {/* <li><NavLink to={`/past-care`}>PastCare</NavLink></li>
                <li><NavLink to={`/past-gratitude`}>PastGratitude</NavLink></li>
                <li><NavLink to={`/inspiration`}>Inspiration</NavLink></li>
                <li><NavLink to={`/goal-form`}>Goals</NavLink></li>*/}
             </ul>
            </nav>)}

        else if(this.props.pageType === 'home'){
         List = (
                <div className="home-nav-links">
                    <button className="nav-link" onClick={this.props.onSignUpInClick}>Sign-up</button>
                    <button className="nav-link">Sign-in</button>
                </div>)
            }

        return(
            <div>
                {List}
            </div>
        )
    }
}   
export default Nav;
