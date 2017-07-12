import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App/App.js';
import store from './redux/store.js'
import {handleNewPoint, toggleNewData, handleGetByIdAndSetState} from './redux/actions';
import {Provider} from 'react-redux';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
