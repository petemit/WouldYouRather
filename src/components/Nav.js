import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "../actions/currentUser";
import { clearQuestions } from "../actions/questions";

class Nav extends Component {
    Logout = e => {
        this.props.dispatch(setCurrentUser(""));
        //clearing questions so non-logged on user cannot access them
        this.props.dispatch(clearQuestions());
    };
    render() {
        const { users, currentUser } = this.props;
        return (
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/add" exact activeClassName="active">
                            Add Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/leaderboard"
                            exact
                            activeClassName="active"
                        >
                            Leaderboard
                        </NavLink>
                    </li>
                    {currentUser === "" ? (
                        ""
                    ) : (
                        <li onClick={this.Logout}>
                            <NavLink to="/" exact activeClassName="active">
                                Logout ({users[currentUser].name})
                            </NavLink>
                        </li>
                    )}
                </ul>
            </nav>
        );
    }
}
function mapStateToProps({ users, currentUser }) {
    return {
        users,
        currentUser
    };
}

export default connect(mapStateToProps)(Nav);
