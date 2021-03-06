import React, { Component } from "react";
import { connect } from "react-redux";
import Avatar from "./Avatar";
import { Link, withRouter } from "react-router-dom";
import {
    questionAnsweredByCurrentUser,
    questionNotAnsweredByCurrentUser
} from "./../util";
import { PropTypes } from "prop-types";

class QuestionList extends Component {
    render() {
        const { questions, users, answered, currentUser } = this.props;
        return (
            <div>
                <h3 className="center">Would You Rather...</h3>
                <ul>
                    {questions !== null &&
                        Object.values(questions)
                            .filter(question =>
                                answered === "true"
                                    ? questionAnsweredByCurrentUser(
                                          question,
                                          currentUser
                                      )
                                    : questionNotAnsweredByCurrentUser(
                                          question,
                                          currentUser
                                      )
                            )
                            .sort((a, b) => {
                                return b.timestamp - a.timestamp;
                            })
                            .map(question => {
                                return (
                                    <Link
                                        key={question.id}
                                        to={`/questions/${question.id}`}
                                    >
                                        <div>
                                            <li
                                                className="question"
                                                style={
                                                    answered === "true"
                                                        ? {
                                                              background:
                                                                  "#a3cea8A0",
                                                              border:
                                                                  "1px solid #000000"
                                                          }
                                                        : {}
                                                }
                                            >
                                                <span>
                                                    <h3 className="question_text">
                                                        {
                                                            questions[
                                                                question.id
                                                            ].optionOne.text
                                                        }
                                                    </h3>
                                                    <h3 className="question_text">
                                                        OR...
                                                    </h3>
                                                </span>
                                                <div className="avatar_container">
                                                    <div className="right">
                                                        <Avatar
                                                            align="right"
                                                            user={
                                                                users[
                                                                    question
                                                                        .author
                                                                ].name
                                                            }
                                                            avatarURL={
                                                                users[
                                                                    question
                                                                        .author
                                                                ].avatarURL
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </li>
                                        </div>
                                    </Link>
                                );
                            })}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ questions, users, currentUser }, { answered }) {
    return {
        questions,
        users,
        currentUser,
        answered
    };
}

QuestionList.propTypes = {
    answered: PropTypes.string.isRequired
};

export default withRouter(connect(mapStateToProps)(QuestionList));
