import React, { Component } from "react";
import { DropdownButton, MenuItem } from "react-bootstrap";
import { connect } from "react-redux";
import { handleFetchUsers } from "../actions/users";
import { setCurrentUser } from "./../actions/currentUser";
import { handleFetchQuestions } from "./../actions/questions";
class Logon extends Component {
    componentDidMount() {
        this.props.dispatch(handleFetchUsers());
    }

    onDropdownSelect = event => {
        this.props.dispatch(setCurrentUser(event));
        this.props.dispatch(handleFetchQuestions());
    };
    render() {
        const { users, currentUser } = this.props;
        return (
            <div className="center">
                <h2>Welcome to Would You Rather!</h2>

                <DropdownButton
                    bsStyle="default"
                    title={
                        currentUser === ""
                            ? "Please Select a User"
                            : users[currentUser].name
                    }
                    id={"selectUser"}
                    key="1"
                >
                    {Object.values(users).length !== 0 &&
                        Object.values(users).map(user => {
                            return (
                                <MenuItem
                                    key={user.id}
                                    eventKey={user.id}
                                    onSelect={this.onDropdownSelect}
                                >
                                    {user.name}
                                </MenuItem>
                            );
                        })}
                </DropdownButton>
            </div>
        );
    }
}

function mapStateToProps({ users, currentUser }) {
    return {
        users,
        currentUser
    };
}

export default connect(mapStateToProps)(Logon);
