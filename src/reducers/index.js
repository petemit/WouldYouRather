import currentUser from "./currentUser";
import { combineReducers } from "redux";
import users from "./users";
import questions from "./questions";

export default combineReducers({
    currentUser,
    users,
    questions
});
