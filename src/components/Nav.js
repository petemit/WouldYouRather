import React, { Component } from "react";
import { connect } from "react-redux";

class Nav extends Component {
    render() {
        return (
            <div>
                Nav component
            </div>
        )
    }
}

export default connect()(Nav);
