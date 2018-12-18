import { _getQuestions } from "../_DATA";

export const GET_QUESTIONS = "GET_QUESTIONS"
export const ADD_QUESTION = "ADD_QUESTION"
export const UPDATE_QUESTION = "UPDATE_QUESTION"

export function getQuestions(questions) {
    return {
        type: GET_QUESTIONS,
        questions
    };
}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function updateQuestion(id, option, currentUser) {
    return {
        type: UPDATE_QUESTION,
        id,
        option,
        currentUser
    }
}

export function handleFetchQuestions() {
    return (dispatch) => {
        return _getQuestions()
        .then((questions) => {
            dispatch(getQuestions(questions))
        })
    }
}