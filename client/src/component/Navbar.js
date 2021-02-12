import React,{Fragment} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav';
import { connect } from 'react-redux';
import {logout} from '../actions/auth';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';


const MyNavbar = ({auth: {isAuthenticated,loading},logout}) => {

    

    return (
        <Fragment>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand >Login-Registration</Navbar.Brand>
            
        <a onClick={logout} href="/">
          <i className="fas fa-sign-out-alt"></i>{' '}    
           <span className="hide-sm">Logout</span>
        </a>
        </Navbar>
        </Fragment>
    )
}

MyNavbar.prototypes = {
    logout:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired 
  }
  
  const mapStateToProps = state => ({
    auth : state.auth
  })

export default connect(mapStateToProps, {logout})(MyNavbar);