import React, { Component } from "react";
import { connect } from "react-redux";
import { Tabs, Tab } from "react-bootstrap";
import QuestionList from "./QuestionList";

class QuestionBoard extends Component {
    render() {
        return (
            <Tabs defaultActiveKey={1} id="questionTabs">
                <Tab eventKey={1} title="Unanswered Polls">
                    <QuestionList id={2} answered="false" />
                </Tab>

                <Tab eventKey={2} title="Answered Polls">
                    <QuestionList id={3} answered="true" />
                </Tab>
            </Tabs>
        );
    }
}

export default connect()(QuestionBoard);
