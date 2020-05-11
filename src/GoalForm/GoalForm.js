import React, { Component } from 'react';
import './GoalForm.css'

class GoalForm extends Component{
    render(){
        return(
            <div className="goalform">
                <header>
                    <h1>Your Goals</h1>
                </header>
                <main>
                    <form class="goal-form">
                        <div class="form-intro">
                            <p>Please use this form to set a goal for yourself in the different areas of self-care.</p>
                            <p>We know everyone is unique, so select the areas you want to focus on. Feel free to uncheck any area you're not interested in.</p>
                            <p>Please select a number of times each week you would like to give yourself that type of care.</p>
                        </div>
                        <fieldset>
                            <legend>Emotional Care</legend>
                            <input type="checkbox" checked id="emotional" name="emotional" value="1"/>
                            <select id="emotional-goal">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">more than 7</option>
                            </select>
                        </fieldset>
                        <fieldset>
                            <legend>Spiritual Care</legend>
                            <input type="checkbox" checked id="spiritual" name="spiritual" value="1"/>
                            <select id="spiritual-goal">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">more than 7</option>
                            </select>
                        </fieldset>
                        <fieldset>
                            <legend>Intellectual Care</legend>
                            <input type="checkbox" checked id="intellectual" name="intellectual" value="1"/>
                            <select id="intellectual-goal">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">more than 7</option>
                            </select>
                        </fieldset>
                        <fieldset>
                            <legend>Physical Care</legend>
                            <input type="checkbox" checked id="physical" name="physical" value="1"/>
                            <select id="physical-goal">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">more than 7</option>
                            </select>
                        </fieldset>    
                        <button type="submit">Submit</button>
                        <button type="input">Cancel</button>            
                    </form>
                </main>
            </div>
        )
    }
}

export default GoalForm;