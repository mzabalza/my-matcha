import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import './Home.css';

// Components
import Sidebar from '../../components/Sidebar/Sidebar';
import SidebarProfile from '../../components/Sidebar/SidebarProfile';
import Candidates from '../../components/Candidates/Candidates';

// TODO move requests to action - reducers.


const Home = ({ isAuthenticated, user }) => {

    const [showProfile, setShowProfile] = useState(false);

    if (!isAuthenticated) {
        return <Redirect to='/' />
    }

    return (
        <div className='home-container'>
            <Sidebar />
            <Candidates />
            {showProfile && <SidebarProfile />}
        </div>
    )
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});

export default connect(mapStateToProps)(Home);