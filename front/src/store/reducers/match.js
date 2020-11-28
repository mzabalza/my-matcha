import { GET_MATCHES, GET_CANDIDATES, LIKE_ERROR } from '../actions/types';


const initialState = {
    matches: [],
    candidates: [],
    selectedUser: null,
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_MATCHES:
            return {
                ...state,
                matches: payload
            }
        case GET_CANDIDATES:
            return {
                ...state,
                candidates: payload
            }
        default:
            return state;
    }
}