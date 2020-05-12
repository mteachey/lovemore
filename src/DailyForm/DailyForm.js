import React, { Component } from 'react';
import './DailyForm.css'

class DailyForm extends Component{
    render(){
        return(
            <section className="dailyform">
                <header>
                    <h1>Today's Self-Care and Gratitude</h1>
                </header>
                <form class="daily-form">
                    <div className="date-option">
                        <label htmlFor="date" >Today</label>
                        <select id="date">
                            <option value="1">Today</option>
                            <option value="0">Yesterday</option>
                        </select>
                    </div>
                    <fieldset className="gratitude-entries">
                        <legend>I am thankful for...</legend>
                        <input placeholder="a morning walk" type="text" name="gratitude-1" id="gratitude-1"/>
                        <input placeholder="catching up with Kelsie in a Zoom chat" type="text" name="gratitude-2" id="gratitude-2"/>
                        <input placeholder="seeing the tulips starting to bloom" type="text" name="gratitude-3" id="gratitude-3"/>
                    </fieldset>
                    <div className="activity-input-area">
                        <fieldset>
                        <legend>Today I...</legend>
                            <div class="activity-input">
                                <div className="content-input">
                                    <label>Activity</label>
                                    <input placeholder="a morning walk" type="text" name="activity-1" id="activity-1"/>
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
                            <div class="activity-input">
                                <div className="content-input">
                                    <label>Activity</label>
                                    <input placeholder="a morning walk" type="text" name="activity-2" id="activity-2"/>
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
                            <div class="activity-input">
                             <div className="content-input">
                                <label>Activity</label>
                                <input placeholder="a morning walk" type="text" name="activity-3" id="activity-3"/>
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
