import React, { useState } from 'react';
// import './RegisterForm.css';
import './Form.scss';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


// Components
import SubmitButton from '../Button/SubmitButton';

// Actions
import { setAlert } from '../../store/actions/alert';
import { register } from '../../store/actions/auth';

const RegisterForm = ({ alerts, setAlert, register, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        // firstname: '',
        // lastname: '',
        // age: 0,
    });

    const onChange = (e) => {
        e.preventDefault();
        const key = e.target.name;
        const value = e.target.value;

        setFormData((prevFormData) => ({ ...prevFormData, [key]: value }));
        console.log(formData);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
        register(formData);

    };

    if (isAuthenticated) {
        console.log('redirect');
        return <Redirect to='/home' />
    }

    return (

        <div>

            <div className='flex-row-1 my-2 users-icon'>
                <i class="fas fa-users"></i>
            </div>

            <div className='form-title'>
                <h1>MEMBER REGISTER</h1>

            </div>

            <form className='form' onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input placeholder='last name' type='text' name='lastname' autoComplete="off" onChange={e => onChange(e)}></input>
                </div>

                <div className="form-group">
                    <input placeholder='age' type='number' name='age' autoComplete="off" onChange={e => onChange(e)}></input>
                </div>

                <div className="form-group">
                    <input placeholder='gender' type='text' name='gender' autoComplete="off" onChange={e => onChange(e)}></input>
                </div>

                <div className="form-group">
                    <input placeholder='gender target(todo: options)' type='text' name='gender_target' autoComplete="off" onChange={e => onChange(e)}></input>
                </div>

                <div className="form-group">
                    <textarea placeholder='bio (optional)' name='bio' type='textarea' onChange={e => onChange(e)}></textarea>
                </div>

                <div className="form-group">
                    <input placeholder='email' name='email' type='text' autoComplete="off" onChange={e => onChange(e)}></input>
                </div>

                <div className="form-group">
                    <input placeholder='password' name='password' type='password' onChange={e => onChange(e)}></input>
                </div>

                <div className='flex-row-1 my-2'>
                    <SubmitButton onClick={onSubmit} />
                </div>


            </form>
        </div>

    )
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    alerts: state.alert
})



export default connect(mapStateToProps, { setAlert, register })(RegisterForm);