import React, { Component } from "react";
import { DropdownButton, MenuItem } from "react-bootstrap";
import { connect } from 'react-redux'
import { handleFetchUsers } from "../actions/users";
class Logon extends Component {
    componentDidMount() {
        this.props.dispatch(handleFetchUsers())
    }
    render() { 
        var username = this.props.selectedUser
        if (username === undefined) {
            username = "Please Select a User"
        }
        return (
            <div>
                <h2 className="center">Welcome to Would You Rather!</h2>

                <DropdownButton 
                bsStyle="default"
                title={username}
                id={"selectUser"}>
                    <MenuItem>User1</MenuItem>
                    <MenuItem>User2</MenuItem>
                </DropdownButton>
            </div>
        );
    }
}

export default connect()(Logon);
