// Axios used for making ajax/backend request to our server/api
import axios from 'axios';
import { FETCH_USER } from './types';

// Action creator using reduxThunk
// makes ajax request for connecting to the server.
// Get the current user details or undefined if none
export const fetchUser = () => async dispatch => {
    // make the get request and call the dispatch function
    // only when a response has been received
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
   };
