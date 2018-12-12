import { fetchUsers } from "../api";
import { _getUsers } from './../_DATA';



export const GET_USERS = "GET_USERS";
export const ADD_USER = "ADD_USER";

export function getUsers(users) {
    return {
        type: GET_USERS,
        users
    };
}

export function handleFetchUsers() {
    return (dispatch) => {
        return _getUsers()
        .then((users) => {
            dispatch(getUsers(users))
        })
    }
}