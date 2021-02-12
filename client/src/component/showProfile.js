import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import img from '../extra/img.png'

const ShowProfile = ({profile}) => {

    // showing data on card if (material ui)

    return (
        <Fragment>
                
                 <Grid align ='center'>

                     
                    <Card border="primary"  style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={!profile.profileImg ? img : profile.profileImg} height="150"/>
                        <Card.Body>
                            <Card.Title>Hello {profile.user.name}</Card.Title>
                            <Card.Text>
                             I am { profile.profession }
                            </Card.Text>
                            <Card.Text>
                             City:{' '}{ profile.city }
                            </Card.Text>
                            <Card.Text >
                                Hobbies
                            </Card.Text>
                            {
                                profile.hobby.map( (e) => 
                                    (<Card.Text>{e}</Card.Text>)
                                )
                            }

                           
                        </Card.Body>

                                              
                    </Card>
                </Grid>
               
            

        </Fragment>
    )
};

export default ShowProfile;