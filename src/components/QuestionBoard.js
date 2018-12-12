import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionBoard extends Component {
    render() {
        return (
            <div>
                Welcome to The Questions!
            </div>
        )
    }
}

export default connect()(QuestionBoard)
