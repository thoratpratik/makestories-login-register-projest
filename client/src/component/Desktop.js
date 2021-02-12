import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { getCurrentProfile } from '../actions/profile'
import profile from '../reducers/profile';
import { CircularProgress } from '@material-ui/core';
import ShowProfile from './showProfile'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import MyNavbar from './Navbar';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import EditProfile from './EditProfile';

const Desktop = ({ getCurrentProfile,auth:{user,isAuthenticated},profile:{profile,loading} }) => {
    
        useEffect( () => {
                getCurrentProfile();
        },[])

        
    
    return (
            <Fragment>
                    <MyNavbar/>
                    {  // if loading then spinner or show user data ( if user having profile then show profile card)
                            loading ?
                            <Fragment>
                                <CircularProgress color="secondary" />    
                            </Fragment> 
                            :
                            <Fragment>
                                    {
                                            profile === null 
                                            ?
                                            <Fragment>
                                                  <h3 className="large text-danger">Welcome </h3>
                                                  <p> Yous have not created Profile,Please create Profile</p>
                                                  <Link to="/create-profile" className="btn btn-light"><AccountCircleOutlinedIcon/>Create Profile</Link>
                                            </Fragment>
                                            :   
                                            <Fragment>
                                                    <h1 className="large text-danger">
                                                        Edit Your Profile
                                                    </h1>
                                                    <Link to="/edit-profile" className="btn btn-light"><EditOutlinedIcon/>Edit-Profile</Link>
                                                    <ShowProfile profile ={profile}/>
                                                    

                                            </Fragment>

                                    }
                            </Fragment>
                          
                    }
            </Fragment>
        
                
    )
};

Desktop.prototype = {
        getCurrentProfile:PropTypes.func.isRequired,
        auth:PropTypes.object.isRequired,
        profile:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
        auth:state.auth,
        profile:state.profile
        
})

export default  connect(mapStateToProps, {getCurrentProfile}) (Desktop);