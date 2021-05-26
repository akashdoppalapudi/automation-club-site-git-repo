import { combineReducers } from 'redux';
import posts from './posts';
import recents from './recents';
import contacts from './contacts';

export default combineReducers({
    posts,
    recents,
    contacts,
});