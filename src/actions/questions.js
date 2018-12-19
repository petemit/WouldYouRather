import { _getQuestions } from "../_DATA";
import { saveQuestion, saveQuestionAnswer } from "../api";

export const GET_QUESTIONS = "GET_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const UPDATE_QUESTION = "UPDATE_QUESTION";

export function getQuestions(questions) {
    return {
        type: GET_QUESTIONS,
        questions
    };
}

function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(question) {
    return (dispatch, getState) => {
        return saveQuestion(question)
        .then((question) => dispatch(addQuestion(question)))
    };
}

export function handleUpdateQuestion(id, option, currentUser) {
    return (dispatch, getState) => {
        return saveQuestionAnswer({
            authedUser: currentUser,
            qid: id,
            answer: option
        })
        .then(() => dispatch(updateQuestion(id, option, currentUser)))
    }
}

function updateQuestion(id, option, currentUser) {
    
    return {
        type: UPDATE_QUESTION,
        id,
        option,
        currentUser
    };
}

export function handleFetchQuestions() {
    return dispatch => {
        return _getQuestions().then(questions => {
            dispatch(getQuestions(questions));
        });
    };
}
