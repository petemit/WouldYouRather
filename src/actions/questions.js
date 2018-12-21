import { _getQuestions } from "../_DATA";
import { saveQuestion, saveAnswer } from "../api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const GET_QUESTIONS = "GET_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const UPDATE_QUESTION = "UPDATE_QUESTION";
export const CLEAR_QUESTIONS = "CLEAR_QUESTIONS"

export function getQuestions(questions) {
    return {
        type: GET_QUESTIONS,
        questions
    };
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    };
}

export function clearQuestions() {
    return {
        type: CLEAR_QUESTIONS
    }
}

export function handleAddQuestion(question) {
    return (dispatch, getState) => {
        dispatch(showLoading());
        return saveQuestion(question).then(question => {
            dispatch(addQuestion(question));
            dispatch(hideLoading());
        });
    };
}

export function handleUpdateQuestion(id, option, currentUser) {
    return (dispatch, getState) => {
        dispatch(updateQuestion(id, option, currentUser));
        return saveAnswer({
            authedUser: currentUser,
            qid: id,
            answer: option
        }).catch(e => {
            dispatch(updateQuestion(id, "", currentUser));
            console.warn("Error in handleUpdateQuestion: ", e);
            alert("There was an error in updating this question. Try again.");
        });
    };
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
        dispatch(showLoading());
        return _getQuestions().then(questions => {
            dispatch(getQuestions(questions));
            dispatch(hideLoading());
        });
    };
}
