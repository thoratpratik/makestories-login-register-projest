import axios from 'axios';
import { setAlert } from './alert';
import { LOGIN_SUCCESS, LOGIN_FAIL,REGISTER_SUCCESS,SET_ALERT,REMOVE_ALERT,USER_LOADED,CLEAR_PROFILE,REGISTER_FAIL,AUTH_ERROR,LOGOUT } from './types';
import setAuthToken from '../extra/setAuthTokenHeader';

const url = 'https://login-register-backend-ms.herokuapp.com'


// Load User

export const loadUser = () => async dispatch => {
   
    // attach header to the api request
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }

    
    try {
             const res = await axios.get(`${url}/me`);

            dispatch({
                type:USER_LOADED,
                payload:res.data
            })
    } catch (error) {   
        dispatch({
            type:AUTH_ERROR 
        });
    }
}


// Register User

export const register = ( { name, email, password } ) => async dispatch => {

    const config = {
        headers : {
            'Content-Type':'application/json'
        }
    }

    const body = JSON.stringify({ name, email, password });

    try {
          const res = await axios.post(`${url}/api/user`,body,config)
          
          dispatch({
              type:REGISTER_SUCCESS,
              payload:res.data
          });

          dispatch(loadUser());
    
          
    } catch (error) {
        const err = error.response.data.errors;

        if(err){
            err.forEach( e => {
                dispatch(setAlert(e.msg,'error'))
            });
        }

        dispatch ({
            type:REGISTER_FAIL
        })
    }
}


// Login user
export const login = ( email, password  ) => async dispatch => {
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }

        const body = JSON.stringify({ email, password });

        try {

            const res = await axios.post(`${url}/`,body,config)

            dispatch ({
            type: LOGIN_SUCCESS,
            payload:res.data
            });

            dispatch(loadUser());
                
        } catch (error) {
            const err = error.response.data.errors;
            // make alert for error
            if(err)
            {
                err.forEach(e => {
                    dispatch(setAlert(e.msg,'error'))
                });
            }

            dispatch ({
                type:LOGIN_FAIL
            });
            
        }
}


// Logout / clear profile

export const logout = () => dispatch => {
    dispatch({ type: CLEAR_PROFILE});
    dispatch({ type:LOGOUT });
    

};
