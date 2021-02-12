import { combineReducers } from 'redux';
import auth from './auth';
import profile from './profile';
import alert from './alert';

// combine Reducer for store

export default combineReducers ( {
    auth,
    profile,
    alert
    
});
