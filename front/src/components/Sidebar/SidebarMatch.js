
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './SidebarMatch.scss';

// ACTIONS
import { getMatches } from '../../store/actions/match';

// COMPONENTS
import MiniCard from '../Card/MiniCard';

const SidebarMatch = ({ matches, getMatches }) => {

    // const [matches2, setMatches2] = useState([]);

    useEffect(() => {
        console.log('get matches');
        getMatches();

    }, []);


    console.log('matches');
    console.log(matches);

    return (
        matches && matches.length && <div className='sidebar-matches'>
            {matches.map(match => (<MiniCard user={match} />))}
        </div>
    )
}

const mapSateToProps = state => ({
    matches: state.match.matches
});

export default connect(mapSateToProps, { getMatches })(SidebarMatch);