import React from 'react';
import './MiniCard.scss'

const MiniCard = ({ user, setShowProfile, setSelectedUser }) => {

    console.log('from Minicard');
    console.log(user);
    // style={{ backgroundImage: `url("http://localhost:5000/images/${user.profile_pic}")` }}>

    const selectUser = () => {
        setShowProfile(prev => !prev)
        setSelectedUser(user);
    }


    const del = () => {
        console.log('tesete delete');
    }

    return (
        <div className='MiniCard' key={user.id} onClick={selectUser}  >
            <img src={`http://localhost:5000/images/${user.profile_pic}`} />
            <div className='MiniCard-name' >{user.id} {user.firstname}</div>
        </ div >
    )
};

export default MiniCard;