import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// reduxThunk is a custom functionality (a middleware)
// Needed to call action creators that returns a functionality
// instead of the action object.
import reduxThunk from 'redux-thunk';

import App from './components/App';
import feedbackReducer from './reducers/reducers'

// create store:
// argument 1: All the reducers in the application (combineReducer)
// argument 2: initial state of application - empty object
// argument 3: middleware - reduxThunk
const store = createStore(feedbackReducer, {},
  applyMiddleware(reduxThunk));

// render the root component of the app
// store contains the states in our app as props in Provider
// Provider serves as a glue between React & Redux
ReactDOM.render(
    <Provider store = {store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
