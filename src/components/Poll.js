import React, { Component } from "react";
import { connect } from "react-redux";
import Avatar from "./Avatar";
import { MdCheckCircle } from "react-icons/md";
import {
    getResultsFromQuestion,
    getOption,
    questionContainsCurrentUser
} from "../util";

class Poll extends Component {
    onClickOption = (e, option) => {
        e.preventDefault();
        console.log(option);
    };
    render() {
        const { questions, users, currentUser, id } = this.props;
        let question = null;
        if (questions != null) {
            question = questions[id];
        }

        const option = getOption(question, currentUser);
        const answered = questionContainsCurrentUser(question, currentUser);

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
                    <div className="side">
                        <span>
                            <h4
                                className="splitQuestionText"
                                style={
                                    answered === true
                                        ? option === "optionOne"
                                            ? { background: "#a3cea8A0" }
                                            : { background: "#d7e29b" }
                                        : {}
                                }
                                onClick={e =>
                                    this.onClickOption(e, "optionOne")
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
                                <MdCheckCircle color="#a3cea8AA" />
                            )}
                        </h4>
                    </div>
                    <div>
                        <span>
                            <h4 className="orText">OR...</h4>
                        </span>
                    </div>
                    <div className="side">
                        <span>
                            <h4
                                className="splitQuestionText"
                                style={
                                    answered === true
                                        ? option === "optionTwo"
                                            ? { background: "#a3cea8A0" }
                                            : { background: "#d7e29b" }
                                        : {}
                                }
                                onClick={e =>
                                    this.onClickOption(e, "optionTwo")
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
                                <MdCheckCircle color="#a3cea8AA" />
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

export default connect(mapStateToProps)(Poll);
