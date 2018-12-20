import React, { Component } from "react";
import { connect } from "react-redux";
import Avatar from "./Avatar";
import { MdCheckCircle } from "react-icons/md";
import {
    getResultsFromQuestion,
    getOption,
    questionAnsweredByCurrentUser
} from "../util";
import { handleUpdateQuestion } from "../actions/questions";
import { Redirect } from "react-router-dom";
import { PropTypes } from "prop-types";

class Poll extends Component {
    onClickOption = (e, option, questionId) => {
        e.preventDefault();
        this.props.dispatch(
            handleUpdateQuestion(questionId, option, this.props.currentUser)
        );
    };
    render() {
        const { questions, users, currentUser, id } = this.props;
        let question = null;
        if (questions != null) {
            question = questions[id];
        }
        if (question == null) {
            return <Redirect to="/notAPage" />;
        }

        const option = getOption(question, currentUser);
        const answered = questionAnsweredByCurrentUser(question, currentUser);

        //statistics
        const {
            optionOneUserCount,
            optionOnePercentage,
            optionTwoUserCount,
            optionTwoPercentage
        } = getResultsFromQuestion(question);
        return (
            <div>
                <h3 className="center">Would You Rather...</h3>
                <div className="question">
                    <div
                        className="side"
                        onClick={e => {
                            if (!answered) {
                                this.onClickOption(e, "optionOne", question.id);
                            }
                        }}
                    >
                        <span>
                            <h4
                                className="split_question_text"
                                style={
                                    answered === true
                                        ? option === "optionOne"
                                            ? { background: "#a3cea8A0" }
                                            : { background: "#d7e29b" }
                                        : {}
                                }
                            >
                                {questions[question.id].optionOne.text}
                            </h4>
                        </span>
                        <h4 className="bottom_question">
                            {optionOneUserCount}{" "}
                            {optionOneUserCount !== 1 ? "users" : "user"}:{" "}
                            {optionOnePercentage}
                            {option === "optionOne" && (
                                <MdCheckCircle color="#79d666" />
                            )}
                        </h4>
                    </div>
                    <div>
                        <span>
                            <h4 className="or_text">OR...</h4>
                        </span>
                    </div>
                    <div
                        className="side"
                        onClick={e => {
                            if (!answered) {
                                this.onClickOption(e, "optionTwo", question.id);
                            }
                        }}
                    >
                        <span>
                            <h4
                                className="split_question_text"
                                style={
                                    answered === true
                                        ? option === "optionTwo"
                                            ? { background: "#a3cea8A0" }
                                            : { background: "#d7e29b" }
                                        : {}
                                }
                            >
                                {questions[question.id].optionTwo.text}
                            </h4>
                        </span>
                        <h4 className="bottom_question">
                            {optionTwoUserCount}{" "}
                            {optionTwoUserCount !== 1 ? "users" : "user"} :{" "}
                            {optionTwoPercentage}
                            {option === "optionTwo" && (
                                <MdCheckCircle color="#79d666" />
                            )}
                        </h4>
                    </div>

                    <div className="avatar_container">
                        <div className="right">
                            <Avatar
                                align="right"
                                user={
                                    question !== null
                                        ? users[question.author].name
                                        : ""
                                }
                                avatarURL={
                                    question !== null
                                        ? users[question.author].avatarURL
                                        : ""
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ questions, users, currentUser }, props) {
    const { id } = props.match.params;
    return {
        id,
        questions,
        users,
        currentUser
    };
}

Poll.propTypes = {
    id: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(Poll);
