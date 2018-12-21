import currentUser from "./currentUser";
import { combineReducers } from "redux";
import users from "./users";
import questions from "./questions";
import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers({
    currentUser,
    users,
    questions,
    loadingBar: loadingBarReducer
});
