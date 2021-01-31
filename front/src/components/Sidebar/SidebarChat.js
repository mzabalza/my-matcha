import { Satellite } from '@material-ui/icons';
import React from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';

let socket;


const SidebarChat = ({ user }) => {

    const ENDPOINT = 'localhost:5000';


    return (
        <div>
            SidebarChat
            {user && user.user.firstname}
        </div>
    )

}

const mapStateToProps = state => ({
    user: state.auth.user
})

export default connect(mapStateToProps)(SidebarChat);