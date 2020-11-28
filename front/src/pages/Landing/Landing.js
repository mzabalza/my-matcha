import React from 'react';
import { Link } from 'react-router-dom';

import './Landing.scss';
import tinderLogoWhite from './tinderLogoWhite.png';
import del from './del.jpg'


// COMPONENTS
import HeaderLanding from '../../components/Layout/HeaderLanding';
import LoginButton from '../../components/Button/LoginButton';

import { Button } from '@material-ui/core';


console.log(tinderLogoWhite);
console.log(del);

const Landing = () => {


    // TODO: put header 
    return (
        <div className='landing-container'>
            <HeaderLanding />
            <div className='logo'>
                <img className="logo-img" src={tinderLogoWhite} />
                <Link to='/register' style={{ textDecoration: 'none' }}>
                    <LoginButton title='SIGN UP' />
                </Link>
            </div>
        </div>
    )
};

export default Landing;