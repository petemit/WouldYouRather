import { _getUsers } from "./../_DATA";
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const GET_USERS = "GET_USERS";
export const ADD_USER = "ADD_USER";

export function getUsers(users) {
    return {
        type: GET_USERS,
        users
    };
}

export function handleFetchUsers() {
    return dispatch => {
        dispatch(showLoading());
        return _getUsers().then(users => {
            dispatch(getUsers(users));
            dispatch(hideLoading());
        });
    };
}
