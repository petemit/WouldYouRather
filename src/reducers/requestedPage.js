import { SET_REQUESTED_PAGE } from "../actions/requestedPage";

export default function requestedPage(state = null, action) {
    switch (action.type) {
        case SET_REQUESTED_PAGE:
            //todo not sure if this should be an id.
            return action.id;
        default:
            return state;
    }
}
