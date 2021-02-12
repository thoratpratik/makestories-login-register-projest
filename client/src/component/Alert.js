import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Alert from '@material-ui/lab/Alert';

// alert component 
const Alerts = ({ alerts }) => {
    
   return ( 
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map(alert => (
          <Alert severity={alert.alertType} key={alert.id}>{alert.msg}</Alert>

        ))
        )
}   

Alert.propTypes = {
    alerts:PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    alerts : state.alert
})

export default connect(mapStateToProps)(Alerts);