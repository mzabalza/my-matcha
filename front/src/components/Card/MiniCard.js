import React from 'react';
import './MiniCard.scss'

const MiniCard = ({ user }) => {

    console.log('from Minicard');
    console.log(user);
    // style={{ backgroundImage: `url("http://localhost:5000/images/${user.profile_pic}")` }}>


    return (
        <div className='MiniCard' key={user.id}>
            <img src={`http://localhost:5000/images/${user.profile_pic}`} />
            <div className='MiniCard-name' >{user.id} {user.firstname}</div>
        </div>
    )
};

export default MiniCard;