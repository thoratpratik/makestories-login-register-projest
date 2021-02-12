
import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MyNavbar from './Navbar';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../actions/profile';
import FileBase from 'react-file-base64';
import ImageUploader from 'react-images-upload';



 const EditProfile = ({ profile:{profile, loading}, getCurrentProfile,history,createProfile }) => {

    const [ formData, setFormData ] = useState( {
        profession:'',
        bio:'',
        hobby:'',
        city:'',
        profileImg:''

    });

    useEffect( () => {
        getCurrentProfile();

        setFormData( {
            // set data in testfiels from DB
                profession : loading || !profile.profession ? '':profile.profession,
                bio : !profile.bio ? '' : profile.bio,
                hobby:!profile.hobby ? '' : profile.hobby,
                city:!profile.city ? '' : profile.city,
                profileImg:!profile.profileImg ? '': profile.profileImg

        } )
    } ,[loading,getCurrentProfile])

    const {profession,bio,hobby,city,profileImg} = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]:e.target.value })

    
    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData,history,true);  //  Edit user profile 

     }


    return (
       <Fragment>
           <MyNavbar/>
           <h1 className="large text-danger">
             Edit Your Profile
        </h1>
        
        <Form onSubmit = { e => onSubmit(e) }>
                <Form.Group  controlId="exampleForm.ControlInput1">
                <Form.Group>
                <FileBase type="file" multiple={false} onDone={({ base64 }) => setFormData({ ...formData, profileImg: base64 })}/>
                </Form.Group>
                    <Form.Label>Profession* :</Form.Label>
                    <Form.Control as="select" name="profession" value={profession} onChange={ e => onChange(e)}  >
                    <option>Select Profession</option>
                    <option>Software Enginner</option>
                    <option>Software Tester</option>
                    <option>Team Lead</option>
                    <option>Manager</option>
                    <option>HR Manager</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Bio :</Form.Label>
                    <Form.Control  type="text" name="bio" value={bio} onChange={ e => onChange(e)}/>   
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Hobbies Please use comma separated values (eg.HTML,CSS,JavaScript,PHP) :</Form.Label>
                    <Form.Control  type="text" name="hobby" value={hobby} onChange={ e => onChange(e)}/>                       
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>City* :</Form.Label>
                    <Form.Control  type="text" name="city" value={city} onChange={ e => onChange(e)} />                       
                </Form.Group>
                <center>
                <input type="submit" className="btn btn-primary my-1" />
                
      
                </center>
        </Form>
       </Fragment>
    )
}

EditProfile.prototype = {
    profile:PropTypes.object.isRequired,
    getCurrentProfile:PropTypes.func.isRequired,
    createProfile:PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    profile:state.profile
})

export default connect(mapStateToProps,{createProfile,getCurrentProfile})(EditProfile);