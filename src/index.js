import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, hashHistory } from 'react-router';

import reducers from './reducers';
import App from './components/app';
import Projects from './components/projects';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={hashHistory}>
      <Route path='/' component={App}/>
      <Route path='/projects' component={Projects}/>
    </Router>
  </Provider>
  , document.querySelector('.attach'));
