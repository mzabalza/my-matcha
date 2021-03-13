import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import match from './match';
import chat from './chat';

export default combineReducers({
    auth,
    alert,
    match,
    chat
});