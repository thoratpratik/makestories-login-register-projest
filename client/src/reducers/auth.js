import { Switch } from 'react-router-dom';
import { REGISTER_SUCCESS ,LOGIN_SUCCESS, LOGIN_FAIL, USER_LOADED,REGISTER_FAIL,AUTH_ERROR,LOGOUT } from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated:null,
    loading:true,
    user:null
}


export default function ( state = initialState , action){
    const { type, payload } = action;

    switch(type){
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token',payload.token);
            return{
                ...state,
                ...payload,
                isAuthenticated:true,
                loading:false,
                
            }

        case USER_LOADED:
            return{
                ...state,
                isAuthenticated:true,
                loading:false,
                user:payload
            }

        case REGISTER_FAIL:
        case LOGOUT: 
         case AUTH_ERROR:
        case LOGIN_FAIL:
            localStorage.removeItem('token');

            return {
                ...state,
                token:null,
                isAuthenticated:false,
                loading:false
            }


        default:
            return state;




    }


}