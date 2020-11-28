import React from 'react';
import { Link } from 'react-router-dom';

import './HeaderLanding.scss';

import tinderLogoWhite from '../../pages/Landing/tinderLogoWhite.png';

// COMPONENTS
import LoginButton from '../Button/LoginButton';

const HeaderLanding = () => {

    return (
        <div className='headerLanding'>
            <div className='headerLanding-title'>
                <img className="logo-img" src={tinderLogoWhite} />
                <div className='headerLanding-name'>matcha</div>
            </div>
            <div className="headerLanding-menu">
                <div className='headerLanding-item'>
                    <Link to='/login' style={{ textDecoration: 'none' }}>

                        <LoginButton title='LOG IN' />
                    </Link>

                </div>
                <div className='headerLanding-item'><i className="fas fa-bars"></i></div>
            </div>
        </div>
    )
};

export default HeaderLanding