import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, hashHistory } from 'react-router';

import reducers from './reducers';
import App from './components/home/app';
import About from './components/about/about';
import Contact from './components/contact/contact';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={hashHistory}>
      <Route path='/' component={App}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
    </Router>
  </Provider>
  , document.querySelector('.attach'));
