import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";

class AddPoll extends Component {
    state = {
        optionOneText: "",
        optionTwoText: "",
        goHome: false
    };
    handleTextChange = (e, stateName) => {
        const text = e.target.value;
        this.setState(() => ({
            [stateName]: text
        }));
    };

    handleSubmit = e => {
        var { currentUser } = this.props;
        e.preventDefault();
        this.props.dispatch(
            handleAddQuestion({
                optionOneText: this.state.optionOneText,
                optionTwoText: this.state.optionOneText,
                author: currentUser
            })
        );
        this.setState(() => ({
            optionOneText: "",
            optionTwoText: "",
            goHome: true
        }));
    };

    render() {
        const { goHome, optionOneText, optionTwoText } = this.state;
        if (goHome === true) {
            return <Redirect to="/" />;
        }
        return (
            <div>
                <h3 className="center">New Question</h3>
                <h4 className="center">Would You Rather...</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className="question">
                        <div className="new_poll_side">
                            <textarea
                                placeholder="Option One"
                                value={optionOneText}
                                onChange={e =>
                                    this.handleTextChange(e, "optionOneText")
                                }
                                className="textarea"
                                maxLength={50}
                            />
                        </div>
                        <div>
                            <span>
                                <h4 className="or_text">OR...</h4>
                            </span>
                        </div>

                        <div className="new_poll_side">
                            <textarea
                                placeholder="Option Two"
                                value={optionTwoText}
                                onChange={e =>
                                    this.handleTextChange(e, "optionTwoText")
                                }
                                className="textarea"
                                maxLength={50}
                            />
                        </div>
                    </div>
                    <button
                        className="btn"
                        type="submit"
                        disabled={(optionOneText && optionTwoText) === ""}
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

function mapStateToProps({ currentUser }) {
    return {
        currentUser
    };
}

export default withRouter(connect(mapStateToProps)(AddPoll));
