import React, { Component } from "react";
import { connect } from "react-redux";
import { handleFetchQuestions } from "./../actions/questions";
import Avatar from "./Avatar";

class QuestionBoard extends Component {
    componentDidMount() {
        this.props.dispatch(handleFetchQuestions());
    }
    render() {
        const { questions, users } = this.props;
        return (
            <div>
                <h3 className="center">Would You Rather...</h3>
                <ul>
                    {questions != undefined &&
                        Object.values(questions).map(question => {
                            return (
                                <div>
                                    <li className="question" key={question.id}>
                                        <span>
                                        <h3 className="questionText">{questions[question.id].optionOne.text}</h3>
                                        <h3 className="questionText">OR...</h3>
                                        </span>
                                        <div className="avatar_container">
                                            <div className="right">
                                                <Avatar
                                                    align="right"
                                                    user={
                                                        users[question.author]
                                                            .name
                                                    }
                                                    avatarURL={
                                                        users[question.author]
                                                            .avatarURL
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </li>
                                </div>
                            );
                        })}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ questions, users }) {
    return {
        questions,
        users
    };
}

export default connect(mapStateToProps)(QuestionBoard);
