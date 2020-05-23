import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ActivityList from './ActivityList'



describe(`ActivityList component`, () => {
    

    it('renders without crashing', () => {
        const results = [{
            "gratitude_id":"1",
            "user_id":"1",
            "content":"A catch up phone call with Kelsie",
            "date_modified":"May 7th 2020",
            "type":"emotional",
            "rating":"5",           
        },
        {
            "gratitude_id":"2",
            "user_id":"1",
            "content":"I kept my cool with the service phone rep",
            "date_modified":"2020-05-14T19:10:27.090Z"           
        }]
        const div = document.createElement('div');
        ReactDOM.render(<ActivityList {...results} />, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})