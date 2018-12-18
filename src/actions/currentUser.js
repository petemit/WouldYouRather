export const SET_CURRENT_USER = "SET_CURRENT_USER";
//todo don't think I need this:
export const GET_CURRENT_USER = "GET_CURRENT_USER";

export function setCurrentUser(id) {
    return {
        type: SET_CURRENT_USER,
        id
    };
}