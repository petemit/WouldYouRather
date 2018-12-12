import { SET_CURRENT_USER } from "../actions/currentUser";

export default function currentUser(state = "", action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return action.id;
        default:
            return state;
    }
}
