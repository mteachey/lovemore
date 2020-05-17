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
      selfcare:data.selfcare,
      gratitude:data.gratitude,
      gratitude_most_recent:data.gratitude,
      goals:data.goals,
      inspiration:data.inspiration,
      quotes:data.quotes,
      moods:data.moods,
      error:null,
      current_gratitude_results_page:1,
      current_selfcares_results_page:1,
      current_display:{
        gratitudes:{page:1, date_to:'all', date_from:''},
        selfcares :{page:1, date_to:'all', date_from:'', type:'all',rating:'all'},
        inspiration:{page:1, type:'all'}
      }
    }//end of state 
  }

updateCurrentPage=(typeOfPage)=>{
  let newPage = this.state.current_display[typeOfPage].page + 1;
  console.log(`updateCP ran this is new page ${newPage}`)
  this.setState({
    current_display:{...this.state.current_display,current_display:{[typeOfPage] : { page:newPage}}}
  })
}

updateTypeSelected=(typeOfPage,selectedType)=>{
  console.log(`updateTS ran this is the page ${selectedType}`)
  this.setState({
   // current_display:{typeOfPage:{type:selectedType}}
    current_display:{...this.state.current_display, current_display:{[typeOfPage]:{type:selectedType}}}
   //current_display:{...this.state.current_display, current_display:{[typeOfPage] : { type:selectedType}}}
     //current_display:{...this.state.current_display, current_display:{selfcares:{type:'spiritual'}}}
     
  })
}

updateDateSelected=()=>{

}

updateRating=()=>{}
 
addSelfCare=(newSelfCare)=>{
  this.setState({
    selfcare: [...this.state.selfcare, ...newSelfCare]
    },()=>{console.log(`this is the value from addSelfCare length ${this.state.selfcare.length} obj ${this.state.selfcare[this.state.selfcare.length-1].content}`)
  })  
};

addGratitude=(newGratitude)=>{
  console.log(`this is the OG length ${this.state.gratitude.length}`)
  this.setState({
    gratitude: [...this.state.gratitude, ...newGratitude]},()=>{
      console.log(`this is the newG length ${this.state.gratitude.length}`)
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
let newObj = obj = {...obj, date_modified:newDate}
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
      gratitude:formatedDateData,
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
      selfcare:formatedDateData,
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
      selfcare:this.state.selfcare,
      gratitude:this.state.gratitude,
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
      current_display:this.state.current_display,
      updateTypeSelected:this.updateTypeSelected,
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
