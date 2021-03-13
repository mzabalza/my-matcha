import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import './Home.css';

// COMPONENTS
import Sidebar from '../../components/Sidebar/Sidebar';
import SidebarProfile from '../../components/Sidebar/SidebarProfile';
import Candidates from '../../components/Candidates/Candidates';

// ACTIONS
import { setChat } from '../../store/actions/chat';

// TODO move requests to action - reducers.


const Home = ({ isAuthenticated, user, inChat, setChat }) => {

    const [showProfile, setShowProfile] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    if (!isAuthenticated) {
        return <Redirect to='/' />
    }

    return (
        <div className='home-container'>
            <Sidebar setShowProfile={setShowProfile} setSelectedUser={setSelectedUser} />
            {!inChat ?
                <Candidates setShowProfile={setShowProfile} setSelectedUser={setSelectedUser} /> :
                null
            }

            {showProfile && <SidebarProfile selectedUser={selectedUser} />}
        </div>
    )
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    inChat: state.chat.inChat
});

export default connect(mapStateToProps, { setChat })(Home);