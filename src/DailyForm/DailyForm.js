import React, { Component } from 'react';
import './DailyForm.css';
import ValidationError from '../ValidationError/ValidationError.js'
import LoveMoreContext from '../LoveMoreContext.js'
import config from '../config.js'

class DailyForm extends Component{

static contextType = LoveMoreContext;

constructor(props){
    super(props);
    this.state={
        date:{
            value:"1",
            touched:false
        },
        gratitude1:{
            value:"",
            touched:false
        },
        gratitude2:{
            value:"",
            touched:false
        },
        gratitude3:{
            value:"",
            touched:false
        },
        activity1:{
            value:"",
            touched:false
        },
        activity2:{
            value:"",
            touched:false
        },
        activity3:{
            value:"",
            touched:false
        },
        type1:{
            value:"",
            touched:false
        },
        type2:{
            value:"",
            touched:false
        },
        type3:{
            value:"",
            touched:false
        },
        rating1:{
            value:"",
            touched:false
        },
        rating2:{
            value:"",
            touched:false
        },
        rating3:{
            value:"",
            touched:false
        },
        mood:{
            value:"",
            touched:false
        },
        energy:{
            value:"",
            touched:false
        },
        error:null,
    };
}

updateGratitude=(gratitude, inputId)=>{
if(inputId==='gratitude1')
  {this.setState({gratitude1:{value: gratitude, touched: true}})}
  if(inputId==='gratitude2')
  {this.setState({gratitude2:{value: gratitude, touched: true}})};
  if(inputId==='gratitude3')
  {this.setState({gratitude3:{value: gratitude, touched: true}})};
}

updateActivities=(activity, inputId)=>{
    if(inputId==='activity1')
      {this.setState({activity1:{value: activity, touched: true}})};
      if(inputId==='activity2')
      {this.setState({activity2:{value: activity, touched: true}})};
      if(inputId==='activity3')
      {this.setState({activity3:{value: activity, touched: true}})};
}
updateActivityType=(type, inputId)=>{
    if(inputId==='type1')
      {this.setState({type1:{value: type, touched: true}})};
      if(inputId==='type2')
      {this.setState({type2:{value: type, touched: true}})};
      if(inputId==='type3')
      {this.setState({type3:{value: type, touched: true}})};
}
updateActivityRating=(rating, inputId)=>{
    if(inputId==='rating1')
      {this.setState({rating1:{value: rating, touched: true}})};
      if(inputId==='rating2')
      {this.setState({rating2:{value: rating, touched: true}})};
      if(inputId==='rating3')
      {this.setState({rating3:{value: rating, touched: true}})};
}

updateMood=(moodLevel)=>{
    this.setState({mood:{value: moodLevel, touched: true}})
}

updateEnergy=(energyLevel)=>{
    this.setState({energy:{value: energyLevel, touched: true}})
}

/*validateActivity(){
    const activity1= this.state.activity1.value.trim();
    if(activity1 === 0){
        return "At least one activity is required"
    }
}*/

handleSubmit = e =>{
    e.preventDefault();
    const { gratitude1, gratitude2, gratitude3, activity1, activity2, activity3, type1, type2, type3, rating1, rating2, rating3, mood, energy } = this.state;
    //for now all entries will get same user_id, id, and date
    //const newid = "10";
    const newuser_id = "2";
    //this will be based on the date input
    //const newdate = "May 3rd 2020";

    
    //add selfcare
    let newSelfCare=[];
    if(activity1.value){
         newSelfCare = [{
               // id:newid,
                user_id:newuser_id,
                content:activity1.value,
                type:type1.value,
                rating:rating1.value,
               // date_modified:newdate,
            }]
      //  console.log(`nsc from form ${newSelfCare[0].content}`)
        if(activity2.value)
        { const newSelfCare2 = {
          //  id:newid,
            user_id:newuser_id,
            content:activity2.value,
            type:type2.value,
            rating:rating2.value,
          //  date_modified:newdate,
        }

            newSelfCare = [...newSelfCare, newSelfCare2]
            //console.log(`2nd ran ${newSelfCare[1].content}`)
        };
        if(activity3.value)
        { const newSelfCare3 = {
           // id:newid,
            user_id:newuser_id,
            content:activity3.value,
            type:type3.value,
            rating:rating3.value,
           // date_modified:newdate,
        }
            newSelfCare = [...newSelfCare, newSelfCare3]
        };
   };

    //add gratitude
    let newGratitude=[]
    if(gratitude1.value){
        newGratitude = [{
            //id:newid,
            user_id:newuser_id,
            content:gratitude1.value,
           // date_modified:newdate,
            }]
        if(gratitude2.value){
            const newGratitude2 = {
               // id:newid,
                user_id:newuser_id,
                content:gratitude2.value,
                //date_modified:newdate,
                }
            newGratitude = [...newGratitude, newGratitude2]
        };
        if(gratitude3.value){
            const newGratitude3 = {
             //   id:newid,
                user_id:newuser_id,
                content:gratitude3.value,
             //   date_modified:newdate,
                }
            newGratitude = [...newGratitude, newGratitude3]
        };
       // this.context.addGratitude(newGratitude);
       // console.log(`this is the nG being sent ${newGratitude[0].content}`);
   };

    //add energy and mood
    if(energy.value && mood.value){
        const newMoods = [{
           // id:newid,
            user_id:newuser_id,
            energy_level:energy.value,
            mood_level:mood.value,
           // date_modified:newdate,
        }]
       // this.context.addMoods(newMoods);
    }
    console.log(newGratitude)
if(newGratitude.length !== 0){
  fetch(`${config.API_DEV_ENDPOINT}api/gratitudes`,{
        method: 'POST',
        body: JSON.stringify(newGratitude),
         headers: {
         'content-type': 'application/json',
         'Authorization': `Bearer ${config.API_KEY}`
        },
    })
      .then(res => {
        if (!res.ok) {
          // get the error message from the response,
          return res.json().then(error => {
            // then throw it
            throw error
          })
        }
        return res.json()
      })
      .then(data => {
          console.log(data)
         /* this.state.gratitude1.value = '';
          this.state.gratitude2.value = '';
          this.state.gratitude3.value = '';*/

        this.context.addGratitude(data);
      })
      .catch(error => {
        this.setState({ error })
      })
    }//end of newGratitude

    if(newSelfCare.length !== 0){
      fetch(`${config.API_DEV_ENDPOINT}api/selfcares`,{
        method: 'POST',
        body: JSON.stringify(newSelfCare),
         headers: {
         'content-type': 'application/json',
         'Authorization': `Bearer ${config.API_KEY}`
        },
    })
      .then(res => {
        if (!res.ok) {
          // get the error message from the response,
          return res.json().then(error => {
            // then throw it
            throw error
          })
        }
        return res.json()
      })
      .then(data => {
          console.log(data)
         this.context.addSelfCare(newSelfCare);
      })
      .catch(error => {
        this.setState({ error })
      })
    }//end if newSC
    
  this.props.history.push('/dashboard');
}//end of handleSubmit

validateActivityInputs(){
    if((this.state.activity2.value && !this.state.activity1.value)|| (this.state.activity3.value && !this.state.activity2.value)){
        return "Please fill out the fields in order from top to bottom"
    }
}

validateGratitudeInputs(){
    if((this.state.gratitude2.value && !this.state.gratitude1.value)|| (this.state.gratitude3.value && !this.state.gratitude2.value)){
        return "Please fill out the fields in order from top to bottom"
    }
}

validateTypeRating(){
    if(this.state.activity1.value){
        if(!this.state.type1.value || !this.state.rating1.value){
            return "Please choose a type and rating for your activity"
        }
    }
    if(this.state.activity2.value){
        if(!this.state.type2.value || !this.state.rating2.value){
            return "Please choose a type and rating for your activity"
        }
    }
    if(this.state.activity3.value){
        if(!this.state.type3.value || !this.state.rating3.value){
            return "Please choose a type and rating for your activity"
        }
    }
}

handleClickCancel = () => {
    this.props.history.push('/dashboard')
};

