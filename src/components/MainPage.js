import React, { Component, Fragment } from "react";
import Nav from "./Nav";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoadingBar from "react-redux-loading";

import Dashboard from "./Dashboard";
import NewQuestion from "./NewQuestion";
import QuestionDetail from "./QuestionDetail";
import LeaderBoard from "./LeaderBoard";
import Page404 from "./Page404";

class MainPage extends Component {
    render() {
        const { loading } = this.props;

        return (
            <div className="main-page">
                <Nav />
                <LoadingBar className="loading-bar"/>
                { loading === true ? null : (
                    <Fragment>
                        <Switch>
                            <Route path="/dashboard" exact component={Dashboard} />
                            <Route path="/add" exact component={NewQuestion} />
                            <Route path="/leaderboard" exact component={LeaderBoard} />
                            <Route path="/question/:id" component={QuestionDetail} />
                            <Route path="/" component={Page404} />
                        </Switch>
                    </Fragment>
                )}
            </div>
        );
    }
}

function mapStateToProps({questions, users}){
    return {
        loading : (Object.keys(questions).length === 0 || Object.keys(users).length === 0)
    }
}

export default connect(mapStateToProps)(MainPage);
