import {
    GET_QUESTIONS,
    ADD_QUESTION,
    UPDATE_QUESTION,
    CLEAR_QUESTIONS
} from "./../actions/questions";

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
                [action.question.id]: action.question
            };
        case CLEAR_QUESTIONS:
            return {
            }
        case UPDATE_QUESTION: {
            if (action.option !== "") {
                return {
                    ...state,
                    [action.id]: {
                        ...state[action.id],
                        optionOne:
                            action.option === "optionOne"
                                ? {
                                      votes: state[
                                          action.id
                                      ].optionOne.votes.concat([
                                          action.currentUser
                                      ]),
                                      text: state[action.id].optionOne.text
                                  }
                                : state[action.id].optionOne,
                        optionTwo:
                            action.option === "optionTwo"
                                ? {
                                      votes: state[
                                          action.id
                                      ].optionTwo.votes.concat([
                                          action.currentUser
                                      ]),
                                      text: state[action.id].optionTwo.text
                                  }
                                : state[action.id].optionTwo
                    }
                };
            } else {
                return {
                    ...state,
                    [action.id]: {
                        ...state[action.id],
                        optionOne: {
                            votes: state[action.id].optionOne.votes.filter(
                                user => user.localeCompare([action.currentUser])
                            ),
                            text: state[action.id].optionOne.text
                        },
                        optionTwo: {
                            votes: state[action.id].optionTwo.votes.filter(
                                user => user.localeCompare([action.currentUser])
                            ),
                            text: state[action.id].optionTwo.text
                        }
                    }
                };
            }
        }
        default:
            return state;
    }
}
