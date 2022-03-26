import axios from 'axios';
import { GET_USER } from './types';

// Get the valid user object to check if the user is signed in
export const getUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: GET_USER, payload: res.data});
};

export const handleToken = token => async dispatch => {
    // post request to send token to backend
    const res = await axios.post('/api/stripe', token);
    dispatch({ type: GET_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/surveys', values);

    history.push('/surveys');
    dispatch({ type: GET_USER, payload: res.data });
};