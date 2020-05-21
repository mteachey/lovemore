import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component{
    state = {
        isNavHidden:true,
};

makeNavVisible=()=>{
    this.setState(prevState => ({ isNavHidden: !prevState.isNavHidden }));
}
/*function MobileMenuAnimation(){        
    $('.mobile-menu-icon-container').on('click',function(event) {
        $(this).toggleClass('change');  
        $('nav').toggleClass('mobile-nav');
    });   
    $('nav').on('click', function(event) {
        $('.mobile-menu-icon-container').removeClass('change');  
        $('nav').removeClass('mobile-nav');
    });        
}*/



    render(){
        let List="";
        if (this.props.pageType === 'interior'){
         List = (
            <nav className={`main-nav nav ${this.state.isNavHidden ? "" : "nav-visible"}`}>
                <div className="mobile-menu-icon-container" onClick={this.makeNavVisible}>
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
                <ul>
                    <li><NavLink to={`/dashboard`}>Dashboard</NavLink></li>
                    <li><NavLink to={`/learn-more`}>Learn More</NavLink></li>
                    <li><NavLink to={`/daily-form`}>Daily Form</NavLink></li>
                    <li><NavLink to={`/past-care`}>PastCare</NavLink></li>
                    <li><NavLink to={`/past-gratitude`}>PastGratitude</NavLink></li>
                    <li><NavLink to={`/inspiration`}>Inspiration</NavLink></li>
                    <li><NavLink to={`/goal-form`}>Goals</NavLink></li>
                </ul>
            </nav>)}

        if(this.props.pageType === 'home'){
         List = (
                <div className="home-nav-links">
                    <button className="nav-link" onClick={this.props.onSignUpInClick}>Sign-up</button>
                    <button className="nav-link" onClick={this.props.onSignUpInClick}>Sign-in</button>
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
