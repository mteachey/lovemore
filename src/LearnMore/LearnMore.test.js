import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import LearnMore from './LearnMore'
import { BrowserRouter as Router, Link } from 'react-router-dom';

describe(`LearnMore component`, () => {
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Router><LearnMore /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})