import React, { Component } from 'react';
import '../_styles/UserSignUp.css'

class UserSignUp extends Component{

state = {
        isBoxVisible:false
};

signUpClick=()=>{
    console.log(`button clicked`)
    //this.props.history.push('/dashboard')
}

toggleBox = () => {
    this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
  };

learnMore=()=>{
    console.log(`button clicked`)
}
    render(){
        const { isBoxVisible } = this.state;
        return(
            <div className="user-sign pop-up">
                <div className={`someother, box ${isBoxVisible ? "" : "hidden"}`}>
                <span className="closebtn">&times;</span>
                <p>Thanks for your interest in Love More Laugh More! This is the Beta version so we are not yet allowing users to sign-up. Please explore around, play with the forms, and check back soon!</p>
                <button onClick={this.toggleBox}>Explore</button>
                <button onClick = {e => this.learnMore()}>Learn More</button>
                </div>
            </div>
        )
    }
}

export default UserSignUp;