import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Inspiration from './Inspiration'
import { BrowserRouter as Router, Link } from 'react-router-dom';



describe(`Inspiration component`, () => {

    const typeOfResults = 'inspiration'
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Router><Inspiration typeOfResults={typeOfResults} /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})