import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App/App.js';
import store from './redux/store.js'
import {handleNewPoint} from './redux/actions';
import './index.css';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
