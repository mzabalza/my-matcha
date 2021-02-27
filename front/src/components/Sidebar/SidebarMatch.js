
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './SidebarMatch.scss';

// ACTIONS
import { getMatches } from '../../store/actions/match';

// COMPONENTS
import MiniCard from '../Card/MiniCard';

const SidebarMatch = ({ matches, getMatches, setShowProfile, setSelectedUser }) => {

    // const [matches2, setMatches2] = useState([]);

    useEffect(() => {
        console.log('get matches');
        getMatches();

    }, []);

    const del = () => {
        console.log('tesete delete');
    }


    console.log('matches');
    console.log(matches);

    return (
        matches && matches.length && <div className='sidebar-matches'>
            {matches.map(user => (<MiniCard user={user} setShowProfile={setShowProfile} setSelectedUser={setSelectedUser} />))}
        </div>
    )
}

const mapSateToProps = state => ({
    matches: state.match.matches
});

export default connect(mapSateToProps, { getMatches })(SidebarMatch);