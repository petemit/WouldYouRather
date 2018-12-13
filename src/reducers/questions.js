import { GET_QUESTIONS, ADD_QUESTION } from "./../actions/questions";

export default function questions(state = null, action) {
    switch (action.type) {
        case GET_QUESTIONS:
            return {
                ...state,
                ...action.questions
            };
        case ADD_QUESTION:
            return {
                ...state,
                ...action.question
            };
        default:
            return state;
    }
}
