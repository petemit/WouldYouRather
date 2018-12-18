import {
    GET_QUESTIONS,
    ADD_QUESTION,
    UPDATE_QUESTION
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
                ...action.question
            };
        case UPDATE_QUESTION:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    optionOne:
                        action.option === "optionOne"
                            ? {
                                  votes: state[action.id].optionOne.votes.concat(
                                      [action.currentUser]
                                  ),
                                  text: state[action.id].optionOne.text

                                  //...state[action.option]
                              }
                            : state[action.id].optionOne,
                    optionTwo:
                        action.option === "optionTwo"
                            ? {
                                  votes: state[action.id].optionTwo.votes.concat(
                                      [action.currentUser]
                                  ),
                                  text: state[action.id].optionTwo.text
                              }
                            :  state[action.id].optionTwo
                }
            };
        default:
            return state;
    }
}
