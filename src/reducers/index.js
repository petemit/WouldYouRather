import currentUser from "./currentUser";
import { combineReducers } from "redux";
import users from "./users";
import questions from "./questions";
import results from "./results";
import requestedPage from "./requestedPage";

export default combineReducers({
    currentUser,
    users,
    questions,
    results,
    requestedPage
});
