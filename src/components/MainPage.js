import React, { Component, Fragment } from "react";
import Nav from "./Nav";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import LoadingBar from "react-redux-loading";

import Dashboard from "./Dashboard";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";

class MainPage extends Component {
    render() {
        const { loading } = this.props;

        return (
            <div className="main-page">
                <Nav />
                <LoadingBar className="loading-bar"/>
                { loading === true ? null : (
                    <Fragment>
                        <Route path="/dashboard" exact component={Dashboard} />
                        <Route path="/add" exact component={NewQuestion} />
                        <Route path="/leaderboard" exact component={LeaderBoard} />
                        <Route path="/question/:id" component={NewQuestion} />
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
