import React, { Component } from "react";
import Logon from "./Logon";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import QuestionBoard from "./QuestionBoard";
import Nav from "./Nav";
import AddPoll from "./AddPoll";
import Poll from "./Poll";
import currentUser from './../reducers/currentUser';
import { handleFetchQuestions } from './../actions/questions';
import Leaderboard from './Leaderboard';

class App extends Component {
    componentDidMount() {
        if (currentUser !== "") {
            this.props.dispatch(handleFetchQuestions());
        }
    }
    render() {
        var { currentUser } = this.props;
        return (
            <Router>
                <div className="container">
                    {currentUser !== "" ? (
                        <div>
                            <Nav />
                            <Route path="/" exact component={QuestionBoard} />
                            <Route path="/questions/:id" component={Poll} />
                            <Route path="/add" component={AddPoll} />
                            <Route path="/leaderboard" component={Leaderboard} />
                        </div>
                    ) : (
                        <div>
                            <Nav />
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
