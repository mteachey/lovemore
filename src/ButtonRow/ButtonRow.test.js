import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ButtonRow from './ButtonRow'
import { BrowserRouter as Router, Link } from 'react-router-dom';



describe(`ButtonRow component`, () => {
    
    it('renders without crashing', () => {
        const links = [{'/daily-form':'Today\'s Care & Gratitude'},{'/past-care':'Your Past Self-Care'},{'/past-gratitude':'Your Past Gratitudes'},{'/goal-form':'Set Your Goals'},{'/inspiration':'Get Inspired, Get Grateful'}]
           
        const div = document.createElement('div');
        ReactDOM.render(<Router><ButtonRow links={links} /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})