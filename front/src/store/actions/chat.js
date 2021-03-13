import { SET_CHAT, LOAD_CHAT_USER } from './types';

export const setChat = (inChat) => dispatch => {
    dispatch({
        type: SET_CHAT,
        payload: inChat
    });

};
export const loadChatUser = ({ user }) => dispatch => {
    dispatch({
        type: LOAD_CHAT_USER,
        payload: { user }
    });

};