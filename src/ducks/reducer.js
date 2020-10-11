import axios from 'axios'

const initialState = {
    username: ' ',
    id: 0,
    profile_picture: ''
}

 const  GET_USER = 'GET_USER',
        LOGIN_USER = 'LOGIN_USER',
        LOGOUT_USER = 'LOGOUT_USER';

export function loginUser(username, id){
    return {
        type: loginUser,
        payload: {
            username: username, 
            id: id
        }

    }
}

export function logoutUser(){
    return {
        type: LOGOUT_USER,
        payload: null
    }
}

export function getUser(){
    const payload = axios.get('/api/auth/user')
    return{
        type: GET_USER,
        payload: payload
    }
}

export default function(state = initialState, action){
    switch(action.type){
        case LOGIN_USER:
            const{username, id, profile_picture} = action.payload.username;
            return{username, id, profile_picture}
        case LOGOUT_USER:
            return initialState;
        case GET_USER + '_PENDING':
            return{...state}
        case GET_USER + '_FULFILLED':
            return{username, id, profile_picture}
        case GET_USER + '_REJECTED':
            return initialState;
        default:
            return state;
    }
}