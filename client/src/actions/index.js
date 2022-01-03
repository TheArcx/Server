import axios from 'axios';
import { GET_USER } from './types';

// Get the valid user object to check if the user is signed in
export const getUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: GET_USER, payload: res.data});
};