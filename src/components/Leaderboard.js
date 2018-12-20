import React, { Component } from "react";
import { connect } from "react-redux";
import Avatar from "./Avatar";
import Stat from "./Stat";
import { questionAnsweredByCurrentUser } from "./../util";

class Leaderboard extends Component {
    render() {
        const { questions, users } = this.props;
        return (
            <div>
                <h3 className="center">Leaderboard</h3>
                <ul>
                {/* Not a huge fan that I'm doing these calculations twice.  I haven't figured out a better way to do this, yet. */}
                    {users !== undefined &&
                        Object.values(users).sort((a,b) => {
                            const aAsked = Object.values(questions).filter(question => question.author === a.id).length;
                            const aAnswered = Object.values(questions).filter(question => questionAnsweredByCurrentUser(question, a.id)).length;
                            const aTotal = aAsked+aAnswered;

                            const bAsked = Object.values(questions).filter(question => question.author === b.id).length;
                            const bAnswered = Object.values(questions).filter(question => questionAnsweredByCurrentUser(question, b.id)).length;
                            const bTotal = bAsked+bAnswered;
                        return bTotal - aTotal;
                        })
                        .map(user => {
                            const asked = Object.values(questions).filter(question => question.author === user.id).length;
                            const answered = Object.values(questions).filter(question => questionAnsweredByCurrentUser(question, user.id)).length;
                            const total = asked+answered;
                            return (
                                <li key={user.id} className="user_card">
                                    <ul className="leader_text">
                                        <h4>Questions</h4>
                                        <li>
                                            <Stat
                                                text="Asked: "
                                                number={asked}
                                            />
                                        </li>
                                        <li>
                                            <Stat
                                                text="Answered: "
                                                number={answered}
                                            />
                                        </li>
                                        <li>
                                            <Stat
                                                text="Total: "
                                                number={total}
                                            />
                                        </li>
                                    </ul>
                                    <div className="avatar_container">
                                        <div className="right">
                                            <Avatar
                                                align="right"
                                                user={user.name}
                                                avatarURL={user.avatarURL}
                                            />
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ questions, users, currentUser }) {
    return {
        questions,
        users,
        currentUser
    };
}

export default connect(mapStateToProps)(Leaderboard);
