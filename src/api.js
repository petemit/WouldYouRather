import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
} from "./_DATA.js";

export function fetchInitialData() {
    return Promise.all([_getUsers, _getQuestions]).then(
        ([users, questions]) => ({
            users,
            questions
        })
    );
}

export function saveQuestion(data) {
    return _saveQuestion(data);
}

export function saveAnswer(data) {
    // return new Promise((res, rej) => { 

    // }

    return _saveQuestionAnswer(data);
}
