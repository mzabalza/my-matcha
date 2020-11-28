import React from 'react';
import './Register.scss'

// COMPONENTS
import RegisterForm from '../../components/Form/RegisterForm';

const Register = () => {

    return (
        <div className='register'>
            <div className='register-form-container'>
                <RegisterForm />
            </div>
        </div>
    )

};

export default Register;