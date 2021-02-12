import axios from 'axios';
import { setAlert } from './alert';

import { GET_PROFILE, PROFILE_ERROR,CLEAR_PROFILE } from './types';


const url = 'https://login-register-backend-ms.herokuapp.com'


//get current user profile 
export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get(`${url}/api/user/profile/me`);

        dispatch({
            type:GET_PROFILE,
            payload:res.data
        })
    } catch (error) {

        // if error occure then clear profile auth=null
        dispatch({type:CLEAR_PROFILE})
        dispatch({
            type:PROFILE_ERROR,
            payload:{msg:error.response.statusText , status: error.response.status}
        })
    }
}


// create and update profile

export const createProfile = (formData,history,edit = false) => async dispatch => {
    console.log("from action ")
    try {
        const config = {
            headers: {
                'Content-type':'application/json'
            }
        }

        const res = await axios.post(`${url}/api/user/profile`,formData,config);

        dispatch({
            type : GET_PROFILE,
            payload:res.data
        });

        dispatch(setAlert(edit ? 'Profile Updated':'Profile Created','success'));

        if(!edit){
            history.push('/desktop');
        }

    } catch (error) {
        const err = error.response.data.errors;

        if(err) {
            err.forEach(element => {
                dispatch(setAlert(element.msg ,'error'))
            });
        }

        dispatch({
            type:PROFILE_ERROR,
            payload:{ msg : error.response.statusText , status: error.response.status }
        });
    }
} 