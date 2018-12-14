import React, { Component } from "react";
import { connect } from "react-redux";
import Avatar from "./Avatar";
import currentUser from "./../reducers/currentUser";

class QuestionList extends Component {
    render() {
        const { questions, users, answered } = this.props;
        // console.log(questions)
        // let filtered = (questions != null &&
        //     Object.values(questions)
        //         .filter(question =>
        //             answered
        //                 ? question.optionOne.votes.filter(
        //                       vote => vote === currentUser
        //                   ) ||
        //                   question.optionTwo.votes.filter(
        //                       vote => vote === currentUser
        //                   )
        //                 : question.optionOne.votes.filter(
        //                       vote => vote !== currentUser
        //                   ) ||
        //                   question.optionTwo.votes.filter(
        //                       vote => vote !== currentUser
        //                   )
        //         ))
        //         console.log(filtered)




        return (
            <div>
                <h3 className="center">Would You Rather...</h3>
                <ul>
                    {questions !== undefined &&
                        Object.values(questions)
                        
                            .map(question => {
                                return (
                                    <div key={question.id}>
                                        <li className="question">
                                            <span>
                                                <h3 className="questionText">
                                                    {
                                                        questions[question.id]
                                                            .optionOne.text
                                                    }
                                                </h3>
                                                <h3 className="questionText">
                                                    OR...
                                                </h3>
                                            </span>
                                            <div className="avatar_container">
                                                <div className="right">
                                                    <Avatar
                                                        align="right"
                                                        user={
                                                            users[
                                                                question.author
                                                            ].name
                                                        }
                                                        avatarURL={
                                                            users[
                                                                question.author
                                                            ].avatarURL
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

function mapStateToProps({ questions, users, currentUser }, { answered }) {
    return {
        questions,
        users,
        currentUser,
        answered
    };
}

export default connect(mapStateToProps)(QuestionList);
