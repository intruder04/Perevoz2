import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from './types';


export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user: user
    };
}

export function login(data) {
    return dispatch => {
        console.log("logindata to server - ",data);
        return axios.post('/api/auth', data).then(res => {
            const token = res.data.token;
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token); //axios headers
            dispatch(setCurrentUser(jwtDecode(token))); //save user in redux store
        });
    }
}

export function logout() {
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser()); //empty user so reducer returns isAuthenticated: false
    }
}