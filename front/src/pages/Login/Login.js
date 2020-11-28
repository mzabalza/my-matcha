import React from 'react';
import LoginForm from '../../components/Form/LoginForm';
import './Login.scss';



const Login = () => {

    return (
        <div className='login'>
            <div className='login-form-container'>
                <LoginForm />

            </div>

        </div>
    )

};

export default Login;