import axios from 'axios';
import { GET_MATCHES, GET_CANDIDATES, AUTH_ERROR, LIKE_ERROR } from '../actions/types';
import { setAlert } from './alert';

export const getCandidates = () => async dispatch => {
    try {
        // TODO: Add more conditions like less than x kilometers
        const res = await axios.get('/api/candidates');
        dispatch({
            type: GET_CANDIDATES,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
        dispatch({
            type: AUTH_ERROR
        });
    }
};

export const getMatches = () => async dispatch => {
    try {
        // TODO: Add more conditions like less than x kilometers
        const res = await axios.get(`/api/like?matching=1`);
        console.log('from action!');
        console.log(res.data);
        dispatch({
            type: GET_MATCHES,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
        dispatch({
            type: AUTH_ERROR
        });
    }
};

export const like = target_usert => async dispatch => {
    try {
        // TODO: Add more conditions like less than x kilometers
        const res = await axios.post(`/api/like/${target_usert}`);


    } catch (err) {
        const error = err.response.data.message;

        if (err) {
            dispatch(setAlert(error, ` error liking user: ${target_usert}`));
        }
    }
};

export const block = target_usert => async dispatch => {
    console.log('block');
    try {
        // TODO: Add more conditions like less than x kilometers
        const res = await axios.post(`/api/block/${target_usert}`);


    } catch (err) {
        const error = err.response.data.message;

        if (err) {
            dispatch(setAlert(error, ` error blocking user: ${target_usert}`));
        }
    }
};

export const getImages = target_usert => async dispatch => {
    console.log('getImages');
    try {
        // TODO: Add more conditions like less than x kilometers
        const res = await axios.post(`/api/image/${target_usert}`);


    } catch (err) {
        const error = err.response.data.message;

        if (err) {
            dispatch(setAlert(error, ` error getting images for user: ${target_usert}`));
        }
    }
};