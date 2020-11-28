import React from 'react';
import './Alert.css';
import { connect } from 'react-redux';

//ACTIONS
import { removeAlert } from '../../store/actions/alert';

const Alert = ({ alerts, removeAlert }) => {


    return (
        alerts.length > 0 && alerts.map((alert) => (
            <div className='alert' key={alert.id}>
                <span className='fas fa-exclamation-circle'></span>
                <span className='msg'>{alert.msg}</span>
                <span className='close-btn' onClick={() => removeAlert(alert.id)}>
                    <span className='fas fa-times'></span>
                </span>
            </div>
        ))
    )

};
const mapStateToProps = state => ({
    alerts: state.alert
});

export default connect(mapStateToProps, { removeAlert })(Alert);