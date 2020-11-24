import { combineReducers } from 'redux';
import { FETCH_USER } from '../actions/types'

// function creates Auth Reducer and returns the state.
function authReducer(state = null, action) {
  console.log(action)
  switch (action.type) {
    case FETCH_USER:
      // false was introduced if payload is empty
      return action.payload || false;
    default:
      return state;
  }
}

const feedbackReducer = combineReducers({
  auth: authReducer
});

export default feedbackReducer;
