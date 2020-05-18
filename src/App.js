import React, { Component } from 'react';
import { Route } from 'react-router-dom'
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
import data from './data.js'
import config from './config.js'
//import { format, parseISO } from 'date-fns';
//import toDate from 'date-fns/toDate'


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      selfcares:data.selfcare,
      gratitudes:data.gratitude,
      gratitude_most_recent:data.gratitude,
      goals:data.goals,
      inspiration:data.inspiration,
      quotes:data.quotes,
      moods:data.moods,
      error:null,
      current_gratitude_results_page:1,
      current_selfcares_results_page:1,
      current_display:{
        gratitudes:{page:1, date_to:'all', date_from:'', disabled:'start'},
        selfcares :{page:1, date_to:'all', date_from:'', type:'all',rating:'all',disabled:'start'},
        inspiration:{page:1, type:'all',disabled:'start'}
      }
    }//end of state 
  }

updateCurrentPage=(typeOfPage, direction)=>{
  let newPage = this.state.current_display[typeOfPage].page;
  if(direction === 'forward')
  {newPage = this.state.current_display[typeOfPage].page + 1;}
  else if(direction === 'back')
  {newPage = this.state.current_display[typeOfPage].page - 1;}
  else if(direction === 'reset')
  {newPage = 1;}

  const {current_display} = this.state;
  current_display[typeOfPage].page = newPage;
  this.setState({current_display:current_display})
}

updateTypeSelected=(typeOfPage,selectedType)=>{
  console.log(`updateTS ran this is the page ${selectedType}`)
  const {current_display} = this.state;
  current_display[typeOfPage].type = selectedType;
  this.setState({current_display:current_display})
}

updateDisabled=(typeOfPage, direction)=>{
  console.log(`updateDisable ran ${typeOfPage} ${direction}`)
  const {current_display} = this.state;

  current_display[typeOfPage].disabled = direction;
  this.setState({current_display:current_display})
}

updateDateSelected=(typeOfPage, date)=>{
  const {current_display} = this.state;
  current_display[typeOfPage].date_to = date;
  this.setState({current_display:current_display})
}

updateRatingSelected=(typeOfPage, ratingSelected)=>{
  const {current_display} = this.state;
  current_display[typeOfPage].rating = ratingSelected;
  this.setState({current_display:current_display});
  console.log(`uRS ran`);
}
 
addSelfCare=(newSelfCare)=>{
  this.setState({
    selfcares: [...this.state.selfcares, ...newSelfCare]
    },()=>{console.log(`this is the value from addSelfCare length ${this.state.selfcares.length} obj ${this.state.selfcares[this.state.selfcares.length-1].content}`)
  })  
};

addGratitude=(newGratitude)=>{
  console.log(`this is the OG length ${this.state.gratitudes.length}`)
  this.setState({
    gratitudes: [...this.state.gratitudes, ...newGratitude]},()=>{
      console.log(`this is the newG length ${this.state.gratitudes.length}`)
    }
  )
};

addMoods=(newMoods)=>{
  this.setState({
    moods:[...this.state.moods, newMoods]
  })
}

addMood=(newMood)=>{
  console.log(this.state.mood.length)
  this.setState({
    mood: [...this.state.mood, newMood]
  },()=>{console.log(this.state.mood.length)})
}

addEnergy=(newEnergy)=>{
  console.log(this.state.energy.length)
  this.setState({
    energy: [...this.state.energy, newEnergy]
  },()=>{console.log(this.state.energy.length)})
}

updateGoals=(newgoals)=>{
  this.setState({
    goals:newgoals
  },()=>{console.log(this.state.goals)})
}

FormatDate = obj =>{
 
 let year = obj.date_modified.slice(0,4);
 let month = obj.date_modified.slice(5,7);
 let day = obj.date_modified.slice(8,10);
 if(month === '01'){
   month = 'Jan'
 }
 if(month === '02'){
  month = 'Feb'
}
if(month === '03'){
  month = 'Mar'
}
if(month === '04'){
  month = 'Apr'
}
if(month === '05'){
  month = 'May'
}
if(month === '06'){
  month = 'Jun'
}
if(month === '07'){
  month = 'Jul'
}
if(month === '08'){
  month = 'Aug'
}
if(month === '09'){
  month = 'Sep'
}if(month === '10'){
  month = 'Oct'
}
if(month === '11'){
  month = 'Nov'
}
if(month === '12'){
  month = 'Dec'
}
let newDate = `${month} ${day} ${year}`;
let newObj = obj = {...obj, date_formatted:newDate}
return newObj
}

