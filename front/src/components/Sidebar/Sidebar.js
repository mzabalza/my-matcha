import React, { useState } from 'react';
import './Sidebar.scss';
import './Button.scss';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import { logout } from '../../store/actions/auth';

// COMPONENTS
import SidebarChat from './SidebarChat';
import SidebarMatch from './SidebarMatch';

// ACTIONS
import { setChat } from '../../store/actions/chat';


const Sidebar = ({ user, logout, setShowProfile, setSelectedUser, inChat, setChat }) => {

    console.log(user);

    return (
        <div className='sidebar'>
            <div className='flex-col'>
                <div className='sidebar-header'>
                    {user &&
                        <div className='sidebar-header-profile'>
                            <img></img>
                            {user.user.firstname}
                        </div>
                    }
                </div>
                <div className='sidebar-menu'>
                    <a className='btn-text' onClick={() => setChat(false)}>MATCHES</a>
                    <a className='btn-text' onClick={() => setChat(true)}>MESSAGES</a>
                </div>
                <div className='sidebar-content'>
                    {inChat ? < SidebarChat /> : < SidebarMatch setShowProfile={setShowProfile} setSelectedUser={setSelectedUser} />}
                </div>
            </div>
            <div className='sidebar-logout' onClick={logout}>
                <FontAwesomeIcon icon={faSignOutAlt} />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.auth.user,
    inChat: state.chat.inChat
})

export default connect(mapStateToProps, { logout, setChat })(Sidebar);