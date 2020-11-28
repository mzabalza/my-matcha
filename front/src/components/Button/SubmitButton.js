import React from 'react';

import './SubmitButton.scss'


const SubmitButton = ({ onClick }) => {

    return (
        <div className="btn-submit" onClick={onClick}>
            LOGIN
        </div>
    )

};

export default SubmitButton;