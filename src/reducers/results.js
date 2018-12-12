import { GET_RESULTS } from "./../actions/results";

export default function results(state = {}, action) {
    switch (action.type) {
        case GET_RESULTS:
            return {
                ...state,
                ...action.results
            };
        default:
            return state;
    }
}
