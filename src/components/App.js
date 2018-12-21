import React, { Component} from "react";
import Logon from "./Logon";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import QuestionBoard from "./QuestionBoard";
import Nav from "./Nav";
import AddPoll from "./AddPoll";
import Poll from "./Poll";

import Leaderboard from "./Leaderboard";
import Page404 from "./Page404";
import LoadingBar from 'react-redux-loading-bar'

class App extends Component {
    render() {
        var { currentUser } = this.props;
        return (
            <Router>
                <div className="container">
                    {currentUser !== "" ? (
                        <div>
                            <Nav />
                            <LoadingBar />
                            <Switch>
                                <Route
                                    path="/"
                                    exact
                                    component={QuestionBoard}
                                />
                                <Route path="/questions/:id" component={Poll} />
                                <Route path="/add" component={AddPoll} />
                                <Route
                                    path="/leaderboard"
                                    component={Leaderboard}
                                />
                                <Route component={Page404} />
                            </Switch>
                        </div>
                    ) : (
                        <div>
                            <Nav />
                            <LoadingBar />
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
