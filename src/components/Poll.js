import React, { Component } from "react";
import { connect } from "react-redux";

class Poll extends Component {
    render() {
        return (
            <div>
                Poll me
            </div>
        )
    }
}

export default connect()(Poll);