componentDidMount(){
  this.setState({ error : null })
  //getting gratitudes
  fetch(`${config.API_DEV_ENDPOINT}api/gratitudes`,{
    method:'GET',
    headers:{
      'content-type': 'application/json',
      'Authorization': `Bearer ${config.API_KEY}`
    },
  })
  .then(res=>{
    if(!res.ok){
      throw new Error('Something went wrong, please try again later');
    }
    return res.json()
  })
  .then(data=>{
    let formatedDateData = data.map(obj=>this.FormatDate(obj));
    this.setState({
      gratitude_most_recent:formatedDateData,
    });
    this.setState({
      gratitudes:formatedDateData,
     });
  })
  .catch(err => {
    this.setState({
      error: err.message
    });
  })
  fetch(`${config.API_DEV_ENDPOINT}api/selfcares`,{
    method:'GET',
    headers:{
      'content-type': 'application/json',
      'Authorization': `Bearer ${config.API_KEY}`
    },
  })
  .then(res=>{
    if(!res.ok){
      throw new Error('Something went wrong, please try again later');
    }
    return res.json()
  })
  .then(data=>{
   let formatedDateData = data.map(obj=>this.FormatDate(obj));
    this.setState({
      selfcares:formatedDateData,
     });
  })
  .catch(err => {
    this.setState({
      error: err.message
    });
  })
  fetch(`${config.API_DEV_ENDPOINT}api/inspires`,{
    method:'GET',
    headers:{
      'content-type': 'application/json',
      'Authorization': `Bearer ${config.API_KEY}`
    },
  })
  .then(res=>{
    if(!res.ok){
      throw new Error('Something went wrong, please try again later');
    }
    return res.json()
  })
  .then(data=>{
    this.setState({
      inspiration:data,
     });
  })
  .catch(err => {
    this.setState({
      error: err.message
    });
  })
  fetch(`${config.API_DEV_ENDPOINT}api/quotes`,{
    method:'GET',
    headers:{
      'content-type': 'application/json',
      'Authorization': `Bearer ${config.API_KEY}`
    },
  })
  .then(res=>{
    if(!res.ok){
      throw new Error('Something went wrong, please try again later');
    }
    return res.json()
  })
  .then(data=>{
    this.setState({
      quotes:data,
     });
  })
  .catch(err => {
    this.setState({
      error: err.message
    });
  })
  fetch(`${config.API_DEV_ENDPOINT}api/goals`,{
    method:'GET',
    headers:{
      'content-type': 'application/json',
      'Authorization': `Bearer ${config.API_KEY}`
    },
  })
  .then(res=>{
    if(!res.ok){
      throw new Error('Something went wrong, please try again later');
    }
    return res.json()
  })
  .then(data=>{
    let lastEntry = data.length
    this.setState({
      goals:data[lastEntry-1],
     });
  })
  .catch(err => {
    this.setState({
      error: err.message
    });
  })
  fetch(`${config.API_DEV_ENDPOINT}api/moods`,{
    method:'GET',
    headers:{
      'content-type': 'application/json',
      'Authorization': `Bearer ${config.API_KEY}`
    },
  })
  .then(res=>{
    if(!res.ok){
      throw new Error('Something went wrong, please try again later');
    }
    return res.json()
  })
  .then(data=>{
    let formatedDateData = data.map(obj=>this.FormatDate(obj));
    this.setState({
      moods:formatedDateData,
     });
  })
  .catch(err => {
    this.setState({
      error: err.message
    });
  })
}//end of cDM


  render(){
    const contextValue = {
      selfcares:this.state.selfcares,
      gratitudes:this.state.gratitudes,
      gratitude_most_recent:this.state.gratitude_most_recent,
      goals:this.state.goals,
      moods:this.state.moods,
      inspiration:this.state.inspiration,
      quotes:this.state.quotes,
      addSelfCare:this.addSelfCare,
      addGratitude:this.addGratitude,
      addMoods:this.addMoods,
      updateGoals:this.updateGoals,
      updateCurrentPage:this.updateCurrentPage,
      updateDateSelected:this.updateDateSelected,
      updateRatingSelected:this.updateRatingSelected,
      current_display:this.state.current_display,
      updateTypeSelected:this.updateTypeSelected,
      updateDisabled:this.updateDisabled,
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