    render(){
        const gratitudeError = this.validateGratitudeInputs();
        const activityError = this.validateActivityInputs();
        
        return(
            <section className="dailyform">
                <header>
                    <h1>Today's Self-Care and Gratitude</h1>
                </header>
                <form className="daily-form" onSubmit={e=>this.handleSubmit(e)}>
                    <div className="date-option">
                        <label htmlFor="date" >Today</label>
                        <select id="date">
                            <option value="1">Today</option>
                            <option value="0">Yesterday</option>
                        </select>
                    </div>
                    <fieldset className="gratitude-entries">
                        <legend>I am thankful for...</legend>
                        <input placeholder="a morning walk" type="text" name="gratitude1"   id="gratitude1"
                        onChange={e => this.updateGratitude(e.target.value, e.target.id)}/>
                        <input placeholder="catching up with Kelsie in a Zoom chat" type="text" name="gratitude2" id="gratitude2"
                        disabled={!this.state.gratitude1.touched}
                        onChange={e => this.updateGratitude(e.target.value, e.target.id)}/>
                        <input placeholder="seeing the tulips starting to bloom" type="text" name="gratitude3" id="gratitude3"
                        disabled={!this.state.gratitude2.touched}
                        onChange={e => this.updateGratitude(e.target.value, e.target.id)}/>
                        {this.validateGratitudeInputs() && (<ValidationError message={gratitudeError} />
)}
                    </fieldset>
                   
                    <div className="activity-input-area">
                        <fieldset>
                        <legend>Today I...</legend>
                            <div className="activity-input">
                                <div className="content-input">
                                    <label>Activity</label>
                                    <input placeholder="a morning walk" type="text" name="activity1" id="activity1"
                                    onChange={e => this.updateActivities(e.target.value, e.target.id)}/>
                                </div>
                                <label htmlFor="type1">Type of Care</label>
                                <select id="type1"
                                onChange={e => this.updateActivityType(e.target.value, e.target.id)}>
                                    <option value="">Select</option>
                                    <option value="emotional">Emotional</option>
                                    <option value="physical">Physical</option>
                                    <option value="intellectual">Intellectual</option>
                                    <option value="spiritual">Spiritual</option>
                                </select>
                                <label htmlFor="rating1">Rating</label>
                                <select id="rating1"
                                onChange={e => this.updateActivityRating(e.target.value, e.target.id)}>
                                    <option value="">Select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select> 
                            </div>    
                        </fieldset>                  
                    <fieldset>
                       <legend>Today I...</legend>
                            <div className="activity-input">
                                <div className="content-input">
                                    <label>Activity</label>
                                    <input placeholder="a morning walk" type="text" name="activity2" id="activity2"
                                    disabled={!this.state.activity1.touched}
                                    onChange={e => this.updateActivities(e.target.value, e.target.id)}/>
                                </div>
                                <label htmlFor="type2">Type of Care</label>
                                <select id="type2"
                                disabled={!this.state.activity2.touched}
                                onChange={e => this.updateActivityType(e.target.value, e.target.id)}>
                                    <option value="">Select</option>
                                    <option value="emotional">Emotional</option>
                                    <option value="physical">Physical</option>
                                    <option value="intellectual">Intellectual</option>
                                    <option value="spiritual">Spiritual</option>
                                </select>
                                <label htmlFor="rating2">Rating</label>
                                <select id="rating2"
                                disabled={!this.state.activity2.touched}
                                onChange={e => this.updateActivityRating(e.target.value, e.target.id)}>
                                    <option value="">Select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select> 
                            </div>                      
                    </fieldset>
                    <fieldset>
                        <legend>Today I...</legend>
                            <div className="activity-input">
                             <div className="content-input">
                                <label>Activity</label>
                                <input placeholder="a morning walk" type="text" name="activity3" id="activity3"
                                disabled={!this.state.activity2.touched}
                                onChange={e => this.updateActivities(e.target.value, e.target.id)}/>
                              </div>
                                <label htmlFor="type3">Type of Care</label>
                                <select id="type3"
                                disabled={!this.state.activity3.touched}
                                onChange={e => this.updateActivityType(e.target.value, e.target.id)}>
                                    <option value="">Select</option>
                                    <option value="emotional">Emotional</option>
                                    <option value="physical">Physical</option>
                                    <option value="intellectual">Intellectual</option>
                                    <option value="spiritual">Spiritual</option>
                                </select>
                                <label htmlFor="rating3">Rating</label>
                                <select id="rating3"
                                disabled={!this.state.activity3.touched}
                                onChange={e => this.updateActivityRating(e.target.value, e.target.id)}>
                                    <option value="">Select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>                       
                    </fieldset>  
                    {this.validateActivityInputs() && (<ValidationError message={activityError} />)}
                </div>  {/*--activity-input-area*/}  
              
                <fieldset className="mood-input">
                    <legend>How I am feeling today</legend>
                    <label htmlFor="mood">My Mood</label>
                    <select id="mood"
                    onChange={e => this.updateMood(e.target.value)}>
                        <option value="">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>      
                    <label htmlFor="energy">My Energy-level</label>
                    <select id="energy"
                     onChange={e => this.updateEnergy(e.target.value)}>
                         <option value="">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>       
                </fieldset>                
             <div className="button-row">    
                <button type="submit"
                 disabled={
                     (!this.state.activity1.touched && !this.state.gratitude1.touched) || 
                     this.validateTypeRating() || 
                     this.validateActivityInputs() ||
                     this.validateGratitudeInputs()}
                     >
                    Submit</button>
                <button type="reset"
                onClick={this.handleClickCancel}>
                    Cancel</button>
             </div>
            </form>
        </section>
        )
    }
}
export default DailyForm;
