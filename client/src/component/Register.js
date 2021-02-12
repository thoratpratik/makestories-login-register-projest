import React, { Fragment,useState } from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { deprecatedPropType, Grid } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { TextField , Button } from '@material-ui/core';
import {Link,Redirect} from 'react-router-dom';
import {register} from '../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { setAlert } from '../actions/alert';


const  Register = ({register, isAuthenticated, setAlert}) => {
    const [formData,setFormData] = useState ({
        name:'',
        email:'',
        password:'',
        password2:''
    });

    const { name,email,password,password2 } = formData;

    const onChange = (e) => {
        setFormData( { ...formData , [e.target.name]:e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        // checking pwd match 
        if(password !== password2){
            setAlert('Password do not Match','error');
        }
        else{
            register({name,email,password});
            console.log('user Addded');
        }
    }

    if(isAuthenticated){
        // once get token then reditrect to dektop ie main page
        return <Redirect to='/desktop'/>;
      }
    
      // css for paper and avatar
    const paperstyle = {padding :20 ,height:'70%',width:'60vh',margin:'20px auto'}
    const avatarstyle = {backgroundColor:'green'}

            return(
                <Fragment>
                         <Paper elevation={5} style={paperstyle}>
                    <Grid align='center'>
                    <Avatar style={avatarstyle}><LockOutlinedIcon/></Avatar>
                        <h2>Sign Up</h2>
                        <br></br>
                        <form noValidate autoComplete="off" onSubmit = { e => onSubmit(e)}>
                            <TextField id="outlined-basic" label="Name" variant="outlined" value={name} name="name"  onChange= {e => onChange(e)}/>
                            <br/><br/>
                            <TextField id="outlined-basic" label="Email" variant="outlined" value={email} name="email" onChange= {e => onChange(e)}/>
                            <br/><br/>
                            <TextField id="outlined-basic" label="Password" variant="outlined"  type="password"value={password} name="password" onChange= {e => onChange(e)}/>
                            <br/><br/>
                            <TextField id="outlined-basic" label="Confirm Password" variant="outlined"  type="password"value={password2} name="password2" onChange= {e => onChange(e)}/>
                            <br/><br/>
                            <Button type="submit" variant="outlined" color="primary" >
                             Sign Up
                            </Button>
                            <p className="my-1">
                            Alredy Have Account? <Link to='/'>Sign In</Link>
                            </p>

                         </form>
                    </Grid>
            
            </Paper>

                </Fragment>
            )
}

Register.protoTypes = {
    register:PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool,
    setAlert:PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated : state.auth.isAuthenticated
})



export default connect(mapStateToProps,{register,setAlert})(Register);