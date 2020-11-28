import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './Candidates.scss';
import axios from 'axios';

// COMPONENTS
import Card from '../Card/Card';

// ACTIONS
import { getCandidates } from '../../store/actions/match';


const Candidates = ({ user, getCandidates, candidates }) => {

    const [resetCandidates, setResetCandidates] = useState(true);

    useEffect(() => {
        console.log('get candidates');
        if (user)
            getCandidates();

    }, [user, resetCandidates]);


    console.log('candidates');
    console.log(candidates)

    return (
        <div className='candidates'>
            {candidates && candidates.length > 0 &&
                <Card candidate={candidates[0]} setResetCandidates={setResetCandidates} />}
        </div>
    )

};

const mapStateToProps = state => ({
    user: state.auth.user,
    candidates: state.match.candidates
});


export default connect(mapStateToProps, { getCandidates })(Candidates);