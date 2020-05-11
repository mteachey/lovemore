import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import Home from './Home/Home.js';
import Dashboard from './Dashboard/Dashboard.js';
import DailyForm from './DailyForm/DailyForm.js'
import PastCare from './PastCare/PastCare.js'
import PastGratitude from './PastGratitude/PastGratitude.js'
import Inspiration from './Inspiration/Inspiration.js'
import GoalForm from './GoalForm/GoalForm.js'
import Nav from './Nav/Nav.js';
import Footer from './Footer/Footer.js'
import LoveMoreContext from './LoveMoreContext.js';


class App extends Component{
  static defaultProps ={
    data:{
      selfcare:[],
      gratitude:[],
      goals:{},
      inspiration:[],
      quotes:[]
    }
  };

  render(){
    const contextValue = {
      selfcare:this.props.data.selfcare,
      gratitude:this.props.data.gratitude,
      goals:this.props.data.goals,
      inspiration:this.props.data.inspiration,
      quotes:this.props.data.quotes,
      }
    return(
      <div className="App">
        <LoveMoreContext.Provider value={contextValue}>
        <Nav/>
        <Route
            exact
            path='/'
            component={Home}
        /> 
        <Route
            exact
            path='/dashboard'
            component={Dashboard}
        /> 
        <Route
            exact
            path='/daily-form'
            component={DailyForm}
        /> 
        <Route
            exact
            path='/past-care'
            component={PastCare}
        /> 
        <Route
            exact
            path='/past-gratitude'
            component={PastGratitude}
        /> 
        <Route
            exact
            path='/inspiration'
            component={Inspiration}
        /> 
         <Route
            exact
            path='/goal-form'
            component={GoalForm}
        /> 
          <Footer/>
        </LoveMoreContext.Provider>       
      </div>
    )
  }
}

export default App;
