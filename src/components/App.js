import React, { Component } from "react";
import Logon from "./Logon";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import QuestionBoard from "./QuestionBoard";
import Nav from "./Nav";
import AddPoll from "./AddPoll";
import Poll from "./Poll";

class App extends Component {
    componentDidMount() {}

    render() {
        var { currentUser } = this.props;
        console.log(currentUser);
        return (
            <Router>
                <div className="container">
                    {currentUser !== "" ? (
                        <div>
                            <Nav />
                            <Route path="/" exact component={QuestionBoard} />
                            <Route path="/questions/:id" component={Poll} />
                            <Route path="/add" component={AddPoll} />
                            <Route path="/leaderboard" component={Poll} />
                        </div>
                    ) : (
                        <div>
                            <Logon />
                        </div>
                    )}
                </div>
            </Router>
        );
    }
}

function mapStateToProps({ currentUser }) {
    return {
        currentUser
    };
}

export default connect(mapStateToProps)(App);
