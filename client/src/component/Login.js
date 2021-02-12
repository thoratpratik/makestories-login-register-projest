import React, { Fragment, useState } from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { Grid } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { TextField , Button } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';

const  Login = ({login , isAuthenticated }) => {

    const [formData, setFormData ] = useState({
        email:'',
        password:''
    });

    const {email, password } = formData;

    const onChange = (e) => {
            setFormData({...formData,[e.target.name]:e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
       // console.log(formData);
        login(email,password);  // make login request --> go to action
    }

    if(isAuthenticated){
        // if user  have token then redirected to desktop (main page)
        return <Redirect to='/desktop'/>;
      }

        // css styling for paper and avtar
    const paperstyle = {padding :20 ,height:'70vh',width:'60vh',margin:'20px auto'}
    const avatarstyle = {backgroundColor:'green'}

    return (
       <Fragment>
            <Paper elevation={5} style={paperstyle}>
                    <Grid align='center'>
                    <Avatar style={avatarstyle}><LockOutlinedIcon/></Avatar>
                        <h2>Sign In</h2>
                        <br></br>
                        <form noValidate autoComplete="off" onSubmit = {e => onSubmit(e)}>
                            <TextField id="outlined-basic" label="Email" variant="outlined" name="email" value={email}  onChange ={ e => onChange(e)}/>
                            <br/><br/>
                            <TextField id="outlined-basic" label="Password" variant="outlined"  type="password" name="password" value={password} onChange= { e => onChange(e) }/>
                            <br/><br/>
                            <Button type = "submit" variant="outlined" color="primary" >
                             Sign In
                            </Button>
                            <p className="my-1">
                            Dont't have an account? <Link to='/register'>Sign Up</Link>
                            </p>

                         </form>
                    </Grid>
            
            </Paper>
       </Fragment>
    )
} 

Login.protoTypes = {
    login:PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
 
})

export default  connect(mapStateToProps,{login})(Login);