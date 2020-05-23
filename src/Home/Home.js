import React, { Component } from 'react';
import About from '../About/About';
import LearnMore from '../LearnMore/LearnMore.js'
import '../_styles/Home.css'
import Nav from '../Nav/Nav.js';
import Lotus from '../Lotus.js';


class Home extends Component{
state = {
        isBoxVisible:false,
        scrollPosition:0,
        statsRef:React.createRef(),
};

startExploring = () => {
    this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
    this.props.history.push('/dashboard');
  };


signUpPopUp=()=>{
    this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
}

signUpInClick=()=>{
   this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
}

learnMore=()=>{
    if(this.state.isBoxVisible)
    {this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));}
    //need to scroll to learn more
    if(this.state.statsRef.current){
        this.state.statsRef.current.scrollIntoView({ 
           behavior: "smooth", 
           block: "start"
        })
    }
}

    render(){
        const { isBoxVisible } = this.state;
        return(
            <div className="home">
                <Lotus/>
            <Nav
            pageType={'home'}
            onSignUpInClick = {this.signUpInClick}
            gotoLearnMore = {this.gotoLearnMore}
            />
                <header className="header-home">
                    <h1>Love More Laugh More</h1>
                    <h2 className="tagline">Find the sweetness in your own heart, then you may find the sweetness in every heart.</h2>
                       <button className="button" onClick={this.learnMore}>Learn More</button>
                        <button className="button" onClick={this.signUpPopUp}>Start</button>
                 </header>
                 <main> 
                    <div className={`box ${isBoxVisible ? "" : "hidden"}`}>
                       {/*} <span className="closebtn">&times;</span>*/}
                        <p>Thanks for your interest in Love More Laugh More!</p><p>This is the Beta version so we are not yet allowing users to sign-up. Please explore around, play with the forms, and check back soon!</p>
                        <button className="button" onClick={this.startExploring}>Explore</button>
                        <button className="button" onClick = {e => this.learnMore()}>Learn More</button>
                    </div> 
                    <div ref={this.state.statsRef}></div> 
                    <About/>
                   
                    <LearnMore/>
                      
                 </main>
                 
            </div>
        )
    }
}

export default Home;