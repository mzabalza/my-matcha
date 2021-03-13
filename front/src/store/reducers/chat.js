import { SET_CHAT, LOAD_CHAT_USER } from '../actions/types';


const initialState = {
    inChat: false,
    selectedUser: null
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_CHAT:
            return {
                ...state,
                inChat: payload
            }
        case LOAD_CHAT_USER:
            return {
                ...state,
                ...payload
            }
        default:
            return state;
    }
}