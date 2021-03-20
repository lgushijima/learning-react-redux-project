import React, { Component } from "react";
import Nav from "./Nav";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import LoadingBar from "react-redux-loading";

import { handleGetInitialData } from "../actions/shared";

import Dashboard from "./Dashboard";
import NewQuestion from "./NewQuestion";
import QuestionDetail from "./QuestionDetail";
import LeaderBoard from "./LeaderBoard";
import Page404 from "./Page404";

class MainPage extends Component {
    componentDidMount() {
        const { dispatch, questions } = this.props;
        
        if (!questions) {
            dispatch(handleGetInitialData());
        }
    }

    render() {
        const { isLoading } = this.props;

        return (
            <div className="main-page">
                <Nav />
                <LoadingBar className="loading-bar"/>
                { isLoading === true ? null : (
                    <Switch>
                        <Route path="/" exact render={() => (<Redirect to="/dashboard" />)} />
                        <Route path="/dashboard" exact component={Dashboard} />
                        <Route path="/add" exact component={NewQuestion} />
                        <Route path="/leaderboard" exact component={LeaderBoard} />
                        <Route path="/question/:id" component={QuestionDetail} />
                        <Route path="/" component={Page404} />
                    </Switch>
                )}
            </div>
        );
    }
}

function mapStateToProps({questions, users}){
    return {
        isLoading : (Object.keys(questions).length === 0 || Object.keys(users).length === 0)
    }
}

export default connect(mapStateToProps)(MainPage);
