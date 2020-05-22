import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './_styles/index.css';
import App from './App';
import DATA from './data.js';
import ScrollToTop from './ScrollToTop'


ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop/>
    <App data={DATA}/>
  </BrowserRouter>,
  document.getElementById('root')
);


