import React, { Component } from 'react';
import './DailyForm.css';
import LoveMoreContext from '../LoveMoreContext.js'

class DailyForm extends Component{

static contextType = LoveMoreContext;

constructor(props){
    super(props);
    this.state={
        test:"hmm",
        date:{
            value:"1",
            touched:false
        },
        gratitude1:"start",
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
    };
}

updateGratitude=(gratitude,inputId)=>{
  console.log(this.state.test);
  console.log(gratitude);
  this.setState({test:"this work" });
  console.log(this.state.test)
}

handleSubmit = e =>{
    e.preventDefault();
    const { gratitude1, gratitude2, gratitude3, activity1, activity2, activity3, type1, type2, type3, rating1, rating2, rating3 } = e.target;
    console.log(gratitude1.value, gratitude1.value, gratitude2.value, gratitude3.value, activity1.value, activity2.value, activity3.value, type1.value, type2.value, type3.value, rating1.value, rating2.value, rating3.value);

}
    render(){
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
                        <input placeholder="a morning walk" type="text" name="gratitude1" id="gratitude1"
                        onChange={e => this.updateGratitude(e.target.value, e.target.id)}/>
                        <input placeholder="catching up with Kelsie in a Zoom chat" type="text" name="gratitude2" id="gratitude2"
                        onChange={e => this.updateGratitude(e.target.value, e.target.id)}/>
                        <input placeholder="seeing the tulips starting to bloom" type="text" name="gratitude3" id="gratitude3"
                        onChange={e => this.updateGratitude(e.target.value, e.target.id)}/>
                    </fieldset>
                    <div className="activity-input-area">
                        <fieldset>
                        <legend>Today I...</legend>
                            <div className="activity-input">
                                <div className="content-input">
                                    <label>Activity</label>
                                    <input placeholder="a morning walk" type="text" name="activity1" id="activity1"/>
                                </div>
                                <label htmlFor="type1">Type of Care</label>
                                <select id="type1">
                                    <option value="emotional">Emotional</option>
                                    <option value="physical">Physical</option>
                                    <option value="intellectual">Intellectual</option>
                                    <option value="spiritual">Spiritual</option>
                                </select>
                                <label htmlFor="rating1">Rating</label>
                                <select id="rating1">
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
                                    <input placeholder="a morning walk" type="text" name="activity2" id="activity2"/>
                                </div>
                                <label htmlFor="type2">Type of Care</label>
                                <select id="type2">
                                    <option value="emotional">Emotional</option>
                                    <option value="physical">Physical</option>
                                    <option value="intellectual">Intellectual</option>
                                    <option value="spiritual">Spiritual</option>
                                </select>
                                <label htmlFor="rating2">Rating</label>
                                <select id="rating2">
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
                                <input placeholder="a morning walk" type="text" name="activity3" id="activity3"/>
                              </div>
                                <label htmlFor="type3">Type of Care</label>
                                <select id="type3">
                                    <option value="emotional">Emotional</option>
                                    <option value="physical">Physical</option>
                                    <option value="intellectual">Intellectual</option>
                                    <option value="spiritual">Spiritual</option>
                                </select>
                                <label htmlFor="rating3">Rating</label>
                                <select id="rating3">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>                       
                    </fieldset>  
                </div>  {/*--activity-input-area*/}  
                <fieldset className="mood-input">
                    <legend>How I am feeling today</legend>
                    <label htmlFor="mood">My Mood</label>
                    <select id="mood">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>      
                    <label htmlFor="energy">My Energy-level</label>
                    <select id="energy">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>       
                </fieldset>                
             <div className="button-row">    
                <button type="submit">Submit</button>
                <button type="input">Cancel</button>
             </div>
            </form>
        </section>
        )
    }
}
export default DailyForm;
