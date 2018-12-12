import React, { Component } from "react";
import { connect } from "react-redux";

class AddPoll extends Component {
    render() {
        return (
            <div>
                Add a new Question!
            </div>
        )
    }
}

export default connect()(AddPoll);
