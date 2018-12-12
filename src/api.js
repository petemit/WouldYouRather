import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
} from "./_DATA.js";

export function fetchInitialData() {
    return Promise.all([
        _getUsers,
        _getQuestions
    ]).then(
        ([users, questions]) => ({
            users,
            questions
        })
    );
}

export function fetchUsers() {
    return new Promise(_getUsers).then(
        (users) => ({
            users
        })
    );
}

export function saveQuestion(data) {
    return _saveQuestion(data);
}

export function saveQuestionAnswer(data) {
    return _saveQuestionAnswer(data);
}
