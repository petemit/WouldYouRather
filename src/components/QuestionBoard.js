import React, { Component } from "react";
import { connect } from "react-redux";
import { handleFetchQuestions } from "./../actions/questions";

class QuestionBoard extends Component {
    componentDidMount() {
        this.props.dispatch(handleFetchQuestions());
    }
    render() {
        const { questions, users } = this.props;
        return (
            <div>
                {questions != undefined &&
                    Object.values(questions).map(question => {
                        return (
                            <div key={question.id}>
                                {users[question.author].name}
                            </div>
                        );
                    })}
            </div>
        );
    }
}

function mapStateToProps({ questions, users }) {
    return {
        questions,
        users
    };
}

export default connect(mapStateToProps)(QuestionBoard);
