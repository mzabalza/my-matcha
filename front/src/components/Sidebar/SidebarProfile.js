import React from 'react';
import './SidebarProfile.scss';

const SidebarProfile = ({ selectedUser }) => {

    console.log('selectedUser');
    console.log(selectedUser);

    return (
        <div className="sidebarProfile">

            {selectedUser &&
                <div className='card-left'>
                    <img src={`http://localhost:5000/images/${selectedUser.profile_pic}`} />
                    <div className='card-left--info'>
                        <div className='card-left--info-basic'>
                            <div className='card-left--info-basic-main'>
                                <div className='card-left--info-basic-name'>{selectedUser.firstname}</div>
                                <div className='card-left--info-age'>{selectedUser.age}</div>
                            </div>

                            <div>{selectedUser.gender}</div>
                        </div>
                        <div className='card-left--info-bio'>
                            <div>{selectedUser.bio}</div>
                        </div>
                    </div>
                    <div className='card-left--actions'>
                        <div className='card-left--actions-unmatch'>UNMATCH</div>
                        <div className='card-left--actions-match'>MATCH</div>
                    </div>
                </div>}

        </div>
    )
};

export default SidebarProfile;