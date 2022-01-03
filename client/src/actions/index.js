import axios from 'axios';
import { GET_USER } from './types';

// Get the valid user object to check if the user is signed in
const getUser = () =>{
    return function(dispatch){
        axios
            .get('/api/current_user')
            .then(res => dispatch({ type: GET_USER, payload: res}));
    };
};