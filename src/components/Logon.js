import React, { Component } from "react";
import { DropdownButton, MenuItem } from "react-bootstrap";
import { connect } from "react-redux";
import { handleFetchUsers } from "../actions/users";
import { setCurrentUser } from "./../actions/currentUser";
class Logon extends Component {
    componentDidMount() {
        this.props.dispatch(handleFetchUsers());
    }

    onDropdownSelect = event => {
        this.props.dispatch(setCurrentUser(event));
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
                    {Object.keys(users).length !== 0 &&
                        Object.keys(users).map(user => {
                            return (
                                <MenuItem
                                    key={user}
                                    eventKey={user}
                                    onSelect={this.onDropdownSelect}
                                >
                                    {users[user].name}
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
